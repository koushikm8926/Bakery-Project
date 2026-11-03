"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Wheat,
  Star,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, showToast } = useCart();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleAddAllToCart = () => {
    savedProducts.forEach((p) => {
      addToCart(p, 1);
    });
    showToast("Added all wishlist items to your cart!");
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
                <span className="text-[#2B170B] font-semibold">Wishlist</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Your Favorite Bakes
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Treats you&apos;ve saved for special days and sweet cravings.
                </p>
              </div>
            </div>

            {savedProducts.length > 0 && (
              <button
                onClick={handleAddAllToCart}
                className="bg-[#3A1407] hover:bg-[#250D04] text-white text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#FBBF24]" />
                <span>Move All to Cart</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. WISHLIST ITEMS GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {savedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {savedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#F0E5D8] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-[#FAF6EE]">
                  <Link href={`/products/${product.slug}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  {/* Remove heart */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-red-600 flex items-center justify-center shadow-md transition-transform hover:scale-110"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {product.isEggless && (
                    <span className="absolute bottom-2 left-2 bg-emerald-50 text-emerald-800 text-[10px] font-medium px-2 py-0.5 rounded border border-emerald-200">
                      Eggless
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-[#D97706] mb-1">
                      <Star className="w-3.5 h-3.5 fill-[#D97706]" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-[#9E8B7C]">({product.reviewsCount})</span>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-sm font-bold text-[#2B170B] group-hover:text-[#8B1E2D] transition-colors truncate">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#8C7A6B] line-clamp-1 mt-0.5">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5EDE3] space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-base font-bold text-[#2B170B]">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#9E8B7C] line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      className="w-full bg-[#8B1E2D] hover:bg-[#6E1422] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E5D8] p-8 max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-red-100" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-[#8C7A6B]">
              Save cakes, pastries, sourdough breads and cookies you love to easily find and order them later.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#6E1422] text-white font-bold text-xs px-6 py-3 rounded-full shadow-md transition-colors"
            >
              <span>Explore Bakery Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>

      {/* 3. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}
