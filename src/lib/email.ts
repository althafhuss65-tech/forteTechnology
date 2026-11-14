import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEnquiryEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  recipientEmail: string;
}) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: data.recipientEmail,
    replyTo: data.email,
    subject: `New Enquiry: ${data.subject || "Website Contact Form"} - ${data.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <div style="background:#354B35;padding:24px 32px;">
          <h1 style="color:#fff;margin:0;font-size:20px;">New Enquiry - Forte Technologies</h1>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;">${data.phone}</td></tr>` : ""}
            ${data.subject ? `<tr><td style="padding:8px 0;color:#6b7280;">Subject</td><td style="padding:8px 0;">${data.subject}</td></tr>` : ""}
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
          <p style="color:#6b7280;margin:0 0 8px;">Message</p>
          <p style="margin:0;line-height:1.6;white-space:pre-wrap;">${data.message}</p>
        </div>
        <div style="background:#f9fafb;padding:16px 32px;text-align:center;color:#9ca3af;font-size:13px;">
          Forte Technologies · info@fortetechnologies.in · +91 7899298718
        </div>
      </div>
    `,
  });
}
