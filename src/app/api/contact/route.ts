import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendEnquiryEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().max(20).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Save to database
    await prisma.enquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        ipAddress: ip,
      },
    });

    // Get configured recipient email from settings, fallback to env
    let recipientEmail = process.env.ADMIN_EMAIL || "info@fortetechnologies.in";
    try {
      const setting = await prisma.siteSetting.findUnique({
        where: { key: "enquiry_email" },
      });
      if (setting?.value) recipientEmail = setting.value;
    } catch {
      // use fallback
    }

    // Send email notification
    await sendEnquiryEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      recipientEmail,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
