import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#261006] text-[#D8C7B8] pt-14 pb-8 border-t-4 border-[#C2410C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3E2114]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-full border-2 border-[#E58B23] bg-[#3B190B] flex items-center justify-center p-1 text-[#E58B23]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Sandton Bakery
                </h3>
                <p className="text-[11px] text-[#E58B23] uppercase tracking-widest font-semibold">
                  Freshly Baked with Love
                </p>
              </div>
            </div>

            <p className="text-sm text-[#BBA694] leading-relaxed max-w-sm">
              Sandton Bakery brings you a delightful range of freshly baked cakes,
              pastries, wholesome breads, and gourmet confections — crafted with
              the finest ingredients and a whole lot of love.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#381B10] hover:bg-[#C2410C] text-[#E58B23] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#381B10] hover:bg-[#C2410C] text-[#E58B23] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#381B10] hover:bg-[#C2410C] text-[#E58B23] hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#381B10] hover:bg-[#C2410C] text-[#E58B23] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#BBA694]">
              <li>
                <Link href="/" className="hover:text-[#E58B23] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#E58B23] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=cakes"
                  className="hover:text-[#E58B23] transition-colors"
                >
                  Signature Cakes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=pastries"
                  className="hover:text-[#E58B23] transition-colors"
                >
                  Fresh Pastries
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=breads"
                  className="hover:text-[#E58B23] transition-colors"
                >
                  Artisanal Breads
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E58B23] transition-colors">
                  Our Story &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/custom-cake" className="hover:text-[#E58B23] transition-colors">
                  Custom Cakes
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2 text-sm text-[#BBA694]">
              <li>
                <Link href="/account" className="hover:text-[#E58B23] transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-[#E58B23] transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E58B23] transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#E58B23] transition-colors">
                  FAQs &amp; Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-[#BBA694]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E58B23] shrink-0 mt-0.5" />
                <span>
                  35, Ground Floor, 5th Cross, Lakshmi Layout, Marathahalli,
                  Bengaluru - 560037
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E58B23] shrink-0" />
                <a
                  href="tel:+919845050418"
                  className="hover:text-[#E58B23] transition-colors text-[13px]"
                >
                  +91 98450 50418
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E58B23] shrink-0" />
                <a
                  href="mailto:support@sandtonbakery.com"
                  className="hover:text-[#E58B23] transition-colors"
                >
                  support@sandtonbakery.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E58B23] shrink-0" />
                <span>Mon - Sun: 8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9E8978]">
          <p>© 2025 Sandton Bakery. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#E58B23]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#E58B23]">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#E58B23]">
              Cancellation & Refund
            </Link>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-[#BBA694]">We Accept:</span>
            <div className="flex items-center gap-1.5 font-bold text-[11px] tracking-wider bg-[#381B10] px-2.5 py-1 rounded border border-[#522917] text-white">
              <span className="text-blue-400">VISA</span>
              <span className="text-orange-400">•</span>
              <span className="text-emerald-400">UPI</span>
              <span className="text-orange-400">•</span>
              <span className="text-sky-400">Paytm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
