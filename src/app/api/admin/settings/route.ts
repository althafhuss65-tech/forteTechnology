import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const ALLOWED_KEYS = new Set([
  "phone", "email", "address", "enquiry_email",
  "facebook", "linkedin", "instagram", "twitter", "youtube",
  "site_tagline", "footer_copyright",
]);

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body: Record<string, string> = await req.json();
    const entries = Object.entries(body).filter(([key]) => ALLOWED_KEYS.has(key));

    await Promise.all(
      entries.map(([key, value]) =>
        prisma.siteSetting.upsert({
          where: { key },
          update: { value },
          create: { key, value, label: key.replace(/_/g, " "), type: "text" },
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
