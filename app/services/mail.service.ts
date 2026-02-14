import { Resend } from 'resend';

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