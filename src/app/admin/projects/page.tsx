export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectsClient from "./ProjectsClient";

export default async function AdminProjectsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const projects = await prisma.project.findMany({
    orderBy: { orderIndex: "asc" },
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Featured Projects</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage the projects showcased on the homepage.
        </p>
      </div>
      <ProjectsClient initialProjects={projects} />
    </div>
  );
}
