export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ContentClient from "../ContentClient";

const VALID = ["home", "services", "contact", "about"] as const;
type PageSlug = typeof VALID[number];

export default async function AdminContentPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const { page } = await params;
  if (!VALID.includes(page as PageSlug)) redirect("/admin/content/home");

  const rows = await prisma.pageSection.findMany({
    where: { pageSlug: { in: [...VALID] } },
  });
  const data: Record<string, Record<string, unknown>> = {
    home: {}, services: {}, contact: {}, about: {},
  };
  for (const r of rows) {
    data[r.pageSlug] ??= {};
    data[r.pageSlug][r.sectionType] = r.content;
  }

  const labels: Record<PageSlug, string> = {
    home: "Home Page",
    services: "Services Page",
    contact: "Contact Page",
    about: "About Page",
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">{labels[page as PageSlug]}</h1>
        <p className="text-sm text-gray-500 mt-1">Edit text for each section. Changes go live after save.</p>
      </div>
      <ContentClient initialData={data} initialPage={page as PageSlug} />
    </div>
  );
}
