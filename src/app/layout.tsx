import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Forte Technologies — Protective & Industrial Coating Specialists",
    template: "%s | Forte Technologies",
  },
  description:
    "Forte Technologies is a Bangalore-based industrial coating specialist offering protective coatings, anticorrosive coatings, thermal insulation, fireproofing and floor coating solutions.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.fortetechnologies.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.fortetechnologies.in",
    siteName: "Forte Technologies",
    title: "Forte Technologies — Protective & Industrial Coating Specialists",
    description:
      "Forte Technologies is a Bangalore-based industrial coating specialist offering protective coatings, anticorrosive coatings, thermal insulation, fireproofing and floor coating solutions.",
    images: [{ url: "/images/forte/hero-1.jpg", width: 1600, height: 900, alt: "Forte Technologies industrial coating work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forte Technologies — Protective & Industrial Coating Specialists",
    description:
      "Forte Technologies is a Bangalore-based industrial coating specialist offering protective coatings, anticorrosive coatings, thermal insulation, fireproofing and floor coating solutions.",
    images: ["/images/forte/hero-1.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <head>
        {/* Google Fonts - Rufina (serif) + Jost (sans) matching spa-salon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&family=Jost:wght@100;200;300;400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
        />
        {/* Icon CDN libraries */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        {/* Crafto CSS */}
        <link rel="stylesheet" href="/crafto/css/vendors.min.css" />
        <link rel="stylesheet" href="/crafto/css/icon.min.css" />
        <link rel="stylesheet" href="/crafto/css/style.min.css" />
        <link rel="stylesheet" href="/crafto/css/responsive.min.css" />
        <link rel="stylesheet" href="/crafto/demos/spa-salon/spa-salon.css" />
      </head>
      <body className="overflow-x-hidden" data-mobile-nav-style="classic">
        {children}
        <ScrollToTop />
        {/* Load Crafto JS in sequence: jQuery → vendors → main */}
        <Script id="crafto-loader" strategy="afterInteractive">{`
          (function() {
            function load(src, cb) {
              var s = document.createElement('script');
              s.src = src;
              s.onload = cb || function(){};
              document.head.appendChild(s);
            }
            load('/crafto/js/jquery.js', function() {
              load('/crafto/js/vendors.min.js', function() {
                load('/crafto/js/main.js');
              });
            });
          })();
        `}</Script>
      </body>
    </html>
  );
}
