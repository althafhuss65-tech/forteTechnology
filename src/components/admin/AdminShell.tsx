"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

interface Props {
  user: { name?: string | null; email?: string | null } | undefined;
  children: React.ReactNode;
}

export default function AdminShell({ user, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile overlay — covers content when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[38] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <AdminHeader user={user} onMenuClick={() => setSidebarOpen((o) => !o)} />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </>
  );
}
