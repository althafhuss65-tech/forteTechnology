import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-[#F8F9FA] py-32 px-4">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-bold text-[#1565C0] mb-4">404</p>
          <h1 className="text-3xl font-bold text-[#1A1A2E] mb-4">Page Not Found</h1>
          <p className="text-[#374151] leading-relaxed mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-[#1565C0] text-white font-semibold rounded-md hover:bg-[#0D47A1] transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-[#1565C0] text-[#1565C0] font-semibold rounded-md hover:bg-[#1565C0] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
