"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  showBadge?: "new" | "bestseller";
}

export function ProductCard({ product, showBadge }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isFavorite = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-2xl border border-[#F0E5D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Product Image & Badges */}
      <div className="relative aspect-square overflow-hidden bg-[#FAF6EE]">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badge */}
        {showBadge === "new" || product.isNewArrival ? (
          <span className="absolute top-3 left-3 bg-[#8B1E2D] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
            New
          </span>
        ) : showBadge === "bestseller" || product.isBestseller ? (
          <span className="absolute top-3 left-3 bg-[#E58B23] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
            Bestseller
          </span>
        ) : null}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#8B1E2D] flex items-center justify-center shadow-md transition-transform hover:scale-110"
          aria-label="Wishlist"
        >
          <Heart
            className={`w-4 h-4 ${isFavorite ? "fill-[#8B1E2D] text-[#8B1E2D]" : "text-[#786558]"}`}
          />
        </button>

        {/* Eggless badge */}
        {product.isEggless && (
          <span className="absolute bottom-2 left-2 bg-emerald-50/90 text-emerald-800 text-[10px] font-medium px-2 py-0.5 rounded border border-emerald-200 backdrop-blur-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Eggless
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-[12px] text-[#D97706] mb-1">
            <Star className="w-3.5 h-3.5 fill-[#D97706]" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-[#9E8B7C]">({product.reviewsCount})</span>
          </div>

          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-[15px] font-bold text-[#2B170B] group-hover:text-[#8B1E2D] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-[#8C7A6B] line-clamp-1 mt-0.5">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-[#F5EDE3] flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-[#2B170B]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#9E8B7C] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.weightOptions && (
              <span className="text-[11px] text-[#8C7A6B] bg-[#FAF5EE] px-1.5 py-0.5 rounded">
                From {product.weightOptions[0]}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="w-full bg-[#8B1E2D] hover:bg-[#701522] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
