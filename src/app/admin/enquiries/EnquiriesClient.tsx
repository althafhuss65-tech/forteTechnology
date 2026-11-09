"use client";

import { useState } from "react";
import { Search, Trash2, Eye, MailOpen, Mail } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Enquiry } from "@prisma/client";

interface Props {
  initialEnquiries: Enquiry[];
}

export default function EnquiriesClient({ initialEnquiries }: Props) {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const filtered = enquiries.filter((e) => {
    const matchSearch =
      search === "" ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase()) ||
      e.message.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" ||
      (filter === "unread" && !e.isRead) ||
      (filter === "read" && e.isRead);
    return matchSearch && matchFilter;
  });

  const markRead = async (id: string) => {
    await fetch(`/api/admin/enquiries/${id}/read`, { method: "PATCH" });
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isRead: true } : e))
    );
    if (selected?.id === id) setSelected((prev) => prev && { ...prev, isRead: true });
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Delete this enquiry? This cannot be undone.")) return;
    await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const openEnquiry = (enq: Enquiry) => {
    setSelected(enq);
    if (!enq.isRead) markRead(enq.id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* List */}
      <div className="lg:col-span-1 bg-white rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
        {/* Search + filter */}
        <div className="p-4 border-b border-[#E5E7EB] space-y-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search enquiries..."
              className="w-full pl-8 pr-3 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#1565C0]"
            />
          </div>
          <div className="flex gap-1">
            {(["all", "unread", "read"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors capitalize ${
                  filter === f
                    ? "bg-[#1565C0] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#E5E7EB]">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">No enquiries found.</div>
          ) : (
            filtered.map((enq) => (
              <button
                key={enq.id}
                onClick={() => openEnquiry(enq)}
                className={`w-full text-left px-4 py-3.5 hover:bg-blue-50/50 transition-colors ${
                  selected?.id === enq.id ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-start gap-2">
                  {!enq.isRead && (
                    <div className="w-2 h-2 rounded-full bg-[#1565C0] mt-1.5 flex-shrink-0" />
                  )}
                  <div className={`min-w-0 flex-1 ${enq.isRead ? "ml-4" : ""}`}>
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-sm truncate ${!enq.isRead ? "font-semibold text-[#1A1A2E]" : "text-[#374151]"}`}>
                        {enq.name}
                      </p>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">
                        {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{enq.subject || "General Enquiry"}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{enq.message}</p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Detail */}
      <div className="lg:col-span-2 bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
        {!selected ? (
          <div className="flex flex-col items-center justify-center h-full min-h-64 text-gray-400">
            <Eye size={32} className="mb-3 opacity-30" />
            <p className="text-sm">Select an enquiry to read</p>
          </div>
        ) : (
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-[#1A1A2E]">{selected.name}</h2>
                <div className="flex flex-wrap gap-3 mt-1">
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-sm text-[#1565C0] hover:underline"
                  >
                    {selected.email}
                  </a>
                  {selected.phone && (
                    <a
                      href={`tel:${selected.phone}`}
                      className="text-sm text-[#1565C0] hover:underline"
                    >
                      {selected.phone}
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">{formatDate(selected.createdAt)}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {selected.isRead ? (
                  <button
                    title="Mark unread"
                    className="p-2 text-gray-400 hover:text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Mail size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => markRead(selected.id)}
                    title="Mark read"
                    className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <MailOpen size={16} />
                  </button>
                )}
                <button
                  onClick={() => deleteEnquiry(selected.id)}
                  title="Delete"
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Subject */}
            {selected.subject && (
              <div className="mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-1">Subject</p>
                <p className="text-sm text-[#374151] font-medium">{selected.subject}</p>
              </div>
            )}

            {/* Message */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Message</p>
              <div className="bg-[#F8F9FA] rounded-xl p-4">
                <p className="text-sm text-[#374151] leading-relaxed whitespace-pre-wrap">
                  {selected.message}
                </p>
              </div>
            </div>

            {/* Reply button */}
            <a
              href={`mailto:${selected.email}?subject=Re: ${selected.subject || "Your Enquiry"}`}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1] transition-colors"
            >
              <Mail size={14} />
              Reply via Email
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
