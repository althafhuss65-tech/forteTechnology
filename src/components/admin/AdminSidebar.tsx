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
  Home,
  Layers,
  Phone,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; icon: React.ElementType; group?: string };

const NAV: NavItem[] = [
  { label: "Dashboard",     href: "/admin/dashboard",          icon: LayoutDashboard },
  { label: "Home Page",     href: "/admin/content/home",       icon: Home,        group: "Page Content" },
  { label: "Services Page", href: "/admin/content/services",   icon: Layers },
  { label: "Contact Page",  href: "/admin/content/contact",    icon: Phone },
  { label: "About Page",    href: "/admin/content/about",      icon: Users },
  { label: "Enquiries",     href: "/admin/enquiries",          icon: MessageSquare, group: "Manage" },
  { label: "Services",      href: "/admin/services",           icon: Wrench },
  { label: "Projects",      href: "/admin/projects",           icon: FolderOpen },
  { label: "Pages & SEO",   href: "/admin/pages",              icon: FileText },
  { label: "Company Details", href: "/admin/settings",          icon: Settings },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 w-64 bg-[#1A1A2E] flex flex-col admin-scroll overflow-y-auto z-40",
        "transition-transform duration-300 ease-in-out",
        "lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10 flex items-start justify-between">
        <div>
          <Image
            src="/forte-logo-white.png"
            alt="Forte Technologies"
            width={120}
            height={48}
            className="h-9 w-auto object-contain"
          />
          <p className="text-gray-500 text-[11px] mt-1 font-medium">Admin Panel</p>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-white mt-1 flex-shrink-0"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <div key={item.href}>
              {item.group && (
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-600 px-3 pt-4 pb-1">
                  {item.group}
                </p>
              )}
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors",
                  active
                    ? "bg-[#354B35] text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-gray-600 text-[11px]">Forte Technologies © 2026</p>
      </div>
    </aside>
  );
}
