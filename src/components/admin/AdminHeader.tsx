"use client";

import { signOut } from "next-auth/react";
import { LogOut, User, KeyRound, ChevronDown, X, CheckCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Props {
  user: { name?: string | null; email?: string | null } | undefined;
}

function PasswordModal({ onClose }: { onClose: () => void }) {
  const [pw, setPw] = useState({ current: "", newPassword: "", confirm: "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (pw.newPassword.length < 8) { setError("New password must be at least 8 characters."); return; }
    if (pw.newPassword !== pw.confirm) { setError("Passwords do not match."); return; }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current: pw.current, newPassword: pw.newPassword }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to update password."); return; }
      setSaved(true);
      setTimeout(() => { setSaved(false); onClose(); }, 1500);
    } catch {
      setError("Failed to update password. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-[#1A1A2E]">Change Password</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Current Password", key: "current" },
            { label: "New Password", key: "newPassword" },
            { label: "Confirm New Password", key: "confirm" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-[#374151] mb-1.5 uppercase tracking-wide">{label}</label>
              <input
                type="password"
                value={pw[key as keyof typeof pw]}
                onChange={e => setPw(p => ({ ...p, [key]: e.target.value }))}
                required
                className="w-full px-4 py-2.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#354B35] focus:ring-1 focus:ring-[#354B35]"
              />
            </div>
          ))}
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
          <button
            type="submit"
            disabled={saving || saved}
            className="w-full py-2.5 bg-[#354B35] text-white font-semibold rounded-lg hover:bg-[#243324] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {saved ? <><CheckCircle size={15} /> Updated!</> : saving ? "Updating…" : <><KeyRound size={15} /> Update Password</>}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminHeader({ user }: Props) {
  const [open, setOpen] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="bg-white border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div />
        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen(o => !o)}
            className="flex items-center gap-2 text-sm text-[#374151] hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-[#354B35] rounded-full flex items-center justify-center">
              <User size={14} className="text-white" />
            </div>
            <span className="font-medium hidden sm:block">{user?.name || user?.email}</span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <div className="absolute right-0 mt-1 w-56 bg-white border border-[#E5E7EB] rounded-xl shadow-lg overflow-hidden z-50">
              <button
                onClick={() => { setShowPw(true); setOpen(false); }}
                className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-[#374151] hover:bg-gray-50 transition-colors"
              >
                <KeyRound size={14} className="text-gray-400" /> Change Password
              </button>
              <div className="border-t border-[#E5E7EB]" />
              <button
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </header>

      {showPw && <PasswordModal onClose={() => setShowPw(false)} />}
    </>
  );
}
