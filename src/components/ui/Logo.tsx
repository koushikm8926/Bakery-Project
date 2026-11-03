import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "h-10 w-auto",
    md: "h-14 w-auto",
    lg: "h-20 w-auto",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* If cropped image exists, render it with fallback */}
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-full border-2 border-[#E58B23] bg-[#FFF8EE] flex flex-col items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B1E2D"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
              <line x1="6" y1="17" x2="18" y2="17" />
            </svg>
            <div className="w-5 h-0.5 bg-[#E58B23] rounded-full mt-0.5"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-black tracking-tight text-[#3A1407] leading-none">
              Sandton
            </span>
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#C2410C] font-bold leading-none mt-1">
              Bakery
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
