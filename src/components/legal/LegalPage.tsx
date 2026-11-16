import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";

export interface LegalSection {
  id: string;
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Cancellation & Refund" },
];

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#291106] via-[#3B190B] to-[#250E05] text-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#F5B041] bg-[#4E2413] px-3.5 py-1 rounded-full border border-[#D97706]/30">
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EE]">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B8] max-w-2xl mx-auto font-light leading-relaxed">
            {intro}
          </p>
          <p className="text-xs text-[#BBA694]">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar: contents + other policies */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <nav
            aria-label="On this page"
            className="bg-white border border-[#F0E3D3] rounded-2xl p-5 shadow-sm"
          >
            <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#9E8978] mb-3">
              On this page
            </h2>
            <ol className="space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex gap-2 text-[#5C4433] hover:text-[#E58B23] transition-colors"
                  >
                    <span className="text-[#C9B3A0] tabular-nums">{i + 1}.</span>
                    <span>{s.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <nav
            aria-label="Policies"
            className="bg-[#FFF5E8] border border-[#F0E3D3] rounded-2xl p-5"
          >
            <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#9E8978] mb-3">
              Our Policies
            </h2>
            <ul className="space-y-2 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between text-[#5C4433] hover:text-[#8B1E2D] font-medium"
                  >
                    {l.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <article className="bg-white border border-[#F0E3D3] rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2B170B]">
                <span className="text-[#E58B23] mr-2">{i + 1}.</span>
                {s.heading}
              </h2>
              <div className="text-sm sm:text-[15px] leading-relaxed text-[#5C4433] space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-[#2B170B]">
                {s.body}
              </div>
            </section>
          ))}

          {/* Contact card */}
          <div className="rounded-2xl bg-gradient-to-r from-[#3B190B] to-[#250E05] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FFF8EE]">
                Questions about this policy?
              </h3>
              <p className="text-xs text-[#D8C7B8] mt-1">
                Our team replies within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:support@sandtonbakery.com"
                className="flex items-center gap-2 hover:text-[#F5B041]"
              >
                <Mail className="w-4 h-4 text-[#E58B23]" />
                support@sandtonbakery.com
              </a>
              <a href="tel:+919845050418" className="flex items-center gap-2 hover:text-[#F5B041]">
                <Phone className="w-4 h-4 text-[#E58B23]" />
                +91 98450 50418
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
