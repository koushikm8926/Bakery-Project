"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Wheat,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("Custom Cake Order");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitted(false), 5000);
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
                <span className="text-[#2B170B] font-semibold">Contact Us</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Contact Us
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558] max-w-xl">
                  We&apos;d love to hear from you! Reach out for custom cake orders, event catering,
                  support or partnerships.
                </p>
              </div>
            </div>

            {/* Cake Header Thumbnail */}
            <div className="hidden lg:block w-72 h-24 rounded-2xl overflow-hidden shadow-sm border border-[#EADBCE]">
              <img
                src="/images/products/hero-cake.jpg"
                alt="Fresh Bakes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & MESSAGE FORM */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: 4 CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-4">
            {/* Visit Store */}
            <div className="bg-white rounded-3xl p-5 border border-[#F0E5D8] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-sm text-[#2B170B]">Visit Our Store</h4>
                <p className="text-xs text-[#5C4535] mt-1 leading-relaxed">
                  35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli,
                  Bengaluru – 560037, Karnataka, India
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white rounded-3xl p-5 border border-[#F0E5D8] shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B170B]">Call Us</h4>
                  <a
                    href="tel:+919845050418"
                    className="text-xs font-semibold text-[#8B1E2D] hover:underline"
                  >
                    +91 98450 50418
                  </a>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#C2410C]" />
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-3xl p-5 border border-[#F0E5D8] shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B170B]">Email Us</h4>
                  <a
                    href="mailto:support@sandtonbakery.com"
                    className="text-xs font-semibold text-[#8B1E2D] hover:underline"
                  >
                    support@sandtonbakery.com
                  </a>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#C2410C]" />
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-5 border border-[#F0E5D8] shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2B170B]">Working Hours</h4>
                  <p className="text-xs text-[#5C4535] mt-0.5">Mon – Sun: 8:00 AM – 10:00 PM</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Open Daily
              </span>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE MESSAGE FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#F0E5D8] shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-[#2B170B]">
                  Send Us a Message
                </h3>
                <Wheat className="w-4 h-4 text-[#D97706]" />
              </div>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Have a question, feedback or special custom cake request? Fill in the form below
                and our head chef will get back to you shortly.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you! Your message has been sent. We will respond within 2 hours.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98450 50418"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Query Type *
                  </label>
                  <select
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                  >
                    <option>Custom Cake Order</option>
                    <option>Bulk / Corporate Gifting</option>
                    <option>Delivery &amp; Tracking Query</option>
                    <option>Feedback &amp; Suggestions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2B170B] block">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about cake flavors, weights, party themes or any inquiries..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#3A1407] hover:bg-[#250D04] text-white font-bold text-xs py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md active:scale-98"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. STOREFRONT PHOTO & MAP LOCATION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Storefront Image */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#F0E5D8] aspect-16/10 relative group">
            <img
              src="/images/products/storefront.jpg"
              alt="Sandton Bakery Storefront"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <h4 className="font-serif text-xl font-bold">
                  Sandton Bakery Flagship Boutique
                </h4>
                <p className="text-xs text-[#EADBCE]">
                  Step inside for fresh aromas of hot sourdough, espresso, and warm chocolate.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B170B]">Find Us on Map</h3>
                <p className="text-xs text-[#8C7A6B]">
                  Located in the heart of Marathahalli &bull; Free customer parking available
                </p>
              </div>
              <Wheat className="w-4 h-4 text-[#D97706]" />
            </div>

            {/* Stylized Map View */}
            <div className="relative rounded-2xl overflow-hidden border border-[#EADBCE] bg-[#F2EDE4] h-56 flex items-center justify-center">
              {/* Subtle map pattern */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Pin indicator */}
              <div className="relative flex flex-col items-center animate-bounce">
                <div className="bg-[#8B1E2D] text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg flex items-center gap-1.5 border border-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>Sandton Bakery</span>
                </div>
                <div className="w-3 h-3 bg-[#8B1E2D] transform rotate-45 -mt-1.5 border-r border-b border-white"></div>
              </div>

              {/* Open in Google Maps Button */}
              <div className="absolute bottom-3 right-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/95 hover:bg-white text-[#3A1407] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#EADBCE] shadow-sm flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}
