"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, EyeOff, Save, X } from "lucide-react";
import type { Project } from "@prisma/client";

interface Props {
  initialProjects: Project[];
}

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "",
  orderIndex: 0,
  isPublished: true,
};

export default function ProjectsClient({ initialProjects }: Props) {
  const [projects, setProjects] = useState(initialProjects);
  const [editing, setEditing] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const startEdit = (p: Project) => {
    setEditing(p.id);
    setAdding(false);
    setForm({
      title: p.title,
      description: p.description,
      category: p.category || "",
      orderIndex: p.orderIndex,
      isPublished: p.isPublished,
    });
  };

  const save = async () => {
    setSaving(true);
    const url = editing ? `/api/admin/projects/${editing}` : "/api/admin/projects";
    const method = editing ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (editing) {
      setProjects((prev) => prev.map((p) => (p.id === editing ? data : p)));
    } else {
      setProjects((prev) => [...prev, data]);
    }
    setEditing(null);
    setAdding(false);
    setForm(EMPTY_FORM);
    setSaving(false);
  };

  const togglePublish = async (p: Project) => {
    await fetch(`/api/admin/projects/${p.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished: !p.isPublished }),
    });
    setProjects((prev) =>
      prev.map((item) => (item.id === p.id ? { ...item, isPublished: !item.isPublished } : item))
    );
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#1565C0]";

  const FormPanel = (
    <div className="bg-white rounded-xl border border-[#1565C0] shadow-sm p-6 mb-5">
      <h3 className="font-semibold text-[#1A1A2E] mb-4">
        {editing ? "Edit Project" : "Add New Project"}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Project Title *</label>
          <input className={inputClass} value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} placeholder="e.g. Falcon Mall, Thrissur" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Description *</label>
          <textarea className={`${inputClass} resize-none`} rows={4} value={form.description} onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))} placeholder="Describe the project scope, materials and outcome..." />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Category</label>
            <input className={inputClass} value={form.category} onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))} placeholder="e.g. Protective Coating" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Order</label>
            <input type="number" className={inputClass} value={form.orderIndex} onChange={(e) => setForm((p) => ({ ...p, orderIndex: Number(e.target.value) }))} />
          </div>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))} className="w-4 h-4 accent-[#1565C0]" />
          <span className="text-sm text-[#374151]">Published (visible on homepage)</span>
        </label>
      </div>
      <div className="flex gap-3 mt-5">
        <button onClick={save} disabled={saving || !form.title || !form.description} className="flex items-center gap-2 px-5 py-2 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1] disabled:opacity-60">
          <Save size={14} />
          {saving ? "Saving..." : "Save Project"}
        </button>
        <button onClick={() => { setEditing(null); setAdding(false); }} className="flex items-center gap-2 px-5 py-2 border border-[#E5E7EB] text-gray-600 font-semibold rounded-lg text-sm hover:bg-gray-50">
          <X size={14} />
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button onClick={() => { setAdding(true); setEditing(null); setForm(EMPTY_FORM); }} className="flex items-center gap-2 px-4 py-2 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1]">
          <Plus size={15} />
          Add Project
        </button>
      </div>

      {adding && !editing && FormPanel}

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id}>
            {editing === project.id && FormPanel}
            {editing !== project.id && (
              <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#1A1A2E] text-sm">{project.title}</h3>
                    {project.category && (
                      <span className="text-[10px] bg-blue-50 text-[#1565C0] font-semibold px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                    )}
                    {!project.isPublished && (
                      <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#374151] line-clamp-2">{project.description}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button onClick={() => togglePublish(project)} className="p-2 text-gray-400 hover:text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors">
                    {project.isPublished ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button onClick={() => startEdit(project)} className="p-2 text-gray-400 hover:text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => deleteProject(project.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-gray-400 py-8 text-center bg-white rounded-xl border border-dashed border-[#E5E7EB]">
            No projects yet. Add your first featured project.
          </p>
        )}
      </div>
    </div>
  );
}
