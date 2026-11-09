export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import PagesClient from "./PagesClient";

const PAGES_SEO = [
  { slug: "home", label: "Home Page", path: "/" },
  { slug: "about", label: "About Us", path: "/about" },
  { slug: "services", label: "Services", path: "/services" },
  { slug: "contact", label: "Contact", path: "/contact" },
];

export default async function AdminPagesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Pages &amp; SEO</h1>
        <p className="text-sm text-gray-500 mt-1">
          Edit page titles and meta descriptions for Google and social sharing.
        </p>
      </div>
      <PagesClient pages={PAGES_SEO} />
    </div>
  );
}
