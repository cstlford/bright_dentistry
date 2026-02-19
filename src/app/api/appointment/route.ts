import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, preferredDate, preferredTime, service, message } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    // Configure transporter — update env vars before deploying
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST     || "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "",
      },
    });

    const toAddress = process.env.APPOINTMENT_TO || process.env.SMTP_USER || "";

    await transporter.sendMail({
      from:    `"Bright Family Dentistry Website" <${process.env.SMTP_USER}>`,
      to:      toAddress,
      subject: `New Appointment Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #237E7B; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 600;">
              New Appointment Request
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">
              Submitted via brightfamilydentistry.com
            </p>
          </div>
          <div style="background: #f7f9f9; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; width: 36%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; font-size: 14px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${email || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Preferred Date</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${preferredDate || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Preferred Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${preferredTime || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${service || "—"}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0; font-size: 14px;">${message}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #e8f4f4; border-radius: 8px; border-left: 4px solid #237E7B;">
              <p style="margin: 0; font-size: 13px; color: #237E7B; font-weight: 600;">
                Action Required: Please contact ${name} to confirm their appointment.
              </p>
            </div>
          </div>
        </div>
      `,
      // Plain-text fallback
      text: `
New Appointment Request — Bright Family Dentistry

Name:           ${name}
Phone:          ${phone}
Email:          ${email || "—"}
Preferred Date: ${preferredDate || "—"}
Preferred Time: ${preferredTime || "—"}
Service:        ${service || "—"}
Notes:          ${message || "—"}

Please contact the patient to confirm their appointment.
      `.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[appointment/route] Error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
