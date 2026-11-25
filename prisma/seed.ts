import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@fortetechnologies.in";
  const password = process.env.ADMIN_PASSWORD || "Forte@Admin2024!";

  // Admin user
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (!existing) {
    const hash = await bcrypt.hash(password, 12);
    await prisma.adminUser.create({
      data: { email, passwordHash: hash, name: "Admin" },
    });
    console.log(`Admin created: ${email}`);
  } else {
    console.log(`Admin already exists: ${email}`);
  }

  // Default site settings
  const defaults = [
    { key: "phone", value: "+91 6364227475", label: "Phone Number", type: "text" },
    { key: "email", value: "info@fortetechnologies.in", label: "Contact Email", type: "email" },
    { key: "address", value: "No. 618, Mahidhara Fortune City, Attibele, Bangalore – 562107", label: "Address", type: "textarea" },
    { key: "enquiry_email", value: "info@fortetechnologies.in", label: "Enquiry Recipient Email", type: "email" },
    { key: "site_tagline", value: "Protective & Industrial Coating Specialists", label: "Site Tagline", type: "text" },
    { key: "footer_copyright", value: `© ${new Date().getFullYear()} Forte Technologies. All rights reserved.`, label: "Footer Copyright", type: "text" },
  ];

  for (const setting of defaults) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  // Seed all services
  const services = [
    // Protective & Anticorrosive
    { title: "Surface Preparation", shortDesc: "Remove corrosion, contaminants and old coatings to achieve the substrate condition required for maximum adhesion and coating life.", longDesc: "Surface preparation is the most critical step in any coating system. We remove corrosion, contaminants and old coatings to achieve the substrate condition required for maximum adhesion and coating life.", icon: "layers", tags: "Dry Blast · Water Blast · Hand Tool · Power Tool", category: "protective", orderIndex: 1 },
    { title: "Anticorrosive Coatings", shortDesc: "Specially formulated materials applied to protect surfaces from corrosion caused by moisture, oxygen and other corrosive substances.", longDesc: "Specially formulated materials applied to protect surfaces from corrosion caused by moisture, oxygen and other corrosive substances. Systems are selected based on substrate type, service environment and the level of protection required.", icon: "shield", tags: "Rust Prevention · Corrosion Resistance · Long-Term Protection", category: "protective", orderIndex: 2 },
    { title: "Protective Coatings", shortDesc: "Barrier coatings that protect surfaces against corrosion, wear, abrasion, chemical exposure, weathering and UV radiation.", longDesc: "Barrier coatings that protect surfaces against corrosion, wear, abrasion, chemical exposure, weathering and UV radiation. They preserve substrate integrity and extend the service life of structures and equipment.", icon: "hard-hat", tags: "Corrosion · Wear · Chemical · UV · Weathering", category: "protective", orderIndex: 3 },
    { title: "Thermal Insulation Coatings", shortDesc: "Specialised coatings designed to reduce heat transfer through walls, roofs, pipelines and equipment.", longDesc: "Specialised coatings designed to reduce heat transfer through walls, roofs, pipelines and equipment. Used to improve energy efficiency, reduce thermal conductivity and provide insulation in industrial and commercial applications.", icon: "thermometer", tags: "Heat Reduction · Energy Efficiency · Pipelines · Roofing", category: "protective", orderIndex: 4 },
    // Industrial
    { title: "Industrial Coatings", shortDesc: "Coating solutions designed to protect equipment, machinery, metal components and industrial structures.", longDesc: "Coating solutions designed to protect equipment, machinery, metal components and industrial structures against corrosion, abrasion, chemical exposure and demanding operating conditions.", icon: "factory", tags: "Equipment · Machinery · Metal · Structures", category: "industrial", orderIndex: 1 },
    { title: "Fireproofing", shortDesc: "Intumescent coatings that expand when exposed to heat, providing a protective char layer that delays structural failure.", longDesc: "Intumescent coatings that expand when exposed to heat, providing a protective char layer that delays structural failure and limits flame spread. Applied to steel structures requiring passive fire protection.", icon: "flame", tags: "Intumescent · Fire Resistant · Structural Protection", category: "industrial", orderIndex: 2 },
    // Floor Coatings
    { title: "Epoxy Flooring", shortDesc: "A durable, seamless and easy-to-maintain surface for industrial and commercial environments.", longDesc: "A durable, seamless and easy-to-maintain surface for industrial and commercial environments. Offers resistance to abrasion, impact and chemical exposure depending on the selected system.", icon: "grid", tags: "Durability · Seamless Finish · Chemical Resistance", category: "flooring", orderIndex: 1 },
    { title: "Cementitious PU Flooring", shortDesc: "Designed for demanding environments exposed to temperature variations, moisture, mechanical stress and aggressive cleaning regimes.", longDesc: "Designed for demanding environments exposed to temperature variations, moisture, mechanical stress and aggressive cleaning regimes. Particularly suitable for facilities requiring durable, hygienic flooring.", icon: "droplets", tags: "Thermal Shock Resistance · Heavy-Duty · Hygiene", category: "flooring", orderIndex: 2 },
    { title: "MMA Flooring", shortDesc: "Methyl Methacrylate flooring systems offer rapid curing, enabling floors to return to service quickly.", longDesc: "Methyl Methacrylate flooring systems offer rapid curing, enabling floors to return to service quickly when installation time is critical. System selection depends on substrate, operating conditions and required performance.", icon: "zap", tags: "Rapid Installation · Fast Return to Service · Versatility", category: "flooring", orderIndex: 3 },
    { title: "ESD Flooring", shortDesc: "Electrostatic Discharge flooring systems help control the generation and dissipation of static electricity.", longDesc: "Electrostatic Discharge flooring systems help control the generation and dissipation of static electricity when correctly designed, installed and tested as part of an appropriate grounding system.", icon: "plug", tags: "Static Control · Operational Protection · Specialised", category: "flooring", orderIndex: 4 },
    { title: "Food-Grade Epoxy Flooring", shortDesc: "Designed for facilities where hygiene, cleanability and resistance to routine cleaning chemicals are important.", longDesc: "Designed for facilities where hygiene, cleanability and resistance to routine cleaning chemicals are important. The selected system meets applicable hygiene, regulatory and operational requirements.", icon: "utensils", tags: "Hygienic Surfaces · Easy Cleaning · Chemical Resistance", category: "flooring", orderIndex: 5 },
    // Refurbishment
    { title: "Industrial Refurbishment", shortDesc: "Refurbishment and recoating of deteriorated industrial structures, equipment and facilities.", longDesc: "Refurbishment and recoating of deteriorated industrial structures, equipment and facilities to restore surface integrity and extend asset service life. Includes surface preparation, coating removal and new protective systems.", icon: "wrench", tags: "Recoating · Corrosion Treatment · Asset Restoration", category: "refurbishment", orderIndex: 1 },
    { title: "Project Execution", shortDesc: "End-to-end project delivery through coordinated planning, resource mobilisation, surface preparation and quality control.", longDesc: "End-to-end project delivery through coordinated planning, resource mobilisation, surface preparation, coating application and quality control - with a focus on specifications, safe execution and project schedules.", icon: "clipboard", tags: "Planning · Mobilisation · Quality Control · Handover", category: "refurbishment", orderIndex: 2 },
  ];

  for (const svc of services) {
    const exists = await prisma.service.findFirst({ where: { title: svc.title } });
    if (!exists) await prisma.service.create({ data: svc });
  }

  // Seed projects from LinkedIn data
  const projects = [
    {
      title: "Falcon Mall, Thrissur",
      description: "Coating of steel facade structures with a complete protective coating system using AkzoNobel products for one of Kerala's largest entertainment developments.",
      category: "Protective Coating",
      orderIndex: 1,
    },
    {
      title: "Structural Steel Epoxy Coating",
      description: "High-solid self-priming epoxy coating on structural steel using GEM Paints GEMCAP EPOXY system, providing superior adhesion and long-term corrosion protection.",
      category: "Industrial Coating",
      orderIndex: 2,
    },
    {
      title: "Industrial Component Blasting & Painting",
      description: "Comprehensive blasting and painting treatment on industrial metal components with anticorrosive coating systems to extend service life.",
      category: "Blasting & Painting",
      orderIndex: 3,
    },
    {
      title: "Architectural Metal Finish",
      description: "Surface preparation to St 2 standard, primer International Interseal 670 HS and finish coat International Interthane 990 on architectural metal structures.",
      category: "Architectural Coating",
      orderIndex: 4,
    },
  ];

  for (const project of projects) {
    const exists = await prisma.project.findFirst({ where: { title: project.title } });
    if (!exists) {
      await prisma.project.create({ data: project });
    }
  }

  console.log("Seed complete.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
