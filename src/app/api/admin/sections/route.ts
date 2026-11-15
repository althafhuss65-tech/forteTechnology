import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const pageSlug = searchParams.get("page") ?? "home";
  const rows = await prisma.pageSection.findMany({ where: { pageSlug } });
  const result: Record<string, unknown> = {};
  for (const r of rows) result[r.sectionType] = r.content;
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { pageSlug = "home", sectionType, content } = await req.json();

  await prisma.page.upsert({
    where: { slug: pageSlug },
    update: {},
    create: { slug: pageSlug, metaTitle: pageSlug, metaDesc: "" },
  });

  const existing = await prisma.pageSection.findFirst({ where: { pageSlug, sectionType } });
  if (existing) {
    await prisma.pageSection.update({ where: { id: existing.id }, data: { content } });
  } else {
    await prisma.pageSection.create({ data: { pageSlug, sectionType, orderIndex: 0, content } });
  }

  return NextResponse.json({ success: true });
}
