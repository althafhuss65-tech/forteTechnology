export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { MessageSquare, Wrench, FolderOpen, Mail } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const [totalEnquiries, unreadEnquiries, totalServices, totalProjects, recentEnquiries] =
    await Promise.all([
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { isRead: false } }),
      prisma.service.count(),
      prisma.project.count(),
      prisma.enquiry.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  const stats = [
    {
      label: "Total Enquiries",
      value: totalEnquiries,
      sub: `${unreadEnquiries} unread`,
      icon: MessageSquare,
      color: "bg-blue-50 text-[#1565C0]",
    },
    {
      label: "Services Listed",
      value: totalServices,
      sub: "Active on website",
      icon: Wrench,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Projects",
      value: totalProjects,
      sub: "Featured projects",
      icon: FolderOpen,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Unread Messages",
      value: unreadEnquiries,
      sub: "Awaiting response",
      icon: Mail,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back, {session.user?.name}. Here&apos;s your website overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 border border-[#E5E7EB] shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-[#374151]">{stat.label}</span>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <Icon size={16} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#1A1A2E]">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Recent enquiries */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
          <h2 className="font-semibold text-[#1A1A2E]">Recent Enquiries</h2>
          <a href="/admin/enquiries" className="text-sm text-[#1565C0] font-medium hover:underline">
            View all →
          </a>
        </div>
        {recentEnquiries.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-sm">
            No enquiries yet. They will appear here when someone contacts you.
          </div>
        ) : (
          <div className="divide-y divide-[#E5E7EB]">
            {recentEnquiries.map((enq) => (
              <div key={enq.id} className="px-6 py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  {!enq.isRead && (
                    <div className="w-2 h-2 rounded-full bg-[#1565C0] mt-2 flex-shrink-0" />
                  )}
                  <div className={enq.isRead ? "ml-5 min-w-0" : "min-w-0"}>
                    <p className="font-medium text-sm text-[#1A1A2E] truncate">{enq.name}</p>
                    <p className="text-xs text-gray-500 truncate">{enq.email}</p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">{enq.subject || "General Enquiry"}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{formatDate(enq.createdAt)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
