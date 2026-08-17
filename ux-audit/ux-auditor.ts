import { chromium, type Browser, type Page } from 'playwright';
import { spawn, type ChildProcess } from 'node:child_process';
import { once } from 'node:events';
import { createRequire } from 'node:module';
import { setTimeout as delay } from 'node:timers/promises';
import {
  createPartFromBase64,
  createPartFromText,
  createUserContent,
  GoogleGenAI,
} from '@google/genai';
import * as fs from 'fs';
import 'dotenv/config'; // Автоматично підтягує .env файл

// 1. Ініціалізація ШІ
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('❌ Не знайдено GEMINI_API_KEY у файлі .env');
  process.exit(1);
}
const ai = new GoogleGenAI({ apiKey });
const model = process.env.GEMINI_MODEL ?? 'gemini-3.6-flash';
const auditUrl = process.env.AUDIT_URL ?? 'http://localhost:3000';
const auditDate = new Date().toISOString().slice(0, 10);

type AuditScreenshot = {
  label: string;
  buffer: Buffer;
};

type DeviceConfig = {
  name: string;
  viewport: { width: number; height: number };
  isMobile?: boolean;
  hasTouch?: boolean;
};

const DEVICES: DeviceConfig[] = [
  { name: 'Desktop 1440x900', viewport: { width: 1440, height: 900 } },
  {
    name: 'Mobile 390x844',
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  },
];

const MAX_PAGE_SCREENSHOTS_PER_DEVICE = 7;
const MAX_FOCUS_SCREENSHOTS_PER_DEVICE = 3;
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);

async function isSiteReachable(url: string) {
  try {
    await fetch(url, { signal: AbortSignal.timeout(2500) });
    return true;
  } catch {
    return false;
  }
}

