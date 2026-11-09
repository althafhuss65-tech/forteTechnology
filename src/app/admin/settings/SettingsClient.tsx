"use client";

import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";

interface Props {
  settings: Record<string, string>;
}

const SETTING_GROUPS = [
  {
    title: "Contact Information",
    desc: "Contact details displayed on the website and footer.",
    fields: [
      { key: "phone", label: "Phone Number", type: "text", placeholder: "+91 6364227475" },
      { key: "email", label: "Contact Email (public)", type: "email", placeholder: "info@fortetechnologies.in" },
      { key: "address", label: "Office Address", type: "textarea", placeholder: "No. 618, Mahidhara Fortune City, Attibele, Bangalore – 562107" },
    ],
  },
  {
    title: "Enquiry Settings",
    desc: "Where contact form submissions are delivered.",
    fields: [
      { key: "enquiry_email", label: "Enquiry Recipient Email", type: "email", placeholder: "info@fortetechnologies.in" },
    ],
  },
  {
    title: "Social Media",
    desc: "Social profile links shown in the footer.",
    fields: [
      { key: "linkedin", label: "LinkedIn URL", type: "url", placeholder: "https://linkedin.com/company/forte-technologies" },
      { key: "facebook", label: "Facebook URL", type: "url", placeholder: "https://facebook.com/fortetechnologies" },
      { key: "instagram", label: "Instagram URL", type: "url", placeholder: "https://instagram.com/fortetechnologies" },
    ],
  },
  {
    title: "Site Branding",
    desc: "Core branding text used across the website.",
    fields: [
      { key: "site_tagline", label: "Site Tagline", type: "text", placeholder: "Protective & Industrial Coating Specialists" },
      { key: "footer_copyright", label: "Footer Copyright Text", type: "text", placeholder: "© 2024 Forte Technologies. All rights reserved." },
    ],
  },
];

export default function SettingsClient({ settings: initial }: Props) {
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to save");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError("Failed to save settings. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {SETTING_GROUPS.map((group) => (
        <div key={group.title} className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="font-semibold text-[#1A1A2E]">{group.title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{group.desc}</p>
          </div>
          <div className="p-6 space-y-5">
            {group.fields.map((field) => (
              <div key={field.key}>
                <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    value={values[field.key] || ""}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                    rows={3}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#374151] placeholder-gray-400 focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={values[field.key] || ""}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                    }
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#374151] placeholder-gray-400 focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center gap-2 px-6 py-3 bg-[#1565C0] text-white font-semibold rounded-lg hover:bg-[#0D47A1] transition-colors disabled:opacity-60"
      >
        {saved ? (
          <>
            <CheckCircle size={16} />
            Saved!
          </>
        ) : (
          <>
            <Save size={16} />
            {saving ? "Saving..." : "Save Settings"}
          </>
        )}
      </button>
    </div>
  );
}
