"use client";

import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";

// ——— Shared helpers ———
const INP = "w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:border-[#354B35]";
const TA = `${INP} resize-none`;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

function SaveBtn({ saving, saved }: { saving: boolean; saved: boolean }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="flex items-center gap-2 px-5 py-2 bg-[#354B35] text-white font-semibold rounded-lg text-sm hover:bg-[#243324] transition-colors disabled:opacity-60"
    >
      {saved ? <><CheckCircle size={14} /> Saved!</> : <><Save size={14} /> {saving ? "Saving…" : "Save"}</>}
    </button>
  );
}

function merge<T extends object>(defaults: T, raw: unknown): T {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return defaults;
  return { ...defaults, ...(raw as Partial<T>) };
}

function useSave(sectionType: string, pageSlug = "home") {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved]   = useState(false);
  const save = async (content: unknown) => {
    setSaving(true);
    await fetch("/api/admin/sections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageSlug, sectionType, content }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  return { saving, saved, save };
}

// ============ HOME PAGE ============

const D = {
  hero: {
    badge: "Industrial coating specialists",
    h1: "Protective Coatings Built for Industrial Performance.",
    subtitle: "Anticorrosive, thermal, fireproofing and floor coating solutions for industrial, commercial and infrastructure projects.",
    cta1: "Our Services",
    cta2: "Get a Quote",
  },
  "features-strip": {
    features: [
      { title: "Certified applicators", subtitle: "Industry-trained specialists" },
      { title: "Industrial grade",       subtitle: "Premium coating systems" },
      { title: "Safety compliant",       subtitle: "Full HSE adherence" },
      { title: "Since 2020",             subtitle: "Proven field experience" },
    ],
  },
  about: {
    eyebrow: "About Forte Technologies",
    heading: "Industrial coating specialists for demanding environments.",
    body: "Forte Technologies is an industrial coating company delivering high-performance protective coating solutions. Our certified applicators bring deep expertise in anticorrosive, thermal, fireproofing and floor coating systems - ensuring your assets are protected and your operations continue uninterrupted.",
    phone: "+91 78992 98718",
    yearFounded: "2020",
    stats: [
      { value: 6, suffix: "+", label: "Years active" },
      { value: 100, suffix: "%", label: "Safety compliance" },
      { value: 4, suffix: "",  label: "Core service areas" },
    ],
  },
  "services-overview": {
    eyebrow: "Our services",
    heading: "Explore our industrial coating solutions",
    ctaText: "Need a comprehensive coating solution?",
  },
  "why-choose-us": {
    eyebrow: "Why choose us",
    heading: "100% industry-grade materials and certified systems.",
    body: "Every project is approached with technical excellence. We assess substrate conditions, select the right system, and apply it precisely - ensuring performance that meets client expectations and industry standards.",
    points: [
      "Proven track record on industrial facilities",
      "Certified applicators with surface prep expertise",
      "Full system supply: primer to topcoat",
    ],
    brandsEyebrow: "Working with Leading Industrial Coating Manufacturers",
    brandsHeading: "Multiple Brands. Right System. Better Performance.",
    brandsCols: [
      "FORTE Technologies works with leading manufacturers of industrial and protective coating systems to identify suitable solutions for different project requirements.",
      "Our manufacturer-independent approach allows us to evaluate products and coating systems based on technical specifications, operating conditions, performance requirements and project economics.",
      "We focus on selecting the right coating system for the application rather than limiting our solutions to a single brand. Working with leading industrial coating manufacturers to identify suitable solutions for every project.",
    ],
  },
  "coating-approach": {
    eyebrow: "Our Coating System Approach",
    heading: "We Don't Just Select Coatings. We Follow Coating Systems.",
    tagline: "The Right System. The Right Compatibility. The Right Performance.",
    body: "At FORTE Technologies, we believe that long-term coating performance depends not just on selecting the right product, but on using the right coating system. We work with leading industrial coating manufacturers and follow their recommended coating systems, taking into consideration the specific requirements of each project.",
    blockquote: "Our commitment is to execute coating projects using technically suitable, compatible and properly specified coating systems, rather than selecting products based on price or brand preference alone.",
    criteria: [
      { title: "Project Requirements",        text: "Understanding intended service life, operating conditions, performance expectations, project specifications, and operating environment. Identify the substrate and its existing coating condition." },
      { title: "Manufacturer Recommendations", text: "Following recommended primer, intermediate and topcoat systems, including specified application procedures. Consult the selected manufacturer's technical recommendations." },
      { title: "System Compatibility",         text: "Ensuring compatibility between coating layers, substrate conditions and previously applied coatings, wherever applicable. Verify primer, intermediate, and topcoat compatibility." },
      { title: "Technical Specifications",     text: "Aligning the selected system with project specifications, applicable standards, and customer requirements. Obtain technical confirmation or written approval for any proposed deviation." },
      { title: "Application Requirements",     text: "Considering surface preparation, environmental conditions, film thickness, and application methods. Execute and monitor application against the agreed system requirements." },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "From assessment to handover - a proven process.",
    steps: [
      { title: "Site Assessment",    desc: "We evaluate substrate conditions, existing coatings and service environment before specifying a system." },
      { title: "System Selection",   desc: "The right primer, intermediate and topcoat combination is selected to match the exposure and performance requirements." },
      { title: "Surface Preparation", desc: "Blasting or mechanical preparation to the specified standard - the most critical step for coating adhesion and longevity." },
      { title: "Application & QC",  desc: "Certified applicators execute the system with DFT checks and documentation at every stage." },
    ],
    brandsLabel: "Approved applicators for leading coating manufacturers",
    brands: "AkzoNobel, International, GEM Paints, Jotun, Berger, Asian Paints PPG, Nippon Paints",
  },
  "contact-cta": {
    eyebrow: "Get in touch",
    heading: "Ready to protect, restore and extend the life of your assets?",
    body: "Tell us about your project and our team will assess your requirements and recommend the right coating system - regardless of the size or complexity of the job.",
    phone: "+91 78992 98718",
  },
};

function HeroForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D.hero }, data));
  const { saving, saved, save } = useSave("hero");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Badge Text"><input className={INP} value={f.badge} onChange={up("badge")} /></Field>
      <Field label="Headline"><textarea className={TA} rows={2} value={f.h1} onChange={up("h1")} /></Field>
      <Field label="Subtitle"><textarea className={TA} rows={3} value={f.subtitle} onChange={up("subtitle")} /></Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Button 1 Text"><input className={INP} value={f.cta1} onChange={up("cta1")} /></Field>
        <Field label="Button 2 Text"><input className={INP} value={f.cta2} onChange={up("cta2")} /></Field>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function FeaturesForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ features: [...D["features-strip"].features] }, data));
  const { saving, saved, save } = useSave("features-strip");
  const upFeature = (i: number, k: "title" | "subtitle", v: string) =>
    setF(p => ({ ...p, features: p.features.map((x, j) => j === i ? { ...x, [k]: v } : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-3">
      {f.features.map((feat, i) => (
        <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Feature {i + 1}</p>
          <Field label="Title">
            <input className={INP} value={feat.title} onChange={e => upFeature(i, "title", e.target.value)} />
          </Field>
          <Field label="Subtitle">
            <input className={INP} value={feat.subtitle} onChange={e => upFeature(i, "subtitle", e.target.value)} />
          </Field>
        </div>
      ))}
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function AboutForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D.about, stats: [...D.about.stats] }, data));
  const { saving, saved, save } = useSave("about");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upStat = (i: number, k: "value" | "suffix" | "label", v: string | number) =>
    setF(p => ({ ...p, stats: p.stats.map((s, j) => j === i ? { ...s, [k]: v } : s) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Body Text"><textarea className={TA} rows={4} value={f.body} onChange={up("body")} /></Field>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Phone"><input className={INP} value={f.phone} onChange={up("phone")} /></Field>
        <Field label="Year Founded"><input className={INP} value={f.yearFounded} onChange={up("yearFounded")} /></Field>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Stats</label>
        <div className="grid grid-cols-3 gap-3">
          {f.stats.map((stat, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3 space-y-2">
              <p className="text-xs font-bold text-gray-400">Stat {i + 1}</p>
              <Field label="Number">
                <input className={INP} type="number" value={stat.value}
                  onChange={e => upStat(i, "value", Number(e.target.value))} />
              </Field>
              <Field label="Suffix">
                <input className={INP} value={stat.suffix} placeholder="+" onChange={e => upStat(i, "suffix", e.target.value)} />
              </Field>
              <Field label="Label">
                <input className={INP} value={stat.label} onChange={e => upStat(i, "label", e.target.value)} />
              </Field>
            </div>
          ))}
        </div>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function ServicesOverviewForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D["services-overview"] }, data));
  const { saving, saved, save } = useSave("services-overview");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
        The service cards on the homepage are managed via the <strong>Services</strong> admin page.
      </p>
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="CTA Text"><input className={INP} value={f.ctaText} onChange={up("ctaText")} /></Field>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function WhyChooseUsForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({
    ...D["why-choose-us"],
    points: [...D["why-choose-us"].points],
    brandsCols: [...D["why-choose-us"].brandsCols],
  }, data));
  const { saving, saved, save } = useSave("why-choose-us");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upPoint = (i: number, v: string) =>
    setF(p => ({ ...p, points: p.points.map((x, j) => j === i ? v : x) }));
  const upCol = (i: number, v: string) =>
    setF(p => ({ ...p, brandsCols: p.brandsCols.map((x, j) => j === i ? v : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Body"><textarea className={TA} rows={3} value={f.body} onChange={up("body")} /></Field>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Bullet Points</label>
        <div className="space-y-2">
          {f.points.map((pt, i) => (
            <input key={i} className={INP} value={pt} onChange={e => upPoint(i, e.target.value)} />
          ))}
        </div>
      </div>
      <div className="border-t border-[#E5E7EB] pt-4 space-y-4">
        <Field label="Brands Eyebrow"><input className={INP} value={f.brandsEyebrow} onChange={up("brandsEyebrow")} /></Field>
        <Field label="Brands Heading"><textarea className={TA} rows={2} value={f.brandsHeading} onChange={up("brandsHeading")} /></Field>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Brand Columns (3)</label>
          <div className="space-y-2">
            {f.brandsCols.map((col, i) => (
              <textarea key={i} className={TA} rows={3} value={col} onChange={e => upCol(i, e.target.value)} />
            ))}
          </div>
        </div>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function CoatingApproachForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({
    ...D["coating-approach"],
    criteria: [...D["coating-approach"].criteria],
  }, data));
  const { saving, saved, save } = useSave("coating-approach");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upCrit = (i: number, k: "title" | "text", v: string) =>
    setF(p => ({ ...p, criteria: p.criteria.map((x, j) => j === i ? { ...x, [k]: v } : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Tagline"><input className={INP} value={f.tagline} onChange={up("tagline")} /></Field>
      <Field label="Body"><textarea className={TA} rows={4} value={f.body} onChange={up("body")} /></Field>
      <Field label="Blockquote"><textarea className={TA} rows={3} value={f.blockquote} onChange={up("blockquote")} /></Field>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Criteria Steps (5)</label>
        <div className="space-y-3">
          {f.criteria.map((c, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-xs font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</p>
              <Field label="Title">
                <input className={INP} value={c.title} onChange={e => upCrit(i, "title", e.target.value)} />
              </Field>
              <Field label="Description">
                <textarea className={TA} rows={2} value={c.text} onChange={e => upCrit(i, "text", e.target.value)} />
              </Field>
            </div>
          ))}
        </div>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function ProcessForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({
    ...D.process,
    steps: [...D.process.steps],
  }, data));
  const { saving, saved, save } = useSave("process");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upStep = (i: number, k: "title" | "desc", v: string) =>
    setF(p => ({ ...p, steps: p.steps.map((x, j) => j === i ? { ...x, [k]: v } : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Process Steps (4)</label>
        <div className="space-y-3">
          {f.steps.map((step, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-xs font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</p>
              <Field label="Title">
                <input className={INP} value={step.title} onChange={e => upStep(i, "title", e.target.value)} />
              </Field>
              <Field label="Description">
                <textarea className={TA} rows={2} value={step.desc} onChange={e => upStep(i, "desc", e.target.value)} />
              </Field>
            </div>
          ))}
        </div>
      </div>
      <Field label="Brands Label">
        <input className={INP} value={f.brandsLabel} onChange={up("brandsLabel")} />
      </Field>
      <Field label="Brands (comma-separated)">
        <input className={INP} value={f.brands} onChange={up("brands")}
          placeholder="AkzoNobel, International, GEM Paints, …" />
      </Field>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function ContactCTAForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D["contact-cta"] }, data));
  const { saving, saved, save } = useSave("contact-cta");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Body"><textarea className={TA} rows={3} value={f.body} onChange={up("body")} /></Field>
      <Field label="Phone"><input className={INP} value={f.phone} onChange={up("phone")} /></Field>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

// ============ SERVICES PAGE ============

const D_SVC = {
  "services-protective": {
    eyebrow: "Protective & Anticorrosive",
    heading: "Protective & Anticorrosive Coatings",
    description: "Surface preparation, anticorrosive protection, thermal insulation and protective barrier coatings for structures, equipment and industrial assets.",
  },
  "services-industrial": {
    eyebrow: "Industrial",
    heading: "Industrial Coatings",
    description: "Specialist coating solutions for industrial equipment, machinery, metal components and structures in demanding operating environments.",
  },
  "services-floor": {
    eyebrow: "Floor Coatings",
    heading: "Industrial Floor Coatings",
    description: "Specialised flooring systems selected to meet the functional, operational and performance needs of industrial and commercial facilities.",
  },
  "services-refurbishment": {
    eyebrow: "Refurbishment & Execution",
    heading: "Industrial Refurbishment & Project Execution",
    description: "End-to-end management of industrial refurbishment and coating projects - from assessment and surface treatment through to quality handover.",
  },
};

type SvcKey = keyof typeof D_SVC;

function ServiceGroupForm({ sectionType, defaults, data }: { sectionType: SvcKey; defaults: typeof D_SVC[SvcKey]; data: unknown }) {
  const [f, setF] = useState(() => merge({ ...defaults }, data));
  const { saving, saved, save } = useSave(sectionType, "services");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Description"><textarea className={TA} rows={3} value={f.description} onChange={up("description")} /></Field>
      <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
        Individual service items (title, tags, description) are static content on the services page.
      </p>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

// ============ CONTACT PAGE ============

const D_CONTACT = {
  "contact-hero": {
    line1: "Tell us about your project.",
    line2: "We'll respond within a day.",
    subtitle: "Describe your surface, environment and timeline. Our team will assess your requirements and reply with the right coating recommendation.",
  },
  "contact-steps": {
    heading: "What happens next",
    steps: [
      { n: "01", title: "A reply within a day", text: "From our technical team, with follow-up questions about your project." },
      { n: "02", title: "A site assessment", text: "We review the substrate, environment and your specification requirements." },
      { n: "03", title: "A detailed proposal", text: "With the right coating system, estimated timeline and fixed project cost." },
    ],
  },
};

function ContactHeroForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_CONTACT["contact-hero"] }, data));
  const { saving, saved, save } = useSave("contact-hero", "contact");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Heading Line 1 (light)"><input className={INP} value={f.line1} onChange={up("line1")} /></Field>
      <Field label="Heading Line 2 (bold)"><input className={INP} value={f.line2} onChange={up("line2")} /></Field>
      <Field label="Subtitle"><textarea className={TA} rows={3} value={f.subtitle} onChange={up("subtitle")} /></Field>
      <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
        Phone and email are managed in <strong>Settings</strong>.
      </p>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function ContactStepsForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_CONTACT["contact-steps"], steps: [...D_CONTACT["contact-steps"].steps] }, data));
  const { saving, saved, save } = useSave("contact-steps", "contact");
  const up = (k: "heading") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upStep = (i: number, k: "title" | "text", v: string) =>
    setF(p => ({ ...p, steps: p.steps.map((x, j) => j === i ? { ...x, [k]: v } : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Section Heading"><input className={INP} value={f.heading} onChange={up("heading")} /></Field>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Steps</label>
        <div className="space-y-3">
          {f.steps.map((step, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-xs font-bold text-gray-400">{step.n}</p>
              <Field label="Title">
                <input className={INP} value={step.title} onChange={e => upStep(i, "title", e.target.value)} />
              </Field>
              <Field label="Text">
                <textarea className={TA} rows={2} value={step.text} onChange={e => upStep(i, "text", e.target.value)} />
              </Field>
            </div>
          ))}
        </div>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

// ============ ABOUT PAGE ============

const D_ABOUT = {
  "about-main": {
    eyebrow: "About FORTE Technologies",
    heading: "A family-owned industrial coating company established in 2020.",
    paragraphs: [
      "FORTE Technologies is a family-owned industrial coating company established in 2020, specialising in protective coatings, industrial coatings, industrial floor coatings and industrial refurbishment.",
      "We work with industrial and commercial clients to protect assets, restore deteriorated surfaces and improve long-term performance through technically suitable coating systems.",
      "Our approach combines coating material knowledge, manufacturer recommendations, specialist application resources and coordinated project execution.",
      "By working with leading industrial coating manufacturers and experienced application partners, we bring together the appropriate technical solutions and resources to meet individual project requirements.",
      "Our focus is simple: the right coating system, proper preparation and disciplined execution.",
    ],
    yearsValue: "6+",
    yearsLabel: "Years of industry experience",
  },
  "about-vision-mission": {
    eyebrow: "Our purpose",
    heading: "Vision and mission guiding every project we take on.",
    visionTitle: "Our Vision",
    visionText: "To be a trusted name in protective and industrial coating solutions, recognised for quality, reliability and lasting performance.",
    missionTitle: "Our Mission",
    missionText: "To deliver practical, performance-driven coating solutions through technical expertise, quality workmanship, safe execution and strong customer relationships.",
  },
  "about-quality": {
    eyebrow: "Quality commitment",
    heading: "Quality in every layer. Confidence in every project.",
    body: "At Forte Technologies, quality is fundamental to every project we undertake. We are committed to delivering coating and flooring solutions that meet agreed specifications, customer requirements and applicable industry standards.",
  },
  "about-safety": {
    eyebrow: "Safety",
    heading: "Dedicated to a safe working environment.",
    body1: "Forte Technologies is dedicated to protecting and preserving the working environment in a responsible manner. Any successful project is directly attributed to exceptional performance and well-planned services - and safety is non-negotiable at every stage.",
    body2: "We acknowledge that our staff and professionals are our biggest asset. We will never compromise the safety of our team, equipment or clients.",
  },
};

function AboutMainForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_ABOUT["about-main"], paragraphs: [...D_ABOUT["about-main"].paragraphs] }, data));
  const { saving, saved, save } = useSave("about-main", "about");
  const up = (k: "eyebrow" | "heading" | "yearsValue" | "yearsLabel") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  const upPara = (i: number, v: string) =>
    setF(p => ({ ...p, paragraphs: p.paragraphs.map((x, j) => j === i ? v : x) }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Body Paragraphs</label>
        <div className="space-y-2">
          {f.paragraphs.map((para, i) => (
            <textarea key={i} className={TA} rows={3} value={para} onChange={e => upPara(i, e.target.value)} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Years Value (e.g. 6+)"><input className={INP} value={f.yearsValue} onChange={up("yearsValue")} /></Field>
        <Field label="Years Label"><input className={INP} value={f.yearsLabel} onChange={up("yearsLabel")} /></Field>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function AboutVisionMissionForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_ABOUT["about-vision-mission"] }, data));
  const { saving, saved, save } = useSave("about-vision-mission", "about");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Vision</p>
          <Field label="Title"><input className={INP} value={f.visionTitle} onChange={up("visionTitle")} /></Field>
          <Field label="Text"><textarea className={TA} rows={4} value={f.visionText} onChange={up("visionText")} /></Field>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Mission</p>
          <Field label="Title"><input className={INP} value={f.missionTitle} onChange={up("missionTitle")} /></Field>
          <Field label="Text"><textarea className={TA} rows={4} value={f.missionText} onChange={up("missionText")} /></Field>
        </div>
      </div>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function AboutQualityForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_ABOUT["about-quality"] }, data));
  const { saving, saved, save } = useSave("about-quality", "about");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Body"><textarea className={TA} rows={4} value={f.body} onChange={up("body")} /></Field>
      <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
        The 8 quality checklist items are static content.
      </p>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

function AboutSafetyForm({ data }: { data: unknown }) {
  const [f, setF] = useState(() => merge({ ...D_ABOUT["about-safety"] }, data));
  const { saving, saved, save } = useSave("about-safety", "about");
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(p => ({ ...p, [k]: e.target.value }));
  return (
    <form onSubmit={e => { e.preventDefault(); save(f); }} className="space-y-4">
      <Field label="Eyebrow"><input className={INP} value={f.eyebrow} onChange={up("eyebrow")} /></Field>
      <Field label="Heading"><textarea className={TA} rows={2} value={f.heading} onChange={up("heading")} /></Field>
      <Field label="Body Paragraph 1"><textarea className={TA} rows={4} value={f.body1} onChange={up("body1")} /></Field>
      <Field label="Body Paragraph 2"><textarea className={TA} rows={4} value={f.body2} onChange={up("body2")} /></Field>
      <p className="text-sm text-gray-500 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
        The safety programme bullet points are static content.
      </p>
      <SaveBtn saving={saving} saved={saved} />
    </form>
  );
}

// ============ PAGE CONFIG ============

type PageSlug = "home" | "services" | "contact" | "about";
type SectionEntry = { key: string; label: string; Form: (props: { data: unknown }) => React.JSX.Element };

const HOME_SECTIONS: SectionEntry[] = [
  { key: "hero",              label: "Hero",              Form: p => <HeroForm {...p} /> },
  { key: "features-strip",   label: "Features Strip",    Form: p => <FeaturesForm {...p} /> },
  { key: "about",             label: "About",             Form: p => <AboutForm {...p} /> },
  { key: "services-overview", label: "Services Overview", Form: p => <ServicesOverviewForm {...p} /> },
  { key: "why-choose-us",    label: "Why Choose Us",     Form: p => <WhyChooseUsForm {...p} /> },
  { key: "coating-approach",  label: "Coating Approach",  Form: p => <CoatingApproachForm {...p} /> },
  { key: "process",           label: "How We Work",       Form: p => <ProcessForm {...p} /> },
  { key: "contact-cta",       label: "Contact CTA",       Form: p => <ContactCTAForm {...p} /> },
];

const SERVICES_SECTIONS: SectionEntry[] = [
  { key: "services-protective",    label: "Protective & Anticorrosive",
    Form: p => <ServiceGroupForm sectionType="services-protective"    defaults={D_SVC["services-protective"]}    {...p} /> },
  { key: "services-industrial",    label: "Industrial Coatings",
    Form: p => <ServiceGroupForm sectionType="services-industrial"    defaults={D_SVC["services-industrial"]}    {...p} /> },
  { key: "services-floor",         label: "Floor Coatings",
    Form: p => <ServiceGroupForm sectionType="services-floor"         defaults={D_SVC["services-floor"]}         {...p} /> },
  { key: "services-refurbishment", label: "Refurbishment",
    Form: p => <ServiceGroupForm sectionType="services-refurbishment" defaults={D_SVC["services-refurbishment"]} {...p} /> },
];

const CONTACT_SECTIONS: SectionEntry[] = [
  { key: "contact-hero",  label: "Hero",             Form: p => <ContactHeroForm {...p} /> },
  { key: "contact-steps", label: "What Happens Next", Form: p => <ContactStepsForm {...p} /> },
];

const ABOUT_SECTIONS: SectionEntry[] = [
  { key: "about-main",            label: "About Main",       Form: p => <AboutMainForm {...p} /> },
  { key: "about-vision-mission",  label: "Vision & Mission", Form: p => <AboutVisionMissionForm {...p} /> },
  { key: "about-quality",         label: "Quality",          Form: p => <AboutQualityForm {...p} /> },
  { key: "about-safety",          label: "Safety",           Form: p => <AboutSafetyForm {...p} /> },
];

const PAGE_SECTIONS: Record<PageSlug, SectionEntry[]> = {
  home:     HOME_SECTIONS,
  services: SERVICES_SECTIONS,
  contact:  CONTACT_SECTIONS,
  about:    ABOUT_SECTIONS,
};

const PAGE_LABEL: Record<PageSlug, string> = {
  home:     "Homepage",
  services: "Services",
  contact:  "Contact",
  about:    "About",
};

// ============ MAIN COMPONENT ============

export default function ContentClient({ initialData }: { initialData: Record<string, Record<string, unknown>> }) {
  const [currentPage, setCurrentPage] = useState<PageSlug>("home");
  const [activeKey, setActiveKey] = useState<string>("hero");

  const sections = PAGE_SECTIONS[currentPage];
  const activeSection = sections.find(s => s.key === activeKey) ?? sections[0];
  const pageData = initialData[currentPage] ?? {};

  return (
    <div>
      {/* Page tabs */}
      <div className="flex gap-1 mb-6 border-b border-[#E5E7EB]">
        {(["home", "services", "contact", "about"] as PageSlug[]).map(p => (
          <button
            key={p}
            onClick={() => { setCurrentPage(p); setActiveKey(PAGE_SECTIONS[p][0].key); }}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg border transition-colors ${
              currentPage === p
                ? "border-[#E5E7EB] border-b-white bg-white text-[#354B35] -mb-px relative z-10"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {PAGE_LABEL[p]}
          </button>
        ))}
      </div>

      <div className="flex gap-6 items-start">
        <div className="w-48 flex-shrink-0 sticky top-6">
          <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
            {sections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveKey(s.key)}
                className={`w-full text-left px-4 py-3 text-sm border-b border-[#E5E7EB] last:border-0 transition-colors ${
                  activeSection.key === s.key
                    ? "bg-[#354B35] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-6">
          <h2 className="font-semibold text-[#1A1A2E] mb-5 pb-4 border-b border-[#E5E7EB]">
            {activeSection.label}
          </h2>
          <activeSection.Form data={pageData[activeSection.key]} />
        </div>
      </div>
    </div>
  );
}
