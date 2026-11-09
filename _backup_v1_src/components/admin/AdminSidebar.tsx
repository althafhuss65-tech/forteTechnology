"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Wrench,
  FolderOpen,
  MessageSquare,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
  { label: "Services", href: "/admin/services", icon: Wrench },
  { label: "Projects", href: "/admin/projects", icon: FolderOpen },
  { label: "Pages & SEO", href: "/admin/pages", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#1A1A2E] flex flex-col admin-scroll overflow-y-auto z-40">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <Image
          src="/logo.png"
          alt="Forte Technologies"
          width={120}
          height={48}
          className="h-9 w-auto object-contain brightness-0 invert"
        />
        <p className="text-gray-500 text-[11px] mt-1 font-medium">Admin Panel</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors",
                active
                  ? "bg-[#1565C0] text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={16} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-gray-600 text-[11px]">Forte Technologies © 2024</p>
      </div>
    </aside>
  );
}
