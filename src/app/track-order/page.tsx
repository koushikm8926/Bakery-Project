"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Package,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Phone,
  MessageCircle,
  Wheat,
  ChefHat,
  Box,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export default function TrackOrderPage() {
  const { orders } = useCart();
  const [searchOrderId, setSearchOrderId] = useState("#SB784326");
  const [phone, setPhone] = useState("+91 98450 50418");

  // Matched order or default fallback
  const matchedOrder =
    orders.find((o) => o.id.toLowerCase() === searchOrderId.trim().toLowerCase()) ||
    orders[0];

  const steps = [
    {
      title: "Order Received",
      time: matchedOrder?.date || "Oct 31, 10:24 AM",
      desc: "Order confirmed & sent to our bakery master pastry chef.",
      icon: CheckCircle2,
      done: true,
    },
    {
      title: "Freshly Baking in Hearth Oven",
      time: "Oct 31, 11:00 AM",
      desc: "Sponge baked, Belgian chocolate ganache & rosettes whipped fresh.",
      icon: ChefHat,
      done: true,
    },
    {
      title: "Quality Checked & Gift Boxed",
      time: "Oct 31, 11:45 AM",
      desc: "Packed into signature temperature-safe box with candles and knife.",
      icon: Box,
      done: true,
    },
    {
      title: "Out for Express Delivery",
      time: "Oct 31, 12:15 PM",
      desc: "Delivery partner assigned: Ramesh K. (+91 98765 43210)",
      icon: Truck,
      done: matchedOrder?.status === "Delivered" || matchedOrder?.status === "Out for Delivery",
      active: matchedOrder?.status === "Out for Delivery",
    },
    {
      title: "Delivered & Enjoyed",
      time: "Oct 31, 12:45 PM",
      desc: "Handed over fresh to customer.",
      icon: Package,
      done: matchedOrder?.status === "Delivered",
      active: matchedOrder?.status === "Delivered",
    },
  ];

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
                <span className="text-[#2B170B] font-semibold">Track Order</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Track Your Bakery Order
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Live updates from our kitchen oven to your dining table.
                </p>
              </div>
            </div>

            {/* Quick lookup box */}
            <div className="w-full md:w-auto bg-white p-3 rounded-2xl border border-[#EADBCE] shadow-sm flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Order ID (e.g. #SB784326)"
                value={searchOrderId}
                onChange={(e) => setSearchOrderId(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] font-bold uppercase"
              />
              <button className="bg-[#3A1407] hover:bg-[#250D04] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                Track
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE TRACKING DETAILS */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl border border-[#F0E5D8] shadow-sm p-6 md:p-8 space-y-8">
          {/* Status Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0E5D8]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#9E8B7C] font-bold">
                Live Order Status
              </span>
              <div className="flex items-center gap-3 mt-1">
                <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
                  {matchedOrder?.id || "#SB784326"}
                </h2>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{matchedOrder?.status || "In Progress"}</span>
                </span>
              </div>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Estimated Delivery: <strong>{matchedOrder?.deliveryDate || "Today"}</strong> (
                {matchedOrder?.deliverySlot || "10:00 AM - 12:00 PM"})
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+919845050418"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#EADBCE] text-xs font-semibold text-[#2B170B] hover:bg-[#FAF5EE]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Call Bakery</span>
              </a>
              <a
                href="https://wa.me/919845050418"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Vertical Stepper Timeline */}
          <div className="relative pl-6 md:pl-10 space-y-8">
            <div className="absolute left-9 md:left-13 top-4 bottom-4 w-0.5 bg-[#EADBCE]"></div>

            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="relative flex items-start gap-4 z-10">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                      st.done
                        ? "bg-[#3A1407] border-[#3A1407] text-[#FBBF24] shadow-sm"
                        : "bg-white border-[#EADBCE] text-[#9E8B7C]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 bg-[#FAF5EE] rounded-2xl p-4 border border-[#EADBCE]">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                      <h4 className="font-serif font-bold text-sm text-[#2B170B]">{st.title}</h4>
                      <span className="text-[11px] text-[#8C7A6B] font-medium">{st.time}</span>
                    </div>
                    <p className="text-xs text-[#5C4535] mt-1">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery & Items Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0E5D8]">
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#2B170B] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>Delivery Address</span>
              </h4>
              <p className="text-xs text-[#5C4535] leading-relaxed bg-[#FAF5EE] p-4 rounded-2xl border border-[#EADBCE]">
                {matchedOrder?.address ||
                  "35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli, Bengaluru – 560037"}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#2B170B] flex items-center gap-2">
                <Package className="w-4 h-4 text-[#D97706]" />
                <span>Payment &amp; Items</span>
              </h4>
              <div className="text-xs text-[#5C4535] leading-relaxed bg-[#FAF5EE] p-4 rounded-2xl border border-[#EADBCE] space-y-1">
                <p>
                  Payment: <strong>{matchedOrder?.paymentMethod || "UPI (Google Pay)"}</strong>
                </p>
                <p>
                  Total Paid: <strong className="text-[#8B1E2D]">₹{matchedOrder?.total || 2596}</strong>
                </p>
                <p className="text-[#8C7A6B]">Order contains 100% fresh handcrafted treats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}

