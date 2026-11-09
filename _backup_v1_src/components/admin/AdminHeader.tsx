"use client";

import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";

interface Props {
  user: { name?: string | null; email?: string | null } | undefined;
}

export default function AdminHeader({ user }: Props) {
  return (
    <header className="bg-white border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-[#374151]">
          <div className="w-8 h-8 bg-[#1565C0] rounded-full flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="font-medium hidden sm:block">{user?.name || user?.email}</span>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
        >
          <LogOut size={14} />
          <span className="hidden sm:block">Sign out</span>
        </button>
      </div>
    </header>
  );
}
