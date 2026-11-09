import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const pages = await prisma.page.findMany();
  const result: Record<string, { metaTitle: string; metaDesc: string }> = {};
  for (const p of pages) {
    result[p.slug] = { metaTitle: p.metaTitle, metaDesc: p.metaDesc };
  }
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug, metaTitle, metaDesc } = await req.json();
  await prisma.page.upsert({
    where: { slug },
    update: { metaTitle, metaDesc },
    create: { slug, metaTitle, metaDesc },
  });
  return NextResponse.json({ success: true });
}
