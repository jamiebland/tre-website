import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "TRE Bryanston <onboarding@resend.dev>",
      to: ["bsrjhb@mweb.co.za"],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f6f1; border-radius: 8px;">
          <h2 style="color: #2A4233; margin-bottom: 4px; font-size: 20px;">New Contact Form Submission</h2>
          <p style="color: #7A756D; font-size: 13px; margin-top: 0; margin-bottom: 24px;">TRE Bryanston Website</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #7A756D; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #1C1C1A; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #7A756D; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #1C1C1A; font-size: 14px;"><a href="mailto:${email}" style="color: #4A6B4D;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #7A756D; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE9DF; color: #1C1C1A; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #7A756D; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #1C1C1A; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 12px; color: #B0A99E;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
