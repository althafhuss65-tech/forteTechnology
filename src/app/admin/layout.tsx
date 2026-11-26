import "./admin.css";
import { auth } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex">
      {session ? (
        <AdminShell user={session.user}>{children}</AdminShell>
      ) : (
        <div className="flex-1 flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      )}
    </div>
  );
}
