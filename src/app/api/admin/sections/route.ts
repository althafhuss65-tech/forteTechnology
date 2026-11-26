import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const ALLOWED_SLUGS = new Set(["home", "services", "contact", "about"]);

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(req.url);
    const pageSlug = searchParams.get("page") ?? "home";
    if (!ALLOWED_SLUGS.has(pageSlug))
      return NextResponse.json({ error: "Invalid page" }, { status: 400 });

    const rows = await prisma.pageSection.findMany({ where: { pageSlug } });
    const result: Record<string, unknown> = {};
    for (const r of rows) result[r.sectionType] = r.content;
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to load sections" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { pageSlug = "home", sectionType, content } = await req.json();

    if (!ALLOWED_SLUGS.has(pageSlug))
      return NextResponse.json({ error: "Invalid page" }, { status: 400 });
    if (typeof sectionType !== "string" || !sectionType.match(/^[a-z0-9-]{1,60}$/))
      return NextResponse.json({ error: "Invalid sectionType" }, { status: 400 });

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
  } catch {
    return NextResponse.json({ error: "Failed to save section" }, { status: 500 });
  }
}
