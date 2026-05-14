import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Required .env.local variables:
// SMTP_HOST=smtp.gmail.com         (or your SMTP provider)
// SMTP_PORT=587                     (usually 587 for TLS or 465 for SSL)
// SMTP_USER=your@email.com
// SMTP_PASS=your_smtp_password_or_app_password

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      "SMTP credentials not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local"
    );
    // Return success anyway so the UI doesn't break during development
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${SMTP_USER}>`,
    replyTo: email,
    to: "Msalats@gmail.com",
    subject: `[Portfolio Contact] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1A1A1A;">New portfolio contact</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #E0DAD3;" />
        <p style="white-space: pre-wrap; color: #333;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
