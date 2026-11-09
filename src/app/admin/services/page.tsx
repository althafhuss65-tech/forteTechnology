export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ServicesClient from "./ServicesClient";

export default async function AdminServicesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const services = await prisma.service.findMany({
    orderBy: [{ category: "asc" }, { orderIndex: "asc" }],
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Services</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage the services displayed on your website.
        </p>
      </div>
      <ServicesClient initialServices={services} />
    </div>
  );
}
