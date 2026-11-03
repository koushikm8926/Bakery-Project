import React from "react";
import { Sparkles, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export function FeatureStrip() {
  const features = [
    {
      icon: Sparkles,
      title: "Freshly Baked Daily",
      desc: "Made with quality ingredients",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      desc: "At your preferred time",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "Fresh, safe and delicious",
    },
    {
      icon: HeartHandshake,
      title: "Loved by Customers",
      desc: "A trusted bakery brand",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] py-8 border-y border-[#F0E5D8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#FAF5EE] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF6E5] border border-[#FDE68A] flex items-center justify-center shrink-0 shadow-sm text-[#D97706]">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#3A1407] leading-tight">
                    {f.title}
                  </h4>
                  <p className="text-xs text-[#8C7A6B] mt-0.5 leading-snug">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

