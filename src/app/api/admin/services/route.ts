import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1).max(200),
  shortDesc: z.string().min(1),
  longDesc: z.string().optional(),
  category: z.enum(["protective", "flooring"]),
  orderIndex: z.number().default(0),
  isPublished: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = schema.parse(await req.json());
  const service = await prisma.service.create({ data });
  return NextResponse.json(service);
}
