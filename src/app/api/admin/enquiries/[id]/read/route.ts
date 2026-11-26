import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await params;
    await prisma.enquiry.update({ where: { id }, data: { isRead: true } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to mark as read" }, { status: 500 });
  }
}