async function waitForSite(url: string, server: ChildProcess) {
  const deadline = Date.now() + 60000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js dev server завершився з кодом ${server.exitCode}.`);
    }
    if (await isSiteReachable(url)) return;
    await delay(500);
  }

  throw new Error(`Next.js dev server не став доступним за 60 секунд: ${url}`);
}

async function ensureAuditSite(): Promise<ChildProcess | null> {
  if (await isSiteReachable(auditUrl)) {
    console.log(`✅ Сайт уже доступний: ${auditUrl}`);
    return null;
  }

  const url = new URL(auditUrl);
  if (url.protocol !== 'http:' || !LOCAL_HOSTS.has(url.hostname)) {
    throw new Error(
      `Сайт недоступний: ${auditUrl}. Автозапуск дозволений лише для локального HTTP URL.`
    );
  }

  const port = url.port || '80';
  const require = createRequire(import.meta.url);
  const nextCli = require.resolve('next/dist/bin/next');

  console.log(`🟢 Сайт не запущений — автоматично запускаємо Next.js на порту ${port}...`);
  const server = spawn(process.execPath, [nextCli, 'dev', '-p', port], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
  });

  try {
    await waitForSite(auditUrl, server);
    console.log('✅ Next.js готовий, починаємо аудит.');
    return server;
  } catch (error) {
    server.kill('SIGTERM');
    throw error;
  }
}

async function stopManagedServer(server: ChildProcess | null) {
  if (!server || server.exitCode !== null) return;

  console.log('🛑 Зупиняємо автоматично запущений Next.js server...');
  const exited = once(server, 'exit');
  server.kill('SIGTERM');
  await Promise.race([exited, delay(5000)]);

  if (server.exitCode === null) {
    server.kill('SIGKILL');
  }
}
// 2. Промпт для UX-аудиту
const SYSTEM_PROMPT = `
Ти — Senior UX/UI Researcher та Lead Frontend Developer. 
Твоя задача — провести аудит цього інтерфейсу на основі 10 евристик юзабіліті Якоба Нільсена.

Проаналізуй УСІ надані скріншоти та технічні дані сторінки за 10 евристиками
юзабіліті Якоба Нільсена.

КРИТИЧНО ВАЖЛИВІ ПРАВИЛА:
- Не зупиняйся на першій проблемі в межах евристики. Знайди всі окремі,
  підтверджені доказами проблеми на desktop і mobile.
- Кожна окрема проблема повинна мати власний рядок. Не об'єднуй різні
  проблеми лише тому, що вони належать до однієї евристики.
- Кількість проблем на евристику не обмежена. Намагайся знайти щонайменше
  3 проблеми на евристику, якщо для них є докази, але нічого не вигадуй.
- Одна коренева проблема, що повторюється в кількох місцях, — це один запис
  із переліком усіх виявлених місць.
- Чітко відділяй підтверджені проблеми від припущень, які потребують
  інтерактивного або користувацького тестування.
- Враховуй не лише accessibility, а й зрозумілість текстів, очікування
  користувача, навігацію, зворотний зв'язок, запобігання помилкам,
  консистентність, когнітивне навантаження, адаптивність та discoverability.
- Позитивні спостереження не рахуй як проблеми.
- Відсутність певної інформації у технічних доказах не доводить відсутність
  функції в застосунку. У такому випадку використовуй Confidence "Needs testing".
- Не заявляй точний коефіцієнт контрастності, якщо його неможливо обчислити
  з наданих кольорів foreground/background.
- Оцінюй часові формулювання та дати лише відносно явно наданої дати аудиту.

Виведи результати у Markdown:
1. **Охоплення аудиту** — які пристрої, ділянки сторінки та стани перевірені,
   а також обмеження статичного аудиту.
2. **Усі знайдені проблеми** — таблиця, де КОЖНА проблема є окремим рядком:
   ID, евристика, елемент/місце, пристрій, конкретний доказ, наслідок для
   користувача, Severity (Low/Medium/High/Critical), Confidence
   (Confirmed/Likely/Needs testing), рекомендація.
3. **Матриця покриття 10 евристик** — для кожної евристики: кількість
   підтверджених проблем, що саме перевірено, що ще потребує тестування.
4. **Позитивні патерни** — окремо, без змішування з проблемами.
5. **Пріоритетний Action Plan** — Critical/High, Quick Wins, довгострокові
   зміни; посилайся на ID проблем.
6. **Сценарії для додаткового тестування** — лише те, що неможливо надійно
   встановити з наданих доказів.
`;

async function collectTechnicalEvidence(page: Page, device: string) {
  return page.evaluate((deviceName) => {
    const text = (element: Element | null) =>
      element?.textContent?.replace(/\s+/g, ' ').trim().slice(0, 180) ?? '';

    const accessibleName = (element: Element) => {
      const labelledBy = element.getAttribute('aria-labelledby');
      const labelledText = labelledBy
        ?.split(/\s+/)
        .map(id => text(document.getElementById(id)))
        .filter(Boolean)
        .join(' ');

      return (
        element.getAttribute('aria-label') ||
        labelledText ||
        element.getAttribute('alt') ||
        element.getAttribute('title') ||
        text(element) ||
        element.getAttribute('placeholder') ||
        ''
      ).slice(0, 180);
    };

    const describeElement = (element: Element) => {
      const htmlElement = element as HTMLElement;
      const rect = htmlElement.getBoundingClientRect();
      const styles = getComputedStyle(htmlElement);

      return {
        tag: element.tagName.toLowerCase(),
        role: element.getAttribute('role'),
        name: accessibleName(element),
        href: element.getAttribute('href'),
        type: element.getAttribute('type'),
        disabled: element.hasAttribute('disabled') || element.getAttribute('aria-disabled'),
        tabIndex: htmlElement.tabIndex,
        size: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
        smallTarget: rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44),
        visible: rect.width > 0 && rect.height > 0 && styles.visibility !== 'hidden',
        fontSize: styles.fontSize,
        color: styles.color,
        backgroundColor: styles.backgroundColor,
      };
    };

    const interactiveSelector =
      'a, button, input, select, textarea, summary, [role="button"], [tabindex]';
    const formSelector = 'input, select, textarea';

    return {
      device: deviceName,
      document: {
        title: document.title,
        url: location.href,
        lang: document.documentElement.lang || null,
        viewport: `${innerWidth}x${innerHeight}`,
        pageSize: `${document.documentElement.scrollWidth}x${document.documentElement.scrollHeight}`,
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      },
      headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .slice(0, 100)
        .map(element => ({ level: element.tagName.toLowerCase(), text: text(element) })),
      landmarks: Array.from(
        document.querySelectorAll('header, nav, main, aside, footer, [role="banner"], [role="navigation"], [role="main"], [role="contentinfo"]')
      )
        .slice(0, 60)
        .map(element => ({ tag: element.tagName.toLowerCase(), role: element.getAttribute('role'), name: accessibleName(element) })),
      interactiveElements: Array.from(document.querySelectorAll(interactiveSelector))
        .slice(0, 160)
        .map(describeElement),
      images: Array.from(document.querySelectorAll('img'))
        .slice(0, 100)
        .map(image => ({
          src: image.currentSrc || image.src,
          alt: image.getAttribute('alt'),
          size: `${image.naturalWidth}x${image.naturalHeight}`,
          renderedSize: `${Math.round(image.getBoundingClientRect().width)}x${Math.round(image.getBoundingClientRect().height)}`,
        })),
      formControls: Array.from(document.querySelectorAll(formSelector))
        .slice(0, 100)
        .map(element => ({
          ...describeElement(element),
          required: element.hasAttribute('required'),
          autocomplete: element.getAttribute('autocomplete'),
        })),
    };
  }, device);
}

async function capturePageSections(page: Page, device: string): Promise<AuditScreenshot[]> {
  const dimensions = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    viewportHeight: innerHeight,
  }));
  const maxScroll = Math.max(0, dimensions.scrollHeight - dimensions.viewportHeight);
  const sectionCount = Math.min(
    MAX_PAGE_SCREENSHOTS_PER_DEVICE,
    Math.max(1, Math.ceil(dimensions.scrollHeight / dimensions.viewportHeight))
  );
  const positions = Array.from({ length: sectionCount }, (_, index) =>
    sectionCount === 1 ? 0 : Math.round((maxScroll * index) / (sectionCount - 1))
  );
  const screenshots: AuditScreenshot[] = [];

  for (const [index, y] of positions.entries()) {
    await page.evaluate(scrollY => window.scrollTo({ top: scrollY, behavior: 'instant' }), y);
    await page.waitForTimeout(200);
    screenshots.push({
      label: `${device} — page section ${index + 1}/${positions.length}, scrollY=${y}`,
      buffer: await page.screenshot({ type: 'jpeg', quality: 82 }),
    });
  }

  return screenshots;
}

async function captureKeyboardStates(page: Page, device: string) {
  const screenshots: AuditScreenshot[] = [];
  const focusPath: Array<Record<string, unknown>> = [];

  await page.evaluate(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    (document.activeElement as HTMLElement | null)?.blur();
  });

  for (let index = 0; index < 12; index += 1) {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      const element = document.activeElement as HTMLElement | null;
      if (!element || element === document.body) return null;
      const rect = element.getBoundingClientRect();
      const styles = getComputedStyle(element);
      return {
        tag: element.tagName.toLowerCase(),
        text: element.textContent?.replace(/\s+/g, ' ').trim().slice(0, 120),
        ariaLabel: element.getAttribute('aria-label'),
        href: element.getAttribute('href'),
        outline: styles.outline,
        boxShadow: styles.boxShadow,
        position: `${Math.round(rect.x)},${Math.round(rect.y)}`,
        size: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
      };
    });

    if (!focused) break;
    focusPath.push({ order: index + 1, ...focused });

    if (screenshots.length < MAX_FOCUS_SCREENSHOTS_PER_DEVICE) {
      screenshots.push({
        label: `${device} — keyboard focus step ${index + 1}: ${focused.tag} "${focused.ariaLabel || focused.text || ''}"`,
        buffer: await page.screenshot({ type: 'jpeg', quality: 82 }),
      });
    }
  }

  return { screenshots, focusPath };
}

async function auditDevice(browser: Browser, config: DeviceConfig) {
  const context = await browser.newContext({
    viewport: config.viewport,
    deviceScaleFactor: 1,
    isMobile: config.isMobile,
    hasTouch: config.hasTouch,
  });
  // tsx/esbuild додає цей helper до серіалізованих page.evaluate callbacks.
  await context.addInitScript({ content: 'globalThis.__name = (target) => target;' });
  const page = await context.newPage();

  try {
    console.log(`🌐 ${config.name}: відкриваємо ${auditUrl}...`);
    await page.goto(auditUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);

    console.log(`📸 ${config.name}: знімаємо всю сторінку секціями...`);
    const pageScreenshots = await capturePageSections(page, config.name);
    const evidence = await collectTechnicalEvidence(page, config.name);

    console.log(`⌨️ ${config.name}: перевіряємо keyboard focus...`);
    const keyboard = await captureKeyboardStates(page, config.name);

    return {
      screenshots: [...pageScreenshots, ...keyboard.screenshots],
      evidence: { ...evidence, keyboardFocusPath: keyboard.focusPath },
    };
  } finally {
    await context.close();
  }
}

async function runAudit() {
  const managedServer = await ensureAuditSite();

  try {
    console.log('🚀 Запуск браузера...');
    const browser = await chromium.launch({ headless: true });
    const screenshots: AuditScreenshot[] = [];
    const technicalEvidence: unknown[] = [];

    try {
      for (const device of DEVICES) {
        try {
          const result = await auditDevice(browser, device);
          screenshots.push(...result.screenshots);
          technicalEvidence.push(result.evidence);
        } catch (error) {
          console.error(`❌ ${device.name}: помилка збору даних:`, (error as Error).message);
        }
      }
    } finally {
      await browser.close();
      console.log(`✅ Зібрано скріншотів: ${screenshots.length}`);
    }

    // 3. Аналіз через ШІ
    if (screenshots.length > 0) {
      console.log('🧠 Відправляємо скріншоти у Gemini API...');
    
    const contentParts = [
      createPartFromText(SYSTEM_PROMPT),
      createPartFromText(`КОНТЕКСТ АУДИТУ:\nДата аудиту: ${auditDate}\nURL: ${auditUrl}`),
      createPartFromText(
        `ТЕХНІЧНІ ДОКАЗИ З DOM ТА KEYBOARD-ПЕРЕВІРКИ:\n${JSON.stringify(technicalEvidence, null, 2)}`
      ),
      ...screenshots.flatMap(screenshot => [
        createPartFromText(`СКРІНШОТ: ${screenshot.label}`),
        createPartFromBase64(screenshot.buffer.toString('base64'), 'image/jpeg'),
      ]),
    ];
    
    try {
      const response = await ai.models.generateContent({
        model,
        contents: createUserContent(contentParts),
        config: {
          maxOutputTokens: 32768,
          temperature: 0.2,
        },
      });
      const markdown = response.text;

      if (!markdown) {
        throw new Error('Gemini API повернув порожню відповідь.');
      }
      
      // Зберігаємо звіт у поточну папку
      const filename = `ux-audit-report.md`;
      fs.writeFileSync(filename, markdown);
      console.log(`🎉 Аудит успішно завершено! Звіт збережено у файл: ${filename}`);
      
    } catch (apiError) {
      console.error('❌ Помилка під час запиту до Gemini API:', apiError);
      process.exitCode = 1;
    }
    } else {
      console.log('⚠️ Немає скріншотів для аналізу.');
      process.exitCode = 1;
    }
  } finally {
    await stopManagedServer(managedServer);
  }
}

runAudit().catch(error => {
  console.error('❌ Не вдалося запустити UX-аудит:', (error as Error).message);
  process.exitCode = 1;
});
