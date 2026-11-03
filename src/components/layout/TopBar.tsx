"use client";

import React, { useState } from "react";
import { MapPin, Sparkles, Truck, ShieldCheck, Phone, ChevronDown } from "lucide-react";

export function TopBar() {
  const [city, setCity] = useState("Bengaluru");
  const [isCityOpen, setIsCityOpen] = useState(false);

  const cities = ["Bengaluru", "Sandton, Johannesburg", "Mumbai", "Delhi NCR"];

  return (
    <div className="bg-[#2D1308] text-[#F3E8DF] text-[12px] py-1.5 px-4 md:px-8 border-b border-[#4A2518]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* City Selector */}
        <div className="relative flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#E58B23]" />
          <button
            onClick={() => setIsCityOpen(!isCityOpen)}
            className="flex items-center gap-1 hover:text-[#E58B23] transition-colors"
          >
            <span>{city}</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {isCityOpen && (
            <div className="absolute top-6 left-0 z-50 bg-[#3A180B] border border-[#5A2C18] rounded-md shadow-lg py-1 min-w-[170px]">
              {cities.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCity(c);
                    setIsCityOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-[#4E2413] text-[#F3E8DF] text-[12px] transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Value Propositions */}
        <div className="hidden lg:flex items-center gap-6 text-[12px] text-[#E0CFC2]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E58B23]" />
            <span>Freshly Baked Daily</span>
          </div>
          <span className="text-[#5E3624]">|</span>
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-[#E58B23]" />
            <span>Same Day Delivery in Your Area</span>
          </div>
          <span className="text-[#5E3624]">|</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E58B23]" />
            <span>100% Quality & Freshness</span>
          </div>
        </div>

        {/* Customer Support Phone */}
        <div className="flex items-center gap-2 font-medium">
          <Phone className="w-3.5 h-3.5 text-[#E58B23]" />
          <a
            href="tel:+919845050418"
            className="hover:text-[#E58B23] transition-colors"
          >
            +91 98450 50418
          </a>
        </div>
      </div>
    </div>
  );
}
