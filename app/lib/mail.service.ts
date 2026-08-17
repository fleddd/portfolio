import { Resend } from 'resend';
import { getInquiryFeatureLabel, getInquiryOptionLabel, type InquirySubmission } from '@/constants/inquiry';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'fedkiv20172@gmail.com';

export type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export const mailService = {
    /** Відправити лист адміну з повідомленням з контактної форми */
    async sendContactRequest(data: ContactFormData) {
        const createdAt = new Date();

        await resend.emails.send({
            from: EMAIL_FROM,
            to: ADMIN_EMAIL,
            replyTo: data.email,
            subject: `📩 Portfolio: ${data.name} — ${data.subject || 'No Subject'}`,
            html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject || '-')}</p>
        <p><strong>Date:</strong> ${createdAt.toLocaleString('en-GB')}</p>
        <hr/>
        <h3>Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
        });
    },

    async sendInquiryRequest(data: InquirySubmission) {
        const createdAt = new Intl.DateTimeFormat('en-GB', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'Europe/Kyiv',
        }).format(new Date());
        const projectType = getInquiryOptionLabel(data.locale, 'projectTypes', data.projectType);
        const features = data.features.map(feature => getInquiryFeatureLabel(data.locale, feature));
        const stage = getInquiryOptionLabel(data.locale, 'stages', data.stage);
        const timeline = getInquiryOptionLabel(data.locale, 'timelines', data.timeline);
        const budget = getInquiryOptionLabel(data.locale, 'budgets', data.budget);

        await resend.emails.send({
            from: EMAIL_FROM,
            to: ADMIN_EMAIL,
            replyTo: data.email,
            subject: `🚀 New project inquiry: ${projectType} — ${data.name}`,
            html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Reference:</strong> ${escapeHtml(data.submissionId)}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(createdAt)} (Kyiv)</p>
        <hr/>
        <h2>Project</h2>
        <p><strong>Type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Requested features:</strong></p>
        <ul>${features.map(feature => `<li>${escapeHtml(feature)}</li>`).join('')}</ul>
        <p><strong>Current stage:</strong> ${escapeHtml(stage)}</p>
        <p><strong>Preferred timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <h3>Project context</h3>
        <p>${escapeHtml(data.details).replace(/\n/g, '<br/>')}</p>
        <hr/>
        <h2>Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Company / website:</strong> ${escapeHtml(data.company || '-')}</p>
        <p><strong>Form language:</strong> ${data.locale === 'ua' ? 'Ukrainian' : 'English'}</p>
      `,
        });
    },
};

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
