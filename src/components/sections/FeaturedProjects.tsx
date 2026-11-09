import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";

const STATIC_PROJECTS = [
  {
    num: "01",
    category: "Protective Coating",
    title: "Falcon Mall, Thrissur",
    desc: "Complete protective coating system on steel facade structures using AkzoNobel products for one of Kerala's largest entertainment developments.",
    img: "/images/forte/aerial-roof.jpg",
  },
  {
    num: "02",
    category: "Industrial Coating",
    title: "Structural Steel Epoxy Coating",
    desc: "High-solid self-priming epoxy on structural steel using the GEM Paints GEMCAP EPOXY system for superior adhesion and long-term corrosion protection.",
    img: "/images/forte/steel-primer.jpg",
  },
  {
    num: "03",
    category: "Blasting & Painting",
    title: "Industrial Component Blasting & Painting",
    desc: "Comprehensive blasting and anticorrosive painting of industrial metal components to extend service life in demanding operating conditions.",
    img: "/images/forte/tank-blast.jpg",
  },
  {
    num: "04",
    category: "Architectural Coating",
    title: "Architectural Metal Finish",
    desc: "Surface preparation to St 2 standard with International Interseal 670 HS primer and Interthane 990 finish on architectural metal structures.",
    img: "/images/forte/rope-access.jpg",
  },
];

export default async function FeaturedProjects() {
  let projects = STATIC_PROJECTS;

  const dbUrl = process.env.DATABASE_URL ?? "";
  const dbReady = dbUrl.length > 0 && !dbUrl.includes("username") && !dbUrl.includes("xxx");

  if (dbReady) {
    try {
      const dbProjects = await prisma.project.findMany({
        where: { isPublished: true },
        orderBy: { orderIndex: "asc" },
        take: 4,
      });
      if (dbProjects.length > 0) {
        projects = dbProjects.map((p: typeof dbProjects[0], i: number) => ({
          num: String(i + 1).padStart(2, "0"),
          category: p.category ?? "Project",
          title: p.title,
          desc: p.description,
          img: p.imageUrl ?? STATIC_PROJECTS[i % STATIC_PROJECTS.length].img,
        }));
      }
    } catch {
      // DB query failed — use static fallback
    }
  }

  return (
    <section id="featured-projects" className="background-repeat border-top border-color-light-gray" style={{ backgroundImage: "url('/crafto/images/demo-spa-salon-home-bg-01.jpg')" }}>
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-lg-6 col-md-8 text-center" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "delay": 0, "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <span className="fs-15 mb-5px text-base-color fw-500 d-block">Our work</span>
            <h3 className="alt-font ls-minus-1px text-dark-gray w-80 xl-w-90 sm-w-100 mx-auto">Featured coating projects</h3>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4" data-anime='{ "el": "childs", "translateY": [30,0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
          {projects.map((p) => (
            <div key={p.num} className="col">
              <div className="row g-0 services-box-style-02 border-radius-6px overflow-hidden h-100">
                <div className="col-12 col-sm-6 services-box-img overflow-hidden">
                  <div
                    className="h-100 cover-background position-relative xs-h-250px"
                    style={{ backgroundImage: `url('${p.img}')` }}
                  >
                    <span className="position-absolute left-20px bottom-10px fs-70 lg-fs-60 fw-600 text-white opacity-6">{p.num}</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 position-relative bg-very-light-gray p-8 xxl-p-6 xs-p-7">
                  <div className="services-box-content position-relative z-index-9">
                    <span className="fs-12 text-base-color fw-600 d-block mb-10px">{p.category}</span>
                    <span className="d-inline-block alt-font text-dark-gray fs-22 lh-28 mb-10px">{p.title}</span>
                    <p className="text-light-opacity lh-26 fs-15 mb-15px">{p.desc}</p>
                    <a href="/contact" className="btn btn-link btn-small text-dark-gray thin fw-500">
                      Enquire <ArrowRight size={12} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle", marginLeft: "5px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5 xs-mt-8">
          <div className="col-12 text-center">
            <h5 className="alt-font text-dark-gray">
              Have a similar requirement?{" "}
              <a href="/contact" className="text-dark-gray text-dark-gray-hover text-decoration-line-bottom">Talk to our team</a>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
