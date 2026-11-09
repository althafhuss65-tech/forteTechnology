"use client";

import { useState, useEffect } from "react";
import { Save, CheckCircle, ExternalLink } from "lucide-react";

interface PageInfo {
  slug: string;
  label: string;
  path: string;
}

interface Props {
  pages: PageInfo[];
}

interface PageSeo {
  metaTitle: string;
  metaDesc: string;
}

export default function PagesClient({ pages }: Props) {
  const [seoData, setSeoData] = useState<Record<string, PageSeo>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/admin/pages")
      .then((r) => r.json())
      .then((data) => { setSeoData(data); setLoaded(true); });
  }, []);

  const update = (slug: string, field: keyof PageSeo, value: string) => {
    setSeoData((prev) => ({
      ...prev,
      [slug]: { ...prev[slug], [field]: value },
    }));
  };

  const save = async (slug: string) => {
    setSaving(slug);
    await fetch("/api/admin/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, ...seoData[slug] }),
    });
    setSaving(null);
    setSaved(slug);
    setTimeout(() => setSaved(null), 2500);
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#1565C0]";

  return (
    <div className="space-y-5 max-w-2xl">
      {pages.map((page) => {
        const data = seoData[page.slug] || { metaTitle: "", metaDesc: "" };
        return (
          <div key={page.slug} className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-[#1A1A2E]">{page.label}</h2>
                <p className="text-xs text-gray-400 mt-0.5">{page.path}</p>
              </div>
              <a
                href={page.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1565C0] transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Page Title (Google) · Max 60 chars
                </label>
                <input
                  className={inputClass}
                  value={data.metaTitle}
                  onChange={(e) => update(page.slug, "metaTitle", e.target.value)}
                  maxLength={60}
                  placeholder="Forte Technologies — Protective Coating Specialists"
                  disabled={!loaded}
                />
                <p className="text-[10px] text-gray-400 mt-1">{data.metaTitle.length}/60</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  Meta Description · Max 160 chars
                </label>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={3}
                  value={data.metaDesc}
                  onChange={(e) => update(page.slug, "metaDesc", e.target.value)}
                  maxLength={160}
                  placeholder="Brief description shown in Google search results..."
                  disabled={!loaded}
                />
                <p className="text-[10px] text-gray-400 mt-1">{data.metaDesc.length}/160</p>
              </div>
              <button
                onClick={() => save(page.slug)}
                disabled={saving === page.slug}
                className="flex items-center gap-2 px-5 py-2 bg-[#1565C0] text-white font-semibold rounded-lg text-sm hover:bg-[#0D47A1] transition-colors disabled:opacity-60"
              >
                {saved === page.slug ? (
                  <><CheckCircle size={14} /> Saved!</>
                ) : (
                  <><Save size={14} /> {saving === page.slug ? "Saving..." : "Save SEO"}</>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
