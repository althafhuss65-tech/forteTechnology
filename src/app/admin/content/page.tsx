import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ContentClient from "./ContentClient";

const PAGES = ["home", "services", "contact", "about"];

export default async function AdminContentPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const rows = await prisma.pageSection.findMany({ where: { pageSlug: { in: PAGES } } });
  const data: Record<string, Record<string, unknown>> = { home: {}, services: {}, contact: {}, about: {} };
  for (const r of rows) {
    if (!data[r.pageSlug]) data[r.pageSlug] = {};
    data[r.pageSlug][r.sectionType] = r.content;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Page Content</h1>
        <p className="text-sm text-gray-500 mt-1">Edit text for each page section. Changes go live after save.</p>
      </div>
      <ContentClient initialData={data} />
    </div>
  );
}
