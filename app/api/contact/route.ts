import { NextResponse } from 'next/server';
import { mailService } from '@/app/services/mail.service';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    await mailService.sendContactRequest({
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || '').trim(),
      message: String(message).trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
