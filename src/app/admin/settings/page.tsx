export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SettingsClient from "./SettingsClient";

export default async function SettingsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const settings = await prisma.siteSetting.findMany();
  const settingsMap = Object.fromEntries(settings.map((s) => [s.key, s.value]));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage site-wide settings, contact details and email configuration.
        </p>
      </div>
      <SettingsClient settings={settingsMap} />
    </div>
  );
}
