export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EnquiriesClient from "./EnquiriesClient";

export default async function EnquiriesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Enquiries</h1>
        <p className="text-sm text-gray-500 mt-1">
          {enquiries.filter((e) => !e.isRead).length} unread out of{" "}
          {enquiries.length} total enquiries
        </p>
      </div>
      <EnquiriesClient initialEnquiries={enquiries} />
    </div>
  );
}
