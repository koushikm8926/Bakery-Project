"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  ChevronDown,
  Wheat,
  SlidersHorizontal,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export function ShopCatalogView() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const queryParam = searchParams.get("q") || "";

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [stockFilter, setStockFilter] = useState<"all" | "inStock">("all");
  const [eggFilter, setEggFilter] = useState<"all" | "eggless" | "egg">("all");
  const [sortBy, setSortBy] = useState<"popular" | "priceLow" | "priceHigh" | "rating">("popular");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category param if url changes
  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (
        queryParam &&
        !item.name.toLowerCase().includes(queryParam.toLowerCase()) &&
        !item.category.toLowerCase().includes(queryParam.toLowerCase())
      ) {
        return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      // Stock filter
      if (stockFilter === "inStock" && !item.inStock) {
        return false;
      }
      // Egg preference
      if (eggFilter === "eggless" && !item.isEggless) {
        return false;
      }
      if (eggFilter === "egg" && item.isEggless) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // Default: popular
      return b.reviewsCount - a.reviewsCount;
    });
  }, [selectedCategory, queryParam, maxPrice, stockFilter, eggFilter, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setMaxPrice(1500);
    setStockFilter("all");
    setEggFilter("all");
    setSortBy("popular");
  };

  return (
    <div className="space-y-10 pb-16">
      {/* 1. SHOP HEADER HERO BANNER */}
      <section className="bg-gradient-to-r from-[#FAF5EE] via-[#FFF8EE] to-[#FAF5EE] border-b border-[#F0E5D8] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <nav className="text-xs text-[#8C7A6B] flex items-center justify-center md:justify-start gap-2">
                <Link href="/" className="hover:text-[#8B1E2D]">
                  Home
                </Link>
                <span>&gt;</span>
                <span className="text-[#2B170B] font-semibold">Shop</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B170B]">
                Shop All Products
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Explore our complete range of freshly baked delights, crafted with quality ingredients.
                </p>
              </div>
            </div>

            {/* Banner Cake Feature */}
            <div className="hidden lg:flex items-center gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-[#EADBCE] shadow-sm">
              <img
                src="/images/products/hero-cake.jpg"
                alt="Sandton Fresh Cake"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="text-left pr-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2410C]">
                  Fresh Special
                </span>
                <h4 className="font-serif text-sm font-bold text-[#2B170B]">
                  Chocolate Truffle Cake
                </h4>
                <p className="text-xs text-[#8B1E2D] font-bold">From ₹699</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SELECTOR CAROUSEL / PILLS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-xs font-bold transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#3A1407] text-white border-[#3A1407] shadow-md scale-102"
                    : "bg-white text-[#4A2D1B] border-[#F0E5D8] hover:border-[#D97706] hover:bg-[#FAF6EE]"
                }`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#D97706]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. MAIN CATALOG WITH SIDEBAR FILTERS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* DESKTOP SIDEBAR FILTERS */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D8]">
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B]">
                <SlidersHorizontal className="w-4 h-4 text-[#D97706]" />
                <span>Filters</span>
              </div>
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-[#8B1E2D] hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#2B170B] uppercase tracking-wider flex items-center justify-between">
                <span>Category</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </h4>
              <div className="space-y-2 text-xs">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between cursor-pointer py-1 hover:text-[#8B1E2D]"
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="radio"
                        name="sidebar-cat"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[#8B1E2D] w-3.5 h-3.5"
                      />
                      <span
                        className={
                          selectedCategory === cat.id ? "font-bold text-[#8B1E2D]" : "text-[#4A2D1B]"
                        }
                      >
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#9E8B7C]">({cat.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-3 pt-4 border-t border-[#F0E5D8]">
              <h4 className="text-xs font-bold text-[#2B170B] uppercase tracking-wider flex items-center justify-between">
                <span>Price Range</span>
                <span className="text-[#8B1E2D] font-bold">₹0 - ₹{maxPrice}</span>
              </h4>
              <input
                type="range"
                min={100}
                max={1500}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#8B1E2D] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] text-[#8C7A6B]">
                <span>₹100</span>
                <span>₹1,500</span>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-3 pt-4 border-t border-[#F0E5D8]">
              <h4 className="text-xs font-bold text-[#2B170B] uppercase tracking-wider">
                Availability
              </h4>
              <div className="space-y-2 text-xs">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="stock"
                      checked={stockFilter === "all"}
                      onChange={() => setStockFilter("all")}
                      className="accent-[#8B1E2D]"
                    />
                    <span>All Products</span>
                  </div>
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="stock"
                      checked={stockFilter === "inStock"}
                      onChange={() => setStockFilter("inStock")}
                      className="accent-[#8B1E2D]"
                    />
                    <span>In Stock</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    Ready
                  </span>
                </label>
              </div>
            </div>

            {/* Egg Preference */}
            <div className="space-y-3 pt-4 border-t border-[#F0E5D8]">
              <h4 className="text-xs font-bold text-[#2B170B] uppercase tracking-wider">
                Dietary Preference
              </h4>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="eggSidebar"
                    checked={eggFilter === "all"}
                    onChange={() => setEggFilter("all")}
                    className="accent-[#8B1E2D]"
                  />
                  <span>All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-emerald-800 font-medium">
                  <input
                    type="radio"
                    name="eggSidebar"
                    checked={eggFilter === "eggless"}
                    onChange={() => setEggFilter("eggless")}
                    className="accent-emerald-600"
                  />
                  <span>Eggless (100% Veg)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="eggSidebar"
                    checked={eggFilter === "egg"}
                    onChange={() => setEggFilter("egg")}
                    className="accent-[#8B1E2D]"
                  />
                  <span>Contains Egg</span>
                </label>
              </div>
            </div>

            {/* Promo Card in Sidebar */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF6E5] to-[#FAF0DD] border border-[#FDE68A] space-y-2 text-center">
              <h5 className="font-serif font-bold text-sm text-[#2B170B]">
                Fresh Bakes Everyday
              </h5>
              <p className="text-[11px] text-[#785437]">
                Soft, crunchy and irresistibly delicious crafted fresh daily.
              </p>
              <img
                src="/images/products/choc-chip-cookies.jpg"
                alt="Cookies"
                className="w-20 h-20 rounded-full mx-auto object-cover my-2 shadow-xs"
              />
              <button
                onClick={() => setSelectedCategory("cookies")}
                className="w-full bg-[#D97706] hover:bg-[#B45309] text-white text-[11px] font-bold py-1.5 rounded-lg transition-colors"
              >
                Explore Cookies &rarr;
              </button>
            </div>
          </aside>

          {/* MAIN PRODUCT GRID & CONTROLS */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#F0E5D8]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden flex items-center gap-2 bg-[#FAF5EE] text-[#2B170B] px-3 py-1.5 rounded-xl text-xs font-bold border border-[#EADBCE]"
                >
                  <Filter className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Filters</span>
                </button>

                <p className="text-xs text-[#8C7A6B]">
                  Showing <span className="font-bold text-[#2B170B]">{filteredProducts.length}</span>{" "}
                  delicious items
                </p>
              </div>

              {/* Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8C7A6B] hidden sm:inline">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-[#FAF5EE] border border-[#EADBCE] text-xs font-semibold text-[#2B170B] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#C2410C]"
                >
                  <option value="popular">Most Popular</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters Modal */}
            {mobileFilterOpen && (
              <div className="lg:hidden bg-white p-5 rounded-2xl border border-[#EADBCE] shadow-lg space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-[#2B170B]">Filters</h4>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-4 h-4 text-[#8C7A6B]" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCategory(c.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`p-2 rounded-lg text-left ${
                        selectedCategory === c.id
                          ? "bg-[#3A1407] text-white font-bold"
                          : "bg-[#FAF5EE] text-[#4A2D1B]"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E5D8] p-8 space-y-4">
                <p className="text-lg font-serif text-[#2B170B]">No baked delights found</p>
                <p className="text-xs text-[#8C7A6B]">
                  Try adjusting your filters or price slider to discover other treats.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#8B1E2D] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? "bg-[#3A1407] text-white shadow-sm"
                        : "bg-white text-[#4A2D1B] border border-[#EADBCE] hover:bg-[#FAF5EE]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. FEATURE STRIP */}
      <FeatureStrip />

      {/* 5. WEEKEND BAKERY SPECIALS BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FAF0E1] via-[#FFF6E9] to-[#F5E6D0] border border-[#E8D0B3] p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C2410C] bg-[#FFF0E0] px-3 py-1 rounded-full border border-[#E58B23]/30">
                Limited Time
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#2B170B]">
                Weekend Bakery Specials
              </h3>
              <p className="text-sm text-[#785437] max-w-md">
                Discover handpicked treats and exclusive oven-fresh offers, available only this weekend!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setMaxPrice(500);
                  }}
                  className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#701522] text-white text-xs font-bold px-6 py-3 rounded-full shadow-md transition-colors"
                >
                  <span>View Offers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Croissants with 20% OFF sticker */}
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/images/products/croissants.jpg"
                  alt="Weekend Croissants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-[#8B1E2D] text-white flex flex-col items-center justify-center shadow-lg border-2 border-white transform rotate-12">
                <span className="text-[9px] uppercase font-bold tracking-tight">Up to</span>
                <span className="text-sm font-black leading-none">20%</span>
                <span className="text-[8px] uppercase tracking-wider">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
