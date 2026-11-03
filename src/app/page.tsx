"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  Award,
  Heart,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Send,
  Coffee,
  Cake,
  Cookie,
  Wheat,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { AutoScrollingReviews } from "@/components/home/AutoScrollingReviews";

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 5);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival || p.category === "pastries").slice(0, 5);

  const occasions = [
    { title: "Birthday Cakes", image: "/images/products/hero-cake.jpg", link: "/shop?category=cakes" },
    { title: "Tea-Time Treats", image: "/images/products/croissants.jpg", link: "/shop?category=pastries" },
    { title: "Celebration Desserts", image: "/images/products/strawberry-cake.jpg", link: "/shop?category=cakes" },
    { title: "Cookies & Snacks", image: "/images/products/choc-chip-cookies.jpg", link: "/shop?category=cookies" },
    { title: "Breakfast Bakes", image: "/images/products/chocolate-croissant.jpg", link: "/shop?category=pastries" },
    { title: "Premium Gift Boxes", image: "/images/products/bakery-gift-box.jpg", link: "/shop?category=bakery-items" },
  ];

  const galleryImages = [
    "/images/products/chocolate-truffle.jpg",
    "/images/products/croissants.jpg",
    "/images/products/macarons.jpg",
    "/images/products/blueberry-muffin.jpg",
    "/images/products/bread-sourdough.jpg",
    "/images/products/coffee-beverage.jpg",
    "/images/products/fruit-pastry.jpg",
  ];

  const testimonials = [
    {
      quote: "The cakes are absolutely delicious and always so fresh! Sandton Bakery is my go-to for every special family occasion.",
      author: "Lerato M.",
      rating: 5,
    },
    {
      quote: "Amazing variety, beautiful presentation, and prompt delivery. Their chocolate croissants and berry tarts are simply irresistible!",
      author: "James K.",
      rating: 5,
    },
    {
      quote: "Consistently high quality and great taste. I order artisanal sourdough and custom cakes regularly — highly recommended!",
      author: "Thandi N.",
      rating: 5,
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#2D1208] via-[#3D1A0D] to-[#250F06] text-white overflow-hidden py-14 md:py-20">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E58B23]/20 border border-[#E58B23]/40 text-[#F5B041] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Handcrafted With Passion
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#FFF8EE]">
                Freshly Baked <br />
                <span className="text-[#FBBF24] italic font-normal">Happiness</span> for Every Occasion
              </h1>

              {/* Heart Flourish */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-px w-12 bg-[#D97706]/60"></div>
                <Heart className="w-4 h-4 text-[#E58B23] fill-[#E58B23]/40" />
                <div className="h-px w-12 bg-[#D97706]/60"></div>
              </div>

              <p className="text-base sm:text-lg text-[#E8DCD0] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Indulgent cakes, irresistible pastries, wholesome breads and more — crafted with
                premium ingredients, care, and a passion for baking.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="bg-[#8B1E2D] hover:bg-[#6E1422] text-white font-semibold text-sm px-7 py-3.5 rounded-full flex items-center gap-2.5 transition-all shadow-lg hover:shadow-red-950/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/shop"
                  className="bg-[#FFFDF9] hover:bg-[#FAF5EE] text-[#3A1407] font-semibold text-sm px-6 py-3.5 rounded-full transition-all border border-[#F0E5D8] hover:shadow-md"
                >
                  Explore Categories
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-80 sm:w-96 lg:w-[440px] aspect-square">
                {/* Golden pedestal glow ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#E58B23]/30 scale-105 animate-pulse"></div>

                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5E2B18] relative group">
                  <img
                    src="/images/products/hero-cake.jpg"
                    alt="Showstopper Chocolate Truffle Cake"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Freshness Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#261006]/90 backdrop-blur-md text-white border border-[#E58B23]/50 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4 text-[#E58B23]" />
                    <div className="text-left">
                      <p className="text-[10px] text-[#D8C7B8] leading-tight">Fresh Today</p>
                      <p className="text-xs font-bold text-[#FBBF24]">Belgian Truffle Cake</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION RIBBON */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#F0E5D8] p-5 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#F3ECE4]">
          <div className="flex items-center gap-3 pt-2 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-[#2B170B]">Freshly Baked Daily</h4>
              <p className="text-[11px] text-[#8C7A6B]">Made fresh, every day</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-[#2B170B]">On-Time Delivery</h4>
              <p className="text-[11px] text-[#8C7A6B]">Freshness at your door</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-[#2B170B]">Hygienic & Safe</h4>
              <p className="text-[11px] text-[#8C7A6B]">Baked with highest care</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-[#2B170B]">Premium Ingredients</h4>
              <p className="text-[11px] text-[#8C7A6B]">Great taste, naturally</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-5 col-span-2 md:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-xs text-[#2B170B]">Wide Variety</h4>
              <p className="text-[11px] text-[#8C7A6B]">Something for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">Shop by Category</h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            Explore our delicious range of bakery delights
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="group flex flex-col items-center bg-white rounded-2xl p-3 border border-[#F0E5D8] hover:border-[#D97706] hover:shadow-lg transition-all text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-[#FAF6EE] mb-3 border-2 border-transparent group-hover:border-[#E58B23] transition-colors">
                <img
                  src={cat.image || "/images/products/hero-cake.jpg"}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-semibold text-xs text-[#2B170B] group-hover:text-[#8B1E2D] transition-colors">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#9E8B7C] mt-0.5">
                {cat.count} items
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. BESTSELLERS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">Bestsellers</h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            Our most loved bakery treats, chosen by our customers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} showBadge="bestseller" />
          ))}
        </div>
      </section>

      {/* 5. FRESH FROM THE OVEN (NEW ARRIVALS) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">Fresh from the Oven</h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            New arrivals and seasonal bakes you&apos;ll love
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} showBadge="new" />
          ))}
        </div>
      </section>

      {/* 6. SPECIAL PROMO BANNER: BAKERY GIFT BOXES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#291106] via-[#3B190B] to-[#250E05] text-white p-8 md:p-12 shadow-2xl border border-[#522513]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Box Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 md:w-80 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D97706]/40">
                <img
                  src="/images/products/bakery-gift-box.jpg"
                  alt="Bakery Gift Box"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#F5B041] bg-[#4E2413] px-3 py-1 rounded-full border border-[#D97706]/30">
                Special Offer
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFF8EE]">
                Bakery Gift Boxes
              </h3>

              <p className="text-sm sm:text-base text-[#D8C7B8] max-w-md">
                A perfect treat for every celebration. Curated assortments of French macarons,
                fresh butter cookies, and artisan confectionery.
              </p>

              <div className="inline-block bg-[#8B1E2D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                Up to 15% Off
              </div>

              <div className="pt-2">
                <Link
                  href="/shop?category=bakery-items"
                  className="inline-flex items-center gap-2 bg-[#FAF6EE] text-[#2B170B] hover:bg-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md hover:gap-3"
                >
                  <span>Shop Gift Boxes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERFECT FOR EVERY OCCASION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">Perfect for Every Occasion</h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            Thoughtfully baked collections for life&apos;s special moments
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map((occ, i) => (
            <Link
              key={i}
              href={occ.link}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F0E5D8] hover:border-[#D97706] hover:shadow-lg transition-all"
            >
              <div className="aspect-square overflow-hidden bg-[#FAF6EE]">
                <img
                  src={occ.image}
                  alt={occ.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="font-semibold text-xs text-[#2B170B] group-hover:text-[#8B1E2D] transition-colors">
                  {occ.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. THE SANDTON BAKERY STORY */}
      <section id="story" className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#FAF5EE] rounded-3xl p-8 md:p-12 border border-[#EADBCE]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
                <img
                  src="/images/products/bread-sourdough.jpg"
                  alt="Artisanal Sourdough Bread Loaf"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C2410C]">
                The Sandton Bakery Story
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Bakery Freshness, Craftsmanship <br className="hidden sm:inline" />
                and Warmth Since Day One
              </h3>

              <p className="text-sm text-[#5C4535] leading-relaxed">
                At Sandton Bakery, we believe great baking brings people together. We craft delicious
                cakes, pastries, breads and more using premium ingredients, time-honoured techniques,
                and a genuine love for baking.
              </p>
              <p className="text-sm text-[#5C4535] leading-relaxed">
                Every bite is a promise of freshness, quality, and the comforting warmth of a truly
                local artisan bakery. From slow-fermented sourdough loaves to grand celebration
                chocolate gateaux, we bake happiness into every crumb.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#6E1422] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE SANDTON BAKERY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
            Why Choose Sandton Bakery
          </h2>
          <p className="text-sm text-[#8C7A6B]">
            More than just baked goods — it&apos;s a promise of quality, taste and trust
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "Premium Quality", desc: "Finest ingredients for exceptional taste" },
            { title: "Delicious Taste", desc: "Baked to perfection, always" },
            { title: "Always Fresh", desc: "Baked daily for unmatched freshness" },
            { title: "Reliable Delivery", desc: "On-time and carefully handled" },
            { title: "Hygienic & Safe", desc: "High standards at every step" },
            { title: "Customer Trust", desc: "Loved by our growing community" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-[#F0E5D8] text-center space-y-2 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFF6E5] text-[#D97706] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-xs text-[#2B170B]">{item.title}</h4>
              <p className="text-[11px] text-[#8C7A6B] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. SPECIAL OFFERS & SEASONAL HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <Wheat className="w-5 h-5 text-[#D97706]" />
            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
              Special Offers & Seasonal Highlights
            </h2>
            <Wheat className="w-5 h-5 text-[#D97706] scale-x-[-1]" />
          </div>
          <p className="text-sm text-[#8C7A6B]">
            Limited-time treats and festive favourites, freshly baked for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FAF5EE] rounded-2xl p-6 border border-[#EADBCE] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF0E0] px-2 py-0.5 rounded">
                Seasonal
              </span>
              <h4 className="font-serif text-lg font-bold text-[#2B170B] mt-2">
                Festive Dessert Collection
              </h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Celebrate the season with our indulgent bakes
              </p>
              <span className="inline-block mt-3 text-xs font-bold text-[#8B1E2D]">
                Up to 20% Off
              </span>
            </div>
            <img
              src="/images/products/chocolate-pastry.jpg"
              alt="Festive Desserts"
              className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF5EE] rounded-2xl p-6 border border-[#EADBCE] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF0E0] px-2 py-0.5 rounded">
                Popular
              </span>
              <h4 className="font-serif text-lg font-bold text-[#2B170B] mt-2">
                Tea-Time Favourites
              </h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                A delightful selection of pastries and treats
              </p>
              <span className="inline-block mt-3 text-xs font-bold text-[#8B1E2D]">
                15% Off
              </span>
            </div>
            <img
              src="/images/products/croissants.jpg"
              alt="Tea-time treats"
              className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF5EE] rounded-2xl p-6 border border-[#EADBCE] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF0E0] px-2 py-0.5 rounded">
                Gifting
              </span>
              <h4 className="font-serif text-lg font-bold text-[#2B170B] mt-2">
                Gift Box Specials
              </h4>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Premium assortments for every occasion
              </p>
              <span className="inline-block mt-3 text-xs font-bold text-[#8B1E2D]">
                From ₹249
              </span>
            </div>
            <img
              src="/images/products/bakery-gift-box.jpg"
              alt="Gift Boxes"
              className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 11. WHAT OUR CUSTOMERS SAY (AUTO-SCROLLING TICKER) */}
      <AutoScrollingReviews />

      {/* 12. A PEEK INTO OUR BAKERY (INSTAGRAM GALLERY) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
            A Peek into Our Bakery
          </h2>
          <p className="text-xs text-[#8C7A6B]">
            Fresh bakes, sweet moments and everyday delights
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="group aspect-square rounded-2xl overflow-hidden border border-[#F0E5D8] shadow-xs relative cursor-pointer"
            >
              <img
                src={src}
                alt="Bakery peek"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. NEWSLETTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#8B1E2D] rounded-3xl p-8 md:p-10 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Stay Updated with Sandton Bakery
              </h3>
              <p className="text-xs sm:text-sm text-[#F9DCDD]">
                Be the first to know about exclusive offers, new arrivals and seasonal treats.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full lg:w-auto max-w-md items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-white text-[#2B170B] text-xs sm:text-sm placeholder-[#9E8B7C] focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
              />
              <button
                type="submit"
                className="bg-[#2D1208] hover:bg-[#1E0B05] text-[#FBBF24] font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>{newsletterSubscribed ? "Subscribed!" : "Subscribe"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
