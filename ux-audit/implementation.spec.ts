import { expect, test } from '@playwright/test';

const baseUrl = process.env.AUDIT_URL ?? 'http://localhost:3000';

test.describe('UX audit implementation', () => {
  test('desktop navigation, content, projects, and inquiry CTA', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    await expect(page.locator('h1')).toContainText('Websites & web systems built for your goals');
    await expect(page.getByLabel('Switch to Ukrainian language')).toBeVisible();

    for (const sectionId of ['about', 'experience', 'solutions']) {
      await page.locator(`nav a[href="#${sectionId}"]`).click();
      await expect.poll(async () => {
        const targetBox = await page.locator(`#${sectionId}`).boundingBox();
        const navigationBox = await page.locator('nav').boundingBox();
        if (!targetBox || !navigationBox) return null;
        return Math.abs(Math.round(targetBox.y - (navigationBox.y + navigationBox.height)));
      }).toBe(0);
    }
    await page.locator('nav a[href="#about"]').click();
    await expect(page.locator('nav a[href="#about"]')).toHaveAttribute('aria-current', 'location');

    const projectCards = page.locator('#projects article');
    await expect(projectCards).toHaveCount(4);
    for (let index = 0; index < await projectCards.count(); index += 1) {
      await expect(projectCards.nth(index).locator('a[href*="/projects/"]')).toHaveCount(1);
    }

    await page.locator('#contact').scrollIntoViewIfNeeded();
    await expect(page.locator('#contact form')).toHaveCount(0);
    await expect(page.locator('#contact a[href="/inquiry"]')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Back to top' })).toBeVisible();
  });

  test('inquiry draft survives reload and a submitted inquiry cannot be sent twice', async ({ page }) => {
    const inquiryViewportHeight = 768;
    await page.setViewportSize({ width: 1440, height: inquiryViewportHeight });
    const expectSingleViewport = async () => {
      const dimensions = await page.evaluate(() => ({
        pageHeight: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight,
      }));
      expect(dimensions.pageHeight).toBeLessThanOrEqual(dimensions.viewportHeight);
    };

    let submissionRequests = 0;
    await page.route('**/api/inquiry', async route => {
      submissionRequests += 1;
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) });
    });

    await page.goto(`${baseUrl}/inquiry`, { waitUntil: 'networkidle' });
    await expectSingleViewport();
    const privacyNotice = page.locator('form p:has(a[href="/privacy-policy"])');
    const privacyBox = await privacyNotice.boundingBox();
    expect(privacyBox).not.toBeNull();
    expect(inquiryViewportHeight - ((privacyBox?.y ?? 0) + (privacyBox?.height ?? 0))).toBeLessThanOrEqual(32);
    await expect(page.getByText('Not Sure Yet', { exact: true })).toBeVisible();
    const overflowingCards = await page.locator('[data-option-card]').evaluateAll(cards => cards.filter(card => {
      const content = card.querySelector('[data-option-content]');
      if (!content) return false;
      const cardBox = card.getBoundingClientRect();
      const contentBox = content.getBoundingClientRect();
      return contentBox.top < cardBox.top || contentBox.bottom > cardBox.bottom;
    }).length);
    expect(overflowingCards).toBe(0);
    await page.getByText('Website or Landing Page', { exact: true }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expectSingleViewport();
    await page.getByRole('combobox', { name: 'Features' }).click();
    await page.getByRole('option', { name: 'Custom Responsive Design' }).click();
    await page.getByRole('button', { name: 'Add feature' }).click();
    await page.getByRole('combobox', { name: 'Features' }).click();
    await page.getByRole('option', { name: 'Contact / Lead Form' }).click();
    await page.getByRole('button', { name: 'Add feature' }).click();
    await page.getByRole('button', { name: 'Remove: Custom Responsive Design' }).click();
    await expect(page.getByRole('button', { name: 'Remove: Contact / Lead Form' })).toBeVisible();
    await page.locator('#details').fill('A focused website that explains our service and sends qualified leads to our team.');
    await expectSingleViewport();
    const detailsBox = await page.locator('#details').boundingBox();
    expect(detailsBox).not.toBeNull();
    expect(detailsBox?.height ?? 0).toBeGreaterThanOrEqual(80);

    await page.reload({ waitUntil: 'networkidle' });
    await expect(page.locator('[aria-current="step"]')).toHaveText('Features');
    await expect(page.getByRole('button', { name: 'Remove: Contact / Lead Form' })).toBeVisible();
    await expect(page.locator('#details')).toHaveValue(/qualified leads/);

    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page.getByRole('radio', { name: /Website or Landing Page/ })).toBeChecked();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expectSingleViewport();

    await page.getByRole('combobox', { name: 'Current Project Stage' }).click();
    await expect(page.getByRole('option', { name: 'Not Sure Yet' })).toBeVisible();
    await page.getByRole('option', { name: 'Requirements / Design Ready' }).click();
    await page.getByRole('combobox', { name: 'Preferred Launch Timing' }).click();
    await page.getByRole('option', { name: 'Within 1–2 Months' }).click();
    await page.getByText('$1k–$5k', { exact: true }).click();
    await page.getByText('Need an Estimate', { exact: true }).click();
    await expect(page.getByRole('checkbox', { name: 'Need an Estimate' })).toBeChecked();
    await expect(page.getByRole('radio', { name: '$1k–$5k', exact: true })).not.toBeChecked();
    await page.getByText('$1k–$5k', { exact: true }).click();
    await expect(page.getByRole('checkbox', { name: 'Need an Estimate' })).not.toBeChecked();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expectSingleViewport();

    await page.locator('#name').fill('Alex Morgan');
    await page.locator('#email').fill('alex@example.com');
    await page.locator('#company').fill('Acme');
    await page.getByRole('button', { name: 'Send Project Brief' }).click();

    await expect(page.getByRole('heading', { name: 'Thank You — I’ll Review It Shortly' })).toBeVisible();
    expect(submissionRequests).toBe(1);

    await page.reload({ waitUntil: 'networkidle' });
    await expect(page.getByRole('heading', { name: 'Thank You — I’ll Review It Shortly' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Project Brief' })).toHaveCount(0);
    expect(submissionRequests).toBe(1);

    const anotherProjectButton = page.getByRole('button', { name: 'Submit Another Project' });
    await anotherProjectButton.click();
    await expect(page.getByRole('dialog', { name: 'Start Another Project?' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog', { name: 'Start Another Project?' })).toHaveCount(0);
    await expect(anotherProjectButton).toBeFocused();
  });

  test('mobile menu is trapped, escapable, and touch targets are large enough', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    const menuButton = page.locator('button[aria-controls="mobile-navigation"]');
    await expect(menuButton).toHaveAccessibleName('Open menu');
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(menuButton).toHaveAccessibleName('Close menu');
    await expect(page.locator('#mobile-navigation')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(menuButton).toHaveAccessibleName('Open menu');
    await expect(menuButton).toBeFocused();

    const targets = page.locator(
      '#solutions a, #projects a, [aria-label="Profiles and contact links"] a'
    );
    const undersized = await targets.evaluateAll(elements =>
      elements
        .map(element => ({
          text: element.getAttribute('aria-label') || element.textContent?.trim() || element.tagName,
          height: element.getBoundingClientRect().height,
        }))
        .filter(target => target.height < 44)
    );
    expect(undersized).toEqual([]);
  });

  test('mobile feature chips wrap without horizontal scrolling', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseUrl}/inquiry`, { waitUntil: 'networkidle' });
    await page.getByText('Website or Landing Page', { exact: true }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    for (const feature of ['Custom Responsive Design', 'Contact / Lead Form', 'Analytics & Conversion Tracking']) {
      await page.getByRole('combobox', { name: 'Features' }).click();
      await page.getByRole('option', { name: feature }).click();
      await page.getByRole('button', { name: 'Add feature' }).click();
    }

    const chipLayout = await page.locator('div[aria-label="Features"]').evaluate(container => {
      const rowPositions = new Set(Array.from(container.children).map(chip => Math.round(chip.getBoundingClientRect().top)));
      return {
        rows: rowPositions.size,
        hasHorizontalOverflow: container.scrollWidth > container.clientWidth + 1,
      };
    });
    expect(chipLayout.rows).toBeGreaterThan(1);
    expect(chipLayout.hasHorizontalOverflow).toBe(false);
  });

  test('booking service route is available in both locales', async ({ page }) => {
    for (const path of ['/services/booking-system', '/ua/services/booking-system']) {
      const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('relevant work CTA scrolls its heading directly below the fixed navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseUrl}/ua/services/booking-system`, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Переглянути релевантні кейси' }).click();
    await expect(page).toHaveURL(/#work$/);

    await expect.poll(async () => {
      const targetBox = await page.locator('#work').boundingBox();
      const navigationBox = await page.locator('nav').boundingBox();
      if (!targetBox || !navigationBox) return null;
      return Math.abs(Math.round(targetBox.y - (navigationBox.y + navigationBox.height)));
    }).toBe(0);
  });
});
