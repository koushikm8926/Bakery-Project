import type { Metadata } from "next";
import Link from "next/link";
import { Cake, Home, ShoppingBag, Search, HelpCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Sandton Bakery",
};

const QUICK_LINKS = [
  { href: "/shop", label: "Shop all bakes", icon: ShoppingBag },
  { href: "/custom-cake", label: "Design a custom cake", icon: Cake },
  { href: "/track-order", label: "Track your order", icon: Search },
  { href: "/faqs", label: "Read the FAQs", icon: HelpCircle },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5E8] to-[#FFFDF9] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center space-y-6">
        <div className="relative inline-flex items-center justify-center">
          <span
            aria-hidden="true"
            className="font-serif text-[120px] sm:text-[160px] leading-none font-bold text-[#F0E3D3] select-none"
          >
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg border border-[#F0E3D3] flex items-center justify-center">
              <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-[#E58B23]" />
            </span>
          </span>
        </div>

        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#8B1E2D] bg-[#FBE7E3] px-3.5 py-1 rounded-full">
          Page not found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B170B]">
          Oops! This page has <span className="text-[#E58B23] italic font-normal">crumbled</span>
        </h1>

        <p className="text-sm sm:text-base text-[#5C4433] max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for may have been moved, renamed or eaten by a hungry
          baker. Let&apos;s get you back to something delicious.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#721826] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-2 border-[#E58B23] text-[#B45F06] hover:bg-[#E58B23] hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse the Shop
          </Link>
        </div>

        <div className="pt-8">
          <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#9E8978] mb-4">
            Popular destinations
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 bg-white border border-[#F0E3D3] rounded-xl px-4 py-3 text-sm font-medium text-[#5C4433] hover:border-[#E58B23] hover:text-[#8B1E2D] transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#FFF5E8] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#E58B23]" />
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-[#9E8978] pt-4 flex items-center justify-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          Need help? Call us on{" "}
          <a href="tel:+919845050418" className="font-semibold text-[#8B1E2D] hover:underline">
            +91 98450 50418
          </a>
        </p>
      </div>
    </section>
  );
}
