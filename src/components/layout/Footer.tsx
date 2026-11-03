import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  WhatsAppIcon,
  PaymentBadgesPill,
} from "@/components/ui/BrandIcons";

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

            {/* Colorful Official Social Icons */}
            <div className="flex items-center gap-3.5 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-10 h-10" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-10 h-10" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-10 h-10" />
              </a>
              <a
                href="https://wa.me/919845050418"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-10 h-10" />
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

          {/* Official Colorful Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-[#BBA694]">We Accept:</span>
            <PaymentBadgesPill />
          </div>
        </div>
      </div>
    </footer>
  );
}
