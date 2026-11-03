"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cake,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Upload,
  ArrowRight,
  Wheat,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export default function CustomCakePage() {
  const { showToast } = useCart();

  const [occasion, setOccasion] = useState("Birthday Celebration");
  const [shape, setShape] = useState("Round");
  const [tiers, setTiers] = useState("Single Tier");
  const [flavor, setFlavor] = useState("Belgian Dark Chocolate Ganache");
  const [weight, setWeight] = useState("1.5 kg (10-12 Servings)");
  const [eggless, setEggless] = useState(true);
  const [customText, setCustomText] = useState("Happy Birthday!");
  const [deliveryDate, setDeliveryDate] = useState("2025-11-05");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Dynamic estimate calculation
  const getEstimatedPrice = () => {
    let base = 999;
    if (tiers === "2-Tiered Showstopper") base += 800;
    if (tiers === "3-Tiered Grand Gala") base += 1800;
    if (weight.includes("2 kg")) base += 500;
    if (weight.includes("3 kg")) base += 1100;
    return base;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Custom cake inquiry received! Our chef will call you shortly.");
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#FAF5EE] via-[#FFF8EE] to-[#FAF5EE] border-b border-[#F0E5D8] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <nav className="text-xs text-[#8C7A6B] flex items-center justify-center md:justify-start gap-2">
                <Link href="/" className="hover:text-[#8B1E2D]">
                  Home
                </Link>
                <span>&gt;</span>
                <span className="text-[#2B170B] font-semibold">Custom Cakes</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Design Your Dream Cake
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558] max-w-xl">
                  Handcrafted custom celebration cakes tailored to your theme, flavors, and dietary preferences.
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-72 h-24 rounded-2xl overflow-hidden shadow-sm border border-[#EADBCE]">
              <img
                src="/images/products/hero-cake.jpg"
                alt="Showstopper Custom Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CUSTOM CAKE BUILDER FORM */}
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: FORM BUILDER */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-[#F0E5D8] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D8]">
              <div className="flex items-center gap-2">
                <Cake className="w-5 h-5 text-[#D97706]" />
                <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                  Cake Specifications
                </h3>
              </div>
              <span className="text-[11px] font-bold text-[#C2410C] bg-[#FFF0E0] px-3 py-1 rounded-full border border-[#E58B23]/30">
                100% Handcrafted
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#FFFDF9] rounded-2xl border border-[#F0E5D8]">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2B170B]">
                  Cake Inquiry Received!
                </h3>
                <p className="text-xs text-[#5C4535] max-w-md mx-auto leading-relaxed">
                  Our master decorator will review your design, call you at your registered phone number,
                  and share an exact digital draft before baking.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#3A1407] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                  >
                    Build Another Custom Cake
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Occasion & Shape */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B170B] block">
                      Occasion / Celebration *
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                    >
                      <option>Birthday Celebration</option>
                      <option>Anniversary &amp; Romance</option>
                      <option>Wedding Gala</option>
                      <option>Baby Shower &amp; Gender Reveal</option>
                      <option>Corporate Milestone</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B170B] block">
                      Cake Structure / Tiers *
                    </label>
                    <select
                      value={tiers}
                      onChange={(e) => setTiers(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                    >
                      <option>Single Tier (Classic Round)</option>
                      <option>Heart Shaped Vintage</option>
                      <option>2-Tiered Showstopper</option>
                      <option>3-Tiered Grand Gala</option>
                    </select>
                  </div>
                </div>

                {/* Flavor & Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B170B] block">
                      Signature Flavor &amp; Filling *
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                    >
                      <option>Belgian Dark Chocolate Ganache</option>
                      <option>Classic Red Velvet Cream Cheese</option>
                      <option>Fresh Alphonso Mango Chantilly</option>
                      <option>New York Blueberry Cheesecake</option>
                      <option>Salted Caramel &amp; Roasted Almonds</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#2B170B] block">
                      Estimated Weight &amp; Servings *
                    </label>
                    <select
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                    >
                      <option>1.0 kg (6-8 Servings)</option>
                      <option>1.5 kg (10-12 Servings)</option>
                      <option>2.0 kg (14-16 Servings)</option>
                      <option>3.0 kg (20-25 Servings)</option>
                    </select>
                  </div>
                </div>

                {/* Egg preference pill */}
                <div className="p-3 bg-[#FAF5EE] rounded-xl border border-[#EADBCE] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2B170B] block">
                      🌱 Bake 100% Eggless (Vegetarian)?
                    </span>
                    <span className="text-[10px] text-[#8C7A6B]">
                      Ultra-soft moist crumb crafted with organic dairy and pure vanilla
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={eggless}
                    onChange={(e) => setEggless(e.target.checked)}
                    className="accent-emerald-700 w-4 h-4 cursor-pointer"
                  />
                </div>

                {/* Custom message to pipe */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Custom Piping Message on Cake / Card
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    placeholder="e.g. Happy 30th Birthday Sai!"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                  />
                </div>

                {/* Special design requests */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Design Themes, Colors or Dietary Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe color palette (e.g. pastel pink and gold foil), edible flower garnish, or allergy considerations..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B1E2D] hover:bg-[#6E1422] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Submit Custom Cake Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: LIVE ESTIMATE CARD */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#2B170B] pb-3 border-b border-[#F0E5D8]">
              Estimated Cost
            </h3>

            <div className="space-y-3 text-xs text-[#5C4535]">
              <div className="flex justify-between">
                <span>Occasion:</span>
                <strong className="text-[#2B170B]">{occasion}</strong>
              </div>
              <div className="flex justify-between">
                <span>Style:</span>
                <strong className="text-[#2B170B]">{tiers}</strong>
              </div>
              <div className="flex justify-between">
                <span>Flavor:</span>
                <strong className="text-[#2B170B] truncate max-w-[150px]">{flavor}</strong>
              </div>
              <div className="flex justify-between">
                <span>Size:</span>
                <strong className="text-[#2B170B]">{weight}</strong>
              </div>
              <div className="flex justify-between">
                <span>Dietary:</span>
                <span className="text-emerald-700 font-bold">
                  {eggless ? "100% Eggless" : "With Egg"}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#FFFBF5] rounded-2xl border border-[#FDE68A] space-y-1">
              <span className="text-[11px] text-[#8C7A6B] block">Starting Estimate</span>
              <span className="font-serif text-3xl font-bold text-[#8B1E2D]">
                ₹{getEstimatedPrice()}
              </span>
              <span className="text-[10px] text-[#785437] block mt-1">
                Includes wooden cake knife, sparkler candles, and signature presentation box.
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#8C7A6B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free cancellation up to 24 hours prior to delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}

