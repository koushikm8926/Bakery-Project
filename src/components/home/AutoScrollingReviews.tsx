"use client";

import React, { useRef, useState } from "react";
import { Star, Wheat, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

export interface Review {
  id: string;
  author: string;
  location: string;
  avatarBg: string;
  rating: number;
  date: string;
  product: string;
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Lerato M.",
    location: "Sandton, Johannesburg",
    avatarBg: "bg-[#8B1E2D]",
    rating: 5,
    date: "2 days ago",
    product: "Classic Chocolate Cake",
    quote:
      "The cakes are absolutely delicious and always so fresh! Sandton Bakery is my go-to for every special family occasion.",
  },
  {
    id: "rev-2",
    author: "James K.",
    location: "Bengaluru, India",
    avatarBg: "bg-[#D97706]",
    rating: 5,
    date: "3 days ago",
    product: "Chocolate Croissant & Berry Tart",
    quote:
      "Amazing variety, beautiful presentation, and prompt delivery. Their chocolate croissants and berry tarts are simply irresistible!",
  },
  {
    id: "rev-3",
    author: "Thandi N.",
    location: "Sandton, Johannesburg",
    avatarBg: "bg-[#3A1407]",
    rating: 5,
    date: "5 days ago",
    product: "Artisanal Sourdough Loaf",
    quote:
      "Consistently high quality and great taste. I order artisanal sourdough and custom cakes regularly — highly recommended!",
  },
  {
    id: "rev-4",
    author: "Sai Kumar",
    location: "Bengaluru, India",
    avatarBg: "bg-[#8B1E2D]",
    rating: 5,
    date: "1 week ago",
    product: "Belgian Chocolate Truffle Cake",
    quote:
      "Ordered the Chocolate Truffle Cake for our anniversary. The velvety ganache and soft chocolate sponge melted in our mouth. Best cake in town!",
  },
  {
    id: "rev-5",
    author: "Priya Sharma",
    location: "Bengaluru, India",
    avatarBg: "bg-[#097939]",
    rating: 5,
    date: "1 week ago",
    product: "Eggless Red Velvet Cake",
    quote:
      "The 100% eggless Red Velvet cake was heavenly! The cream cheese frosting is light, tangy, and perfectly balanced. Everyone at the party loved it.",
  },
  {
    id: "rev-6",
    author: "David O.",
    location: "Johannesburg",
    avatarBg: "bg-[#2563EB]",
    rating: 5,
    date: "2 weeks ago",
    product: "Hearth Stone Sourdough",
    quote:
      "Their sourdough bread has the most incredible crunchy blistered crust and chewy open crumb. True European hearth bakery quality.",
  },
  {
    id: "rev-7",
    author: "Ananya Roy",
    location: "Bengaluru, India",
    avatarBg: "bg-[#7C3AED]",
    rating: 5,
    date: "2 weeks ago",
    product: "New York Blueberry Cheesecake",
    quote:
      "Ordered the Blueberry Cheesecake for my daughter's birthday. Delivered in 2 hours in a gorgeous box with candles. 10/10 experience!",
  },
  {
    id: "rev-8",
    author: "Michael R.",
    location: "Sandton, Johannesburg",
    avatarBg: "bg-[#B45309]",
    rating: 5,
    date: "3 weeks ago",
    product: "Pistachio Danish & Latte",
    quote:
      "Pistachio Danish and Cinnamon Rolls with hot morning latte are my daily ritual. Fresh out of the oven warmth every morning!",
  },
  {
    id: "rev-9",
    author: "Rohan Mehta",
    location: "Bengaluru, India",
    avatarBg: "bg-[#C2410C]",
    rating: 5,
    date: "3 weeks ago",
    product: "Custom 2-Tier Celebration Cake",
    quote:
      "Custom 2-tiered cake design was executed beyond our expectations. Looked stunning and tasted even better. Masterful craftsmanship.",
  },
];

export function AutoScrollingReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Manual scroll step
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Duplicate list to achieve seamless infinite loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
              What Our Customers Say
            </h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-xs sm:text-sm text-[#8C7A6B]">
            Real experiences from our happy bakery lovers &bull; Rated 4.9/5 from 1,200+ reviews
          </p>
        </div>

        {/* Controls: Pause toggle & Manual navigation */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-[#F0E5D8] shadow-xs">
          <span className="text-[11px] text-[#8C7A6B] mr-1 hidden md:inline">
            {isPaused ? "Paused" : "Auto-scrolling"}
          </span>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg text-[#5C4535] hover:bg-[#FAF5EE] hover:text-[#8B1E2D] transition-colors"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            aria-label="Toggle auto-scroll"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <div className="h-4 w-px bg-[#EADBCE]"></div>

          <button
            onClick={() => handleScroll("left")}
            className="p-1.5 rounded-lg text-[#5C4535] hover:bg-[#FAF5EE] hover:text-[#8B1E2D] transition-colors"
            title="Previous reviews"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="p-1.5 rounded-lg text-[#5C4535] hover:bg-[#FAF5EE] hover:text-[#8B1E2D] transition-colors"
            title="Next reviews"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTINUOUS AUTO-SCROLLING TICKER CONTAINER */}
      <div
        ref={scrollRef}
        className="relative w-full overflow-x-hidden group py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling track */}
        <div
          className={`flex gap-6 ${isPaused ? "" : "animate-marquee"}`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedReviews.map((t, idx) => {
            const initials = t.author
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={`${t.id}-${idx}`}
                className="w-[320px] sm:w-[360px] shrink-0 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-sm hover:shadow-xl hover:border-[#D97706]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Quote Mark & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl text-[#E58B23] font-serif leading-none font-bold">
                      “
                    </div>
                    <div className="flex items-center gap-0.5 text-[#D97706]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D97706]" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#4A2D1B] leading-relaxed italic line-clamp-4">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                {/* Ordered Product Pill */}
                <div className="mt-4 pt-3 border-t border-[#F5EDE3] space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF8EE] border border-[#FDE68A] text-[10px] font-semibold text-[#92400E] max-w-full truncate">
                    <Sparkles className="w-3 h-3 text-[#D97706] shrink-0" />
                    <span className="truncate">{t.product}</span>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${t.avatarBg} text-white font-serif font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {initials}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif font-bold text-xs text-[#2B170B] truncate">
                          {t.author}
                        </h4>
                        <span title="Verified Purchase" className="inline-flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </span>
                      </div>
                      <p className="text-[10px] text-[#8C7A6B] truncate">
                        {t.location} &bull; {t.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Hint */}
      <p className="text-center text-[11px] text-[#9E8B7C]">
        💡 Tip: Hover or tap any review to pause and read
      </p>
    </section>
  );
}
