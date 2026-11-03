"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { CheckCircle2 } from "lucide-react";

export function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all">
      <div className="flex items-center gap-2.5 bg-[#261006] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#C2410C]/40 text-sm font-medium">
        <CheckCircle2 className="w-5 h-5 text-[#E58B23]" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

