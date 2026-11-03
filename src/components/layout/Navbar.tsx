"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount, wishlist } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchFocused(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Cakes", href: "/shop?category=cakes" },
    { name: "Pastries", href: "/shop?category=pastries" },
    { name: "Custom Cakes", href: "/custom-cake" },
    { name: "Track Order", href: "/track-order" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F0E5D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo size="md" />

        {/* Search Bar - Center */}
        <div className="relative flex-1 max-w-xl hidden md:block mx-2">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search for cakes, pastries, cookies, breads and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
              className="w-full pl-4 pr-12 py-2 text-[13px] rounded-full bg-[#FAF5EE] border border-[#E8DCD0] focus:outline-none focus:border-[#C2410C] focus:bg-white text-[#2B170B] placeholder-[#9E8B7C] transition-all shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Search Suggestions Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-12 left-0 right-0 bg-white border border-[#E8DCD0] rounded-xl shadow-xl overflow-hidden z-50">
              <div className="p-2 text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-wider bg-[#FBF7F0] border-b border-[#E8DCD0]">
                Suggested Treats
              </div>
              {searchResults.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="flex items-center gap-3 p-2.5 hover:bg-[#FFF8EE] transition-colors border-b border-gray-50 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-lg border border-[#E8DCD0]"
                  />
                  <div className="flex-1">
                    <p className="text-[13px] font-medium text-[#2B170B]">{item.name}</p>
                    <p className="text-[11px] text-[#8C7A6B] capitalize">{item.category}</p>
                  </div>
                  <span className="text-[13px] font-bold text-[#8B1E2D]">
                    ₹{item.price}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-4 text-[#3A1407]">
          {/* Mobile search toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#FAF5EE]"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Account */}
          <Link
            href="/account"
            className="flex items-center gap-1.5 p-2 rounded-full hover:bg-[#FAF5EE] hover:text-[#C2410C] transition-colors"
            title="My Account"
          >
            <User className="w-5 h-5" />
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="relative p-2 rounded-full hover:bg-[#FAF5EE] hover:text-[#C2410C] transition-colors"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute 1 top-0 right-0 w-4 h-4 bg-[#8B1E2D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-1 p-2 rounded-full hover:bg-[#FAF5EE] text-[#3A1407] hover:text-[#8B1E2D] transition-colors"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#8B1E2D] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#3A1407] hover:bg-[#FAF5EE] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar (Desktop) */}
      <nav className="hidden md:block bg-[#FAF6EE] border-t border-[#F0E5D8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-8 py-2.5">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("?")[0]) && link.href !== "/";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-colors relative py-0.5 ${
                  isActive
                    ? "text-[#8B1E2D] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8B1E2D]"
                    : "text-[#4A2D1B] hover:text-[#C2410C]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-t border-[#F0E5D8] px-4 py-4 space-y-3 animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search bakery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-10 py-2 text-sm rounded-lg bg-[#FAF5EE] border border-[#E8DCD0] text-[#2B170B]"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#D97706] text-white rounded-md"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#4A2D1B] hover:bg-[#FAF5EE] rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

