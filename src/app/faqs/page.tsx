"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
  Wheat,
  Sparkles,
} from "lucide-react";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

interface FAQItem {
  question: string;
  answer: string;
  category: "delivery" | "ingredients" | "custom" | "payments";
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "delivery",
    question: "Do you offer same-day delivery for cakes and bakery items?",
    answer:
      "Yes! We offer guaranteed same-day delivery within 2 to 4 hours across Sandton, Bengaluru, and surrounding neighborhoods. To secure a specific afternoon or evening slot, we recommend placing your order before 2:00 PM.",
  },
  {
    category: "delivery",
    question: "How are cakes transported safely without getting damaged?",
    answer:
      "All our celebration cakes are chilled, secured in heavy-duty reinforced corrugated boxes with internal anti-slip pads, and transported in temperature-controlled vehicles. Complimentary wooden cake knives and sparklers are included.",
  },
  {
    category: "ingredients",
    question: "Are your bakes 100% vegetarian / eggless?",
    answer:
      "A large selection of our catalog is certified 100% Eggless (Vegetarian). Look for the green '🌱 Eggless' badge on product cards. Our eggless cakes use fresh organic curd, condensed milk, and pure extracts to guarantee an exceptionally moist and tender sponge.",
  },
  {
    category: "ingredients",
    question: "How should I store my cake, and what is its shelf life?",
    answer:
      "Fresh cream and chocolate truffle cakes should be stored in the refrigerator between 4°C - 8°C and consumed within 48 to 72 hours. For the best flavor and melt-in-the-mouth texture, bring chocolate cakes to room temperature 15 minutes before cutting.",
  },
  {
    category: "ingredients",
    question: "Do you cater to nut or gluten allergies?",
    answer:
      "While we take great care in food handling, all our bakery creations are prepared in an artisan kitchen that handles wheat flour, dairy, eggs, and tree nuts (such as almonds, pistachios, and hazelnuts). Please check the product ingredients tab or contact us for specific allergy queries.",
  },
  {
    category: "custom",
    question: "How far in advance should I order a custom celebration cake?",
    answer:
      "For single-tier custom designs, we ask for at least 24 hours notice. For 2-tiered or 3-tiered elaborate wedding and gala bakes, please book 3 to 5 days in advance so our head pastry chef can sculpt and dry all handcrafted elements.",
  },
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including Instant UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking across 50+ banks, and mobile wallets. All transactions are 256-bit SSL encrypted.",
  },
  {
    category: "payments",
    question: "Can I cancel or reschedule my order?",
    answer:
      "Standard shop orders can be rescheduled or cancelled with a full refund up to 4 hours before the selected delivery time slot. For custom cakes, cancellations are free up to 24 hours prior to baking.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }
    if (
      searchQuery &&
      !item.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#FAF5EE] via-[#FFF8EE] to-[#FAF5EE] border-b border-[#F0E5D8] py-10 md:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <nav className="text-xs text-[#8C7A6B] flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-[#8B1E2D]">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-[#2B170B] font-semibold">FAQs &amp; Help</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B170B]">
            Frequently Asked Questions
          </h1>

          <p className="text-xs sm:text-sm text-[#786558] max-w-lg mx-auto">
            Everything you need to know about our fresh bakes, delivery promises, allergen safety,
            and custom cake crafting.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[#9E8B7C] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. eggless, delivery time, cancellation)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#EADBCE] text-xs sm:text-sm text-[#2B170B] placeholder-[#9E8B7C] focus:outline-none focus:border-[#C2410C] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY PILLS */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: "all", label: "All Questions" },
            { id: "delivery", label: "Orders & Delivery" },
            { id: "ingredients", label: "Ingredients & Shelf Life" },
            { id: "custom", label: "Custom Cakes" },
            { id: "payments", label: "Payments & Refunds" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat.id
                  ? "bg-[#3A1407] text-white shadow-sm"
                  : "bg-white text-[#4A2D1B] border border-[#F0E5D8] hover:bg-[#FAF5EE]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#F0E5D8] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#2B170B] hover:text-[#8B1E2D] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#8C7A6B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C7A6B] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C4535] leading-relaxed border-t border-[#FAF5EE] pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#F0E5D8] p-6 space-y-2">
            <p className="font-serif font-bold text-base text-[#2B170B]">
              No questions found matching your search
            </p>
            <p className="text-xs text-[#8C7A6B]">
              Try searching with other keywords or reach out directly to our customer team.
            </p>
          </div>
        )}
      </section>

      {/* 4. NEED MORE HELP? */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#FAF5EE] rounded-3xl p-8 border border-[#EADBCE] text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#2B170B]">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-[#786558] max-w-md mx-auto">
            Our bakery concierge team is online 7 days a week from 8:00 AM to 10:00 PM to help you
            with cake orders, customization, or delivery details.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919845050418"
              className="inline-flex items-center gap-2 bg-[#3A1407] hover:bg-[#250D04] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call +91 98450 50418</span>
            </a>

            <a
              href="https://wa.me/919845050418"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}

