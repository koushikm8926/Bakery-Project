import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Wheat,
  Sparkles,
  Award,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChefHat,
} from "lucide-react";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export const metadata: Metadata = {
  title: "About Us | Sandton Bakery - Freshly Baked with Love",
  description:
    "Learn about Sandton Bakery's heritage, master pastry chefs, slow-fermentation hearth breads, and passion for artisan desserts.",
};

export default function AboutPage() {
  const chefs = [
    {
      name: "Jean-Pierre Laurent",
      role: "Executive Pastry Chef",
      bio: "Trained in Lyon and Paris, bringing 18 years of classical French lamination and viennoiserie expertise.",
      image: "/images/products/chocolate-croissant.jpg",
    },
    {
      name: "Ananya Deshmukh",
      role: "Head Chocolatier & Cake Artist",
      bio: "Gold medalist in sugar craft and chocolate tempering, designing custom showstopper celebration gateaux.",
      image: "/images/products/hero-cake.jpg",
    },
    {
      name: "Marcus Van Der Bilt",
      role: "Master Sourdough Baker",
      bio: "Passionate about wild yeast ecology and slow 36-hour cold-fermentation hearth stone bakes.",
      image: "/images/products/bread-sourdough.jpg",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-r from-[#291106] via-[#3B190B] to-[#250E05] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-4">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#F5B041] bg-[#4E2413] px-3.5 py-1 rounded-full border border-[#D97706]/30">
            Our Heritage &amp; Passion
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFF8EE]">
            Baking Warmth, Joy &amp; Craftsmanship <br className="hidden sm:inline" />
            <span className="text-[#FBBF24] italic font-normal">Every Single Morning</span>
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B8] max-w-2xl mx-auto font-light leading-relaxed">
            From honest sourdough starters to decadent Belgian chocolate truffles, our ovens have
            been lighting up mornings with authentic aroma and love.
          </p>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Wheat className="w-5 h-5 text-[#D97706]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
                Since Day One
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B] leading-tight">
              A Truly Artisanal Bakery Built on Purity and Patience
            </h2>

            <p className="text-sm text-[#5C4535] leading-relaxed">
              Sandton Bakery was born out of a simple, unyielding obsession: to banish factory-made,
              chemical-laden pastries and bring genuine, hand-kneaded baking back to our neighborhood.
            </p>

            <p className="text-sm text-[#5C4535] leading-relaxed">
              We begin before sunrise every day. Our bakers mill stone-ground whole wheat, fold slow-churned
              butter into 81 laminated pastry layers, and temper fine Belgian chocolate at precise
              temperatures to ensure every bite crackles and melts just right.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EADBCE]">
                <span className="font-serif text-2xl font-bold text-[#8B1E2D]">36 Hrs</span>
                <p className="text-xs text-[#8C7A6B] mt-0.5">Slow Sourdough Fermentation</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EADBCE]">
                <span className="font-serif text-2xl font-bold text-[#8B1E2D]">100%</span>
                <p className="text-xs text-[#8C7A6B] mt-0.5">Pure Belgian Cocoa &amp; Butter</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-4/5">
              <img
                src="/images/products/storefront.jpg"
                alt="Bakery Boutique"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-4/5 translate-y-6">
              <img
                src="/images/products/croissants.jpg"
                alt="Laminated Viennoiserie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR FOUR CORE PILLARS */}
      <section className="bg-[#FAF5EE] py-14 border-y border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
              Our Baking Philosophy
            </h2>
            <p className="text-sm text-[#8C7A6B]">
              The standards we will never compromise on
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Zero Preservatives",
                desc: "No artificial improvers, bleached flours or palm oils. What you eat is 100% wholesome.",
                icon: ShieldCheck,
              },
              {
                title: "Pure European Butter",
                desc: "We use high-fat cultured butter to achieve irresistible honeycomb pastry flakiness.",
                icon: Award,
              },
              {
                title: "Strict Hygiene Kitchens",
                desc: "Temperature-regulated bake studios certified under highest food safety benchmarks.",
                icon: CheckCircle2,
              },
              {
                title: "Made Daily, Never Day-Old",
                desc: "Any unpurchased bread is donated to local shelters every evening. Freshness is guaranteed.",
                icon: Heart,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2B170B]">{p.title}</h4>
                  <p className="text-xs text-[#5C4535] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR MASTER CHEFS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">The Masters Behind the Bakes</h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            Years of training, early morning dedication, and a boundless passion for flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-[#F0E5D8] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-4/3 overflow-hidden bg-[#FAF6EE]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[11px] font-bold text-[#C2410C] uppercase tracking-wider">
                  {c.role}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#2B170B]">{c.name}</h3>
                <p className="text-xs text-[#5C4535] leading-relaxed">{c.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}
