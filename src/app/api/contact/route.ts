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

    // Rate limit: 5 submissions per IP per hour
    const recentCount = await prisma.enquiry.count({
      where: { ipAddress: ip, createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
    });
    if (recentCount >= 5) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    // Get configured settings, fallback to defaults
    let recipientEmail = process.env.ADMIN_EMAIL || "info@fortetechnologies.in";
    let sitePhone: string | undefined;
    let siteEmail: string | undefined;
    try {
      const settings = await prisma.siteSetting.findMany({
        where: { key: { in: ["enquiry_email", "phone", "email"] } },
      });
      for (const s of settings) {
        if (s.key === "enquiry_email" && s.value) recipientEmail = s.value;
        if (s.key === "phone" && s.value) sitePhone = s.value;
        if (s.key === "email" && s.value) siteEmail = s.value;
      }
    } catch {
      // use fallbacks
    }

    // Send email notification
    await sendEnquiryEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      recipientEmail,
      sitePhone,
      siteEmail,
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
