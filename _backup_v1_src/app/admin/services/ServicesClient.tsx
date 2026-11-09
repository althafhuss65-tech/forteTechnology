"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, EyeOff, Save, X } from "lucide-react";
import type { Service } from "@prisma/client";

interface Props {
  initialServices: Service[];
}

const EMPTY_FORM = {
  title: "",
  shortDesc: "",
  longDesc: "",
  category: "protective",
  orderIndex: 0,
  isPublished: true,
};

export default function ServicesClient({ initialServices }: Props) {
  const [services, setServices] = useState(initialServices);
  const [editing, setEditing] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  const startEdit = (service: Service) => {
    setEditing(service.id);
    setAdding(false);
    setForm({
      title: service.title,
      shortDesc: service.shortDesc,
      longDesc: service.longDesc || "",
      category: service.category,
      orderIndex: service.orderIndex,
      isPublished: service.isPublished,
    });
  };

  const saveService = async () => {
    setSaving(true);
    const url = editing ? `/api/admin/services/${editing}` : "/api/admin/services";
    const method = editing ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (editing) {
      setServices((prev) => prev.map((s) => (s.id === editing ? data : s)));
    } else {
      setServices((prev) => [...prev, data]);
    }
    setEditing(null);
    setAdding(false);
    setForm(EMPTY_FORM);
    setSaving(false);
  };

  const togglePublish = async (service: Service) => {
    await fetch(`/api/admin/services/${service.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished: !service.isPublished }),
    });
    setServices((prev) =>
      prev.map((s) => (s.id === service.id ? { ...s, isPublished: !s.isPublished } : s))
    );
  };

  const deleteService = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#1565C0]";

  const FormPanel = (
    <div className="bg-white rounded-xl border border-[#1565C0] shadow-sm p-6 mb-5">
      <h3 className="font-semibold text-[#1A1A2E] mb-4">
        {editing ? "Edit Service" : "Add New Service"}
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Title *</label>
          <input
            className={inputClass}
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            placeholder="e.g. Anticorrosive Coatings"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Short Description *</label>
          <textarea
            className={`${inputClass} resize-none`}
            rows={3}
            value={form.shortDesc}
            onChange={(e) => setForm((p) => ({ ...p, shortDesc: e.target.value }))}
            placeholder="Brief description (shown on cards)"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Full Description</label>
          <textarea
            className={`${inputClass} resize-none`}
            rows={5}
            value={form.longDesc}
            onChange={(e) => setForm((p) => ({ ...p, longDesc: e.target.value }))}
            placeholder="Detailed description (shown on services page)"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Category</label>
            <select
              className={inputClass}
              value={form.category}
              onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
            >
              <option value="protective">Protective & Industrial</option>
              <option value="flooring">Industrial Floor Coatings</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Order</label>
            <input
              type="number"
              className={inputClass}
              value={form.orderIndex}
              onChange={(e) => setForm((p) => ({ ...p, orderIndex: Number(e.target.value) }))}
            />
          </div>
        </div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.isPublished}
            onChange={(e) => setForm((p) => ({ ...p, isPublished: e.target.checked }))}
            className="w-4 h-4 accent-[#1565C0]"
          />
          <span className="text-sm text-[#374151]">Published (visible on website)</span>
        </label>
      </div>
      <div className="flex gap-3 mt-5">
        <button
          onClick={saveService}
          disabled={saving || !form.title || !form.shortDesc}
          className="flex items-center gap-2 px-5 py-2 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1] transition-colors disabled:opacity-60"
        >
          <Save size={14} />
          {saving ? "Saving..." : "Save Service"}
        </button>
        <button
          onClick={() => { setEditing(null); setAdding(false); setForm(EMPTY_FORM); }}
          className="flex items-center gap-2 px-5 py-2 border border-[#E5E7EB] text-gray-600 font-semibold rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          <X size={14} />
          Cancel
        </button>
      </div>
    </div>
  );

  const grouped = {
    protective: services.filter((s) => s.category === "protective"),
    flooring: services.filter((s) => s.category === "flooring"),
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          onClick={() => { setAdding(true); setEditing(null); setForm(EMPTY_FORM); }}
          className="flex items-center gap-2 px-4 py-2 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1] transition-colors"
        >
          <Plus size={15} />
          Add Service
        </button>
      </div>

      {(adding && !editing) && FormPanel}

      {(["protective", "flooring"] as const).map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
            {cat === "protective" ? "Protective & Industrial Coatings" : "Industrial Floor Coatings"}
          </h2>
          {editing && grouped[cat].some((s) => s.id === editing) && FormPanel}
          <div className="space-y-3">
            {grouped[cat].map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-5 flex items-start justify-between gap-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#1A1A2E] text-sm">{service.title}</h3>
                    {!service.isPublished && (
                      <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#374151] line-clamp-2">{service.shortDesc}</p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => togglePublish(service)}
                    title={service.isPublished ? "Hide" : "Show"}
                    className="p-2 text-gray-400 hover:text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {service.isPublished ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button
                    onClick={() => startEdit(service)}
                    className="p-2 text-gray-400 hover:text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
            {grouped[cat].length === 0 && (
              <p className="text-sm text-gray-400 py-4 text-center bg-white rounded-xl border border-dashed border-[#E5E7EB]">
                No services in this category yet.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
