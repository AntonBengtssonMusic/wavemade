import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");
    const { name, email, brand, budget, service, message } = await req.json();

    await resend.emails.send({
      from: "WaveMade Contact <onboarding@resend.dev>",
      to: "wavemadestudio@gmail.com",
      subject: `New enquiry from ${name} — ${brand}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f5f5f7; border-radius: 16px;">
          <h2 style="color: #1D1D1F; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #6B5CFF; font-size: 13px; margin-top: 0;">wavemade.studio</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px;"><a href="mailto:${email}" style="color: #6B5CFF;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px;">Brand</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px; font-weight: 600;">${brand}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px;">Monthly Budget</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px;">${budget}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px;">Service Needed</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px;">${service}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #6E6E73; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1D1D1F; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 16px; background: white; border-radius: 12px; border-left: 3px solid #6B5CFF;">
            <p style="margin: 0; color: #6E6E73; font-size: 12px;">Reply directly to this email to contact ${name} at ${email}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
