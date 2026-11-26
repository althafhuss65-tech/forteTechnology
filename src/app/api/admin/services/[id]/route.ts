import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1).max(200).optional(),
  shortDesc: z.string().min(1).optional(),
  longDesc: z.string().optional(),
  icon: z.string().max(100).optional(),
  tags: z.string().max(500).optional(),
  imageUrl: z.string().url().optional().or(z.literal("")),
  altText: z.string().max(300).optional(),
  category: z.enum(["protective", "industrial", "flooring", "refurbishment"]).optional(),
  orderIndex: z.number().int().optional(),
  isPublished: z.boolean().optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await params;
    const data = schema.parse(await req.json());
    const service = await prisma.service.update({ where: { id }, data });
    return NextResponse.json(service);
  } catch {
    return NextResponse.json({ error: "Failed to update service" }, { status: 400 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await params;
    await prisma.service.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete service" }, { status: 400 });
  }
}
