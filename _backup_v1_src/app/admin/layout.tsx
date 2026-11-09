import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Allow login page without auth
  return (
    <div className="min-h-screen bg-[#F1F5F9] flex">
      {session && <AdminSidebar />}
      <div className={`flex-1 flex flex-col ${session ? "ml-64" : ""}`}>
        {session && <AdminHeader user={session.user} />}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
