import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactPayload

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    const smtpUser = process.env.SMTP_GMAIL_USER
    const smtpPass = process.env.SMTP_GMAIL_PASS
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json(
        { error: "Email service is not configured. Please set environment variables." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    })

    const safeName = sanitizeHeaderValue(name)
    const safeEmail = sanitizeHeaderValue(email)
    const safeMessage = message.trim()
    const escapedName = escapeHtml(safeName)
    const escapedEmail = escapeHtml(safeEmail)
    const escapedMessage = escapeHtml(safeMessage).replace(/\n/g, "<br />")
    const receivedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    })

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: toEmail,
      replyTo: safeEmail,
      subject: `New contact form message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="margin:0;padding:24px;background:#f6f8fb;font-family:Arial,sans-serif;color:#0f172a;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(90deg,#2563eb,#7c3aed);color:#ffffff;">
                <h2 style="margin:0;font-size:20px;line-height:1.3;">New Portfolio Contact Message</h2>
                <p style="margin:6px 0 0 0;font-size:13px;opacity:0.95;">Received on ${receivedAt}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 12px;">
                  <tr>
                    <td style="width:110px;font-size:13px;color:#64748b;font-weight:700;">Name</td>
                    <td style="font-size:14px;color:#0f172a;">${escapedName}</td>
                  </tr>
                  <tr>
                    <td style="width:110px;font-size:13px;color:#64748b;font-weight:700;">Email</td>
                    <td style="font-size:14px;color:#0f172a;">
                      <a href="mailto:${escapedEmail}" style="color:#2563eb;text-decoration:none;">${escapedEmail}</a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                  <p style="margin:0 0 8px 0;font-size:13px;color:#64748b;font-weight:700;">Message</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#0f172a;">${escapedMessage}</p>
                </div>
                <p style="margin:18px 0 0 0;font-size:12px;color:#64748b;">
                  Tip: Use reply in your mail client to respond directly to ${escapedName}.
                </p>
              </td>
            </tr>
          </table>
        </div>
      `
    })

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
