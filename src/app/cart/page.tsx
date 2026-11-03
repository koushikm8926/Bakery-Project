"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  Trash2,
  Lock,
  ArrowLeft,
  ArrowRight,
  Wheat,
  Tag,
  Check,
  Info,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { FeatureStrip } from "@/components/layout/FeatureStrip";

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartSubtotal,
    deliveryCharge,
    discount,
    couponCode,
    applyCoupon,
    removeCoupon,
    totalAmount,
    cartCount,
    addToCart,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponOpen, setCouponOpen] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCoupon) {
      applyCoupon(inputCoupon);
    }
  };

  const recommendations = PRODUCTS.filter((p) => !cart.some((c) => c.product.id === p.id)).slice(0, 4);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. CART HEADER HERO */}
      <section className="bg-gradient-to-r from-[#FAF5EE] via-[#FFF8EE] to-[#FAF5EE] border-b border-[#F0E5D8] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <nav className="text-xs text-[#8C7A6B] flex items-center justify-center md:justify-start gap-2">
                <Link href="/" className="hover:text-[#8B1E2D]">
                  Home
                </Link>
                <span>&gt;</span>
                <span className="text-[#2B170B] font-semibold">Cart</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Your Shopping Cart
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Review your items, update quantities, and proceed to checkout.
                </p>
              </div>
            </div>

            {/* Header Croissant Graphic */}
            <div className="hidden lg:block w-72 h-28 rounded-2xl overflow-hidden shadow-sm border border-[#EADBCE]">
              <img
                src="/images/products/croissants.jpg"
                alt="Fresh Bakes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CART CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: CART ITEMS LIST */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D8]">
                <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B]">
                  <ShoppingBag className="w-5 h-5 text-[#D97706]" />
                  <span>
                    {cartCount} {cartCount === 1 ? "Item" : "Items"} in Your Cart
                  </span>
                </div>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#8C7A6B] hover:text-[#8B1E2D] transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Cart</span>
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#F5EDE3]">
                {cart.map((item) => {
                  let multiplier = 1;
                  if (item.weight === "1kg") multiplier = 1.35;
                  if (item.weight === "2kg") multiplier = 2.4;
                  const itemUnitPrice = Math.round(item.product.price * multiplier);
                  const itemTotalPrice = itemUnitPrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                      {/* Product Thumbnail & Details */}
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#FAF6EE] border border-[#F0E5D8] shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-1">
                          <Link href={`/products/${item.product.slug}`}>
                            <h3 className="font-serif font-bold text-sm text-[#2B170B] hover:text-[#8B1E2D] transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-[#8C7A6B] line-clamp-1">
                            {item.product.shortDescription}
                          </p>
                          <div className="flex items-center gap-2 pt-0.5">
                            {item.isEggless ? (
                              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                🌱 Eggless
                              </span>
                            ) : (
                              <span className="text-[10px] font-semibold text-[#785437] bg-[#FAF5EE] px-2 py-0.5 rounded">
                                With Egg
                              </span>
                            )}
                            {item.weight && (
                              <span className="text-[10px] text-[#8C7A6B] bg-[#F5ECE2] px-2 py-0.5 rounded font-medium">
                                {item.weight}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Unit Price */}
                      <div className="text-center sm:text-right hidden sm:block">
                        <span className="text-sm font-bold text-[#2B170B]">
                          ₹{itemUnitPrice}
                        </span>
                      </div>

                      {/* Stepper Quantity */}
                      <div className="flex items-center border border-[#EADBCE] bg-[#FAF5EE] rounded-xl overflow-hidden shadow-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1.5 text-xs font-bold text-[#5C4535] hover:bg-[#EFE8DD] transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1.5 text-xs font-bold text-[#2B170B] min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1.5 text-xs font-bold text-[#5C4535] hover:bg-[#EFE8DD] transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                        <span className="text-sm font-bold text-[#8B1E2D]">
                          ₹{itemTotalPrice}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#9E8B7C] hover:text-[#8B1E2D] p-1.5 rounded-lg hover:bg-[#FAF5EE] transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
              <h3 className="font-serif text-lg font-bold text-[#2B170B] pb-4 border-b border-[#F0E5D8]">
                Order Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-[#5C4535]">
                  <span>Subtotal ({cartCount} Items)</span>
                  <span className="font-bold text-[#2B170B]">₹{cartSubtotal}</span>
                </div>

                <div className="flex items-center justify-between text-[#5C4535]">
                  <span className="flex items-center gap-1">
                    <span>Delivery Charges</span>
                    <Info className="w-3.5 h-3.5 text-[#9E8B7C]" />
                  </span>
                  <span className="font-bold text-[#2B170B]">
                    {deliveryCharge === 0 ? (
                      <span className="text-emerald-700">FREE</span>
                    ) : (
                      `₹${deliveryCharge}`
                    )}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount ({couponCode})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
              </div>

              {/* Coupon Accordion */}
              <div className="pt-2 border-t border-[#F0E5D8]">
                {couponCode ? (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                    <span className="font-bold text-emerald-800">
                      Coupon &quot;{couponCode}&quot; Applied!
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-red-700 font-semibold hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setCouponOpen(!couponOpen)}
                      className="w-full flex items-center justify-between text-xs font-bold text-[#C2410C] py-1"
                    >
                      <span className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Apply Coupon Code</span>
                      </span>
                      <span>{couponOpen ? "▲" : "▼"}</span>
                    </button>

                    {couponOpen && (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
                        <input
                          type="text"
                          placeholder="Try BAKERY15 or FLAT100"
                          value={inputCoupon}
                          onChange={(e) => setInputCoupon(e.target.value)}
                          className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#FAF5EE] border border-[#EADBCE] uppercase"
                        />
                        <button
                          type="submit"
                          className="bg-[#3A1407] text-white text-xs font-bold px-4 py-2 rounded-xl"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Total Amount */}
              <div className="pt-4 border-t border-[#F0E5D8] space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif font-bold text-base text-[#2B170B]">
                    Total Amount
                  </span>
                  <span className="text-2xl font-bold text-[#8B1E2D]">
                    ₹{totalAmount}
                  </span>
                </div>
                <p className="text-[11px] text-[#8C7A6B]">Inclusive of all taxes</p>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full bg-[#3A1407] hover:bg-[#250D04] text-white font-bold text-sm py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <Lock className="w-4 h-4 text-[#FBBF24]" />
                  <span>Proceed to Checkout &rarr;</span>
                </button>

                <Link
                  href="/shop"
                  className="w-full bg-white hover:bg-[#FAF5EE] text-[#4A2D1B] font-bold text-xs py-3 px-6 rounded-2xl border border-[#EADBCE] flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#F0E5D8] p-8 max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF5EE] text-[#D97706] flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
              Your Cart is Empty
            </h2>
            <p className="text-xs text-[#8C7A6B]">
              Looks like you haven&apos;t added any delicious baked treats yet. Explore our fresh menu to satisfy your cravings!
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#8B1E2D] hover:bg-[#701522] text-white font-bold text-xs px-6 py-3 rounded-full shadow-md transition-colors"
            >
              <span>Explore Bakery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>

      {/* 3. "YOU MAY ALSO LIKE" CAROUSEL */}
      {recommendations.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recommendations.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-[#F0E5D8] overflow-hidden p-3 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#FAF6EE] mb-2">
                  <Link href={`/products/${p.slug}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>
                <div className="space-y-1">
                  <Link href={`/products/${p.slug}`}>
                    <h4 className="font-serif font-bold text-xs text-[#2B170B] truncate hover:text-[#8B1E2D]">
                      {p.name}
                    </h4>
                  </Link>
                  <p className="text-xs font-bold text-[#8B1E2D]">₹{p.price}</p>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="w-full bg-[#FAF5EE] hover:bg-[#3A1407] text-[#2B170B] hover:text-white text-[11px] font-bold py-1.5 rounded-lg border border-[#EADBCE] transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}
