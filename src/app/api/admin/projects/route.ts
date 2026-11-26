import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  imageUrl: z.string().url().optional().or(z.literal("")),
  altText: z.string().max(300).optional(),
  category: z.string().max(100).optional(),
  orderIndex: z.number().int().default(0),
  isPublished: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const data = schema.parse(await req.json());
    const project = await prisma.project.create({ data });
    return NextResponse.json(project);
  } catch {
    return NextResponse.json({ error: "Failed to create project" }, { status: 400 });
  }
}
