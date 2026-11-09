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
