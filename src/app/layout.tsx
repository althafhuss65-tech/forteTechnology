import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CraftoReinit from "@/components/ui/CraftoReinit";
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
        {/* Google Fonts — Rufina (serif alt-font) + Jost (body), trimmed to used weights only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&family=Jost:wght@300;400;500;600;700&display=swap"
        />
        {/* Preload Crafto JS so scripts are in cache before afterInteractive fires */}
        <link rel="preload" href="/crafto/js/jquery.js" as="script" />
        <link rel="preload" href="/crafto/js/vendors.min.js" as="script" />
        <link rel="preload" href="/crafto/js/main.js" as="script" />
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
        <CraftoReinit />
        {/* Load Crafto JS in sequence: jQuery → vendors → main */}
        <Script id="crafto-loader" strategy="afterInteractive">{`
          (function() {
            function load(src, cb) {
              var s = document.createElement('script');
              s.src = src;
              s.onload = cb || function(){};
              s.onerror = function() { console.error('Crafto: failed to load ' + src); if(cb) cb(); };
              document.head.appendChild(s);
            }

            // If scripts fail entirely, reveal content after 5s by adding Crafto's .appear class
            // (matches existing CSS [data-anime].appear { opacity:1 }, no conflict with animations)
            var fallbackTimer = setTimeout(function() {
              document.querySelectorAll('[data-anime]').forEach(function(el) {
                el.classList.add('appear', 'anime-complete');
              });
            }, 5000);

            load('/crafto/js/jquery.js', function() {
              // 30+ vendor UMDs check define.amd. Masking while vendors loads forces the
              // global-assignment path so window.anime, window.Swiper etc are all set.
              var savedDefine = window.define;
              window.define = undefined;
              load('/crafto/js/vendors.min.js', function() {
                window.define = savedDefine;
                load('/crafto/js/main.js', function() {
                  window._craftoReady = true;
                  clearTimeout(fallbackTimer);
                });
              });
            });
          })();
        `}</Script>
      </body>
    </html>
  );
}
