import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function Logo({ className = "", size = "md", showText = false }: LogoProps) {
  const sizeConfig = {
    sm: { dimension: 44, containerClass: "w-11 h-11" },
    md: { dimension: 64, containerClass: "w-14 h-14 sm:w-16 sm:h-16" },
    lg: { dimension: 88, containerClass: "w-20 h-20 sm:w-24 sm:h-24" },
    xl: { dimension: 120, containerClass: "w-28 h-28 sm:w-32 sm:h-32" },
  };

  const { dimension, containerClass } = sizeConfig[size] || sizeConfig.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-transform active:scale-95 ${className}`}
      aria-label="Sandton Bakery Home"
    >
      <div className={`relative ${containerClass} shrink-0 group-hover:scale-105 transition-transform duration-200 drop-shadow-xs`}>
        <Image
          src="/images/logo.png"
          alt="Sandton Bakery"
          width={dimension}
          height={dimension}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-black tracking-tight text-[#3A1407] leading-none">
            Sandton
          </span>
          <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#C2410C] font-bold leading-none mt-1">
            Bakery
          </span>
        </div>
      )}
    </Link>
  );
}

