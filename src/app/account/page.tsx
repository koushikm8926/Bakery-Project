"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Package,
  MapPin,
  CreditCard,
  Heart,
  Bell,
  LogOut,
  Edit2,
  CheckCircle2,
  Truck,
  ArrowRight,
  Clock,
  Wheat,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function AccountPage() {
  const { orders, wishlist, toggleWishlist, addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<
    "overview" | "orders" | "addresses" | "payments" | "wishlist" | "profile"
  >("overview");

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="space-y-10 pb-16">
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
                <span className="text-[#2B170B] font-semibold">My Account</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                My Account
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Manage your orders, addresses and account details.
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

      {/* 2. MAIN DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
            {/* User Profile Card */}
            <div className="flex items-center justify-between pb-6 border-b border-[#F0E5D8]">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#3A1407] text-[#FBBF24] font-serif text-xl font-bold flex items-center justify-center shadow-md">
                  SK
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2B170B]">
                    Sai Kumar
                  </h3>
                  <p className="text-xs text-[#8C7A6B]">saikumar@gmail.com</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab("profile")}
                className="p-2 text-[#8C7A6B] hover:text-[#8B1E2D] rounded-full hover:bg-[#FAF5EE]"
                title="Edit profile"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1.5 text-xs font-semibold">
              {[
                { id: "overview", label: "Account Overview", icon: User },
                { id: "orders", label: "My Orders", icon: Package },
                { id: "addresses", label: "Saved Addresses", icon: MapPin },
                { id: "payments", label: "Payment Methods", icon: CreditCard },
                { id: "wishlist", label: "Wishlist", icon: Heart },
                { id: "profile", label: "Profile Details", icon: User },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as typeof activeTab)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-left ${
                      isSelected
                        ? "bg-[#3A1407] text-white shadow-sm font-bold"
                        : "text-[#4A2D1B] hover:bg-[#FAF5EE] hover:text-[#8B1E2D]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <Link
                href="/login"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-700 hover:bg-red-50 transition-colors text-left font-bold pt-4"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </nav>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            {activeTab === "overview" && (
              <>
                {/* Greeting */}
                <div className="bg-[#FAF5EE] rounded-3xl p-6 border border-[#EADBCE]">
                  <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
                    Hello, Sai Kumar! 👋
                  </h2>
                  <p className="text-xs text-[#786558] mt-1">
                    Here&apos;s a quick overview of your freshly baked orders and saved treats.
                  </p>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white rounded-2xl p-4 border border-[#F0E5D8] shadow-xs space-y-1">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#2B170B] block pt-2">
                      {orders.length + 10}
                    </span>
                    <span className="text-[11px] text-[#8C7A6B]">Total Orders</span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#F0E5D8] shadow-xs space-y-1">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#8B1E2D] flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#2B170B] block pt-2">
                      {orders.filter((o) => o.status !== "Delivered").length || 1}
                    </span>
                    <span className="text-[11px] text-[#8C7A6B]">Active Orders</span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#F0E5D8] shadow-xs space-y-1">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#2B170B] block pt-2">
                      {wishlist.length}
                    </span>
                    <span className="text-[11px] text-[#8C7A6B]">Wishlist Items</span>
                  </div>

                  <div className="bg-white rounded-2xl p-4 border border-[#F0E5D8] shadow-xs space-y-1">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#2B170B] block pt-2">2</span>
                    <span className="text-[11px] text-[#8C7A6B]">Saved Addresses</span>
                  </div>
                </div>

                {/* Recent Orders Section */}
                <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                    <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B]">
                      <Package className="w-5 h-5 text-[#D97706]" />
                      <span>Recent Orders</span>
                    </div>
                    <button
                      onClick={() => setActiveTab("orders")}
                      className="text-xs font-bold text-[#8B1E2D] hover:underline flex items-center gap-1"
                    >
                      <span>View All Orders</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {orders.slice(0, 3).map((order) => {
                      const firstProduct = order.items[0]?.product;
                      return (
                        <div
                          key={order.id}
                          className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#F0E5D8] flex flex-col sm:flex-row items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-4 w-full sm:w-auto">
                            <img
                              src={firstProduct?.image || "/images/products/hero-cake.jpg"}
                              alt="Order Item"
                              className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#EADBCE]"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-xs text-[#2B170B]">
                                  Order ID: {order.id}
                                </span>
                              </div>
                              <p className="text-xs text-[#8C7A6B] mt-0.5">
                                {order.items.length} {order.items.length === 1 ? "Item" : "Items"} &bull;{" "}
                                <strong className="text-[#2B170B]">₹{order.total}</strong>
                              </p>
                              <p className="text-[11px] text-[#9E8B7C] flex items-center gap-1 mt-0.5">
                                <Clock className="w-3 h-3" />
                                <span>Placed on {order.date}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                            <span
                              className={`text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                                order.status === "Delivered"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : "bg-blue-50 text-blue-800 border border-blue-200"
                              }`}
                            >
                              {order.status === "Delivered" ? (
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              ) : (
                                <Truck className="w-3.5 h-3.5" />
                              )}
                              <span>{order.status}</span>
                            </span>

                            <button className="text-xs font-bold text-[#3A1407] hover:text-[#8B1E2D] border border-[#EADBCE] bg-white px-3 py-1.5 rounded-xl hover:bg-[#FAF5EE] transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Action Navigation Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    onClick={() => setActiveTab("addresses")}
                    className="p-4 rounded-2xl bg-white border border-[#F0E5D8] hover:border-[#D97706] cursor-pointer transition-all shadow-xs flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#2B170B]">Saved Addresses</h4>
                        <p className="text-[10px] text-[#8C7A6B]">Manage addresses</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C7A6B]" />
                  </div>

                  <div
                    onClick={() => setActiveTab("payments")}
                    className="p-4 rounded-2xl bg-white border border-[#F0E5D8] hover:border-[#D97706] cursor-pointer transition-all shadow-xs flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#2B170B]">Payment Methods</h4>
                        <p className="text-[10px] text-[#8C7A6B]">Saved cards &amp; UPI</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C7A6B]" />
                  </div>

                  <div
                    onClick={() => setActiveTab("wishlist")}
                    className="p-4 rounded-2xl bg-white border border-[#F0E5D8] hover:border-[#D97706] cursor-pointer transition-all shadow-xs flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-[#2B170B]">Wishlist</h4>
                        <p className="text-[10px] text-[#8C7A6B]">Saved treats</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C7A6B]" />
                  </div>
                </div>
              </>
            )}

            {/* WISHLIST TAB */}
            {activeTab === "wishlist" && (
              <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                  <h3 className="font-serif text-lg font-bold text-[#2B170B]">
                    My Wishlist ({wishlistProducts.length})
                  </h3>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-xs font-semibold text-[#8B1E2D]"
                  >
                    Back to Overview
                  </button>
                </div>

                {wishlistProducts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {wishlistProducts.map((p) => (
                      <div
                        key={p.id}
                        className="bg-[#FFFDF9] rounded-2xl border border-[#F0E5D8] p-3 space-y-2 relative"
                      >
                        <div className="aspect-square rounded-xl overflow-hidden bg-[#FAF6EE]">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-serif text-xs font-bold text-[#2B170B] truncate">
                          {p.name}
                        </h4>
                        <p className="text-xs font-bold text-[#8B1E2D]">₹{p.price}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => addToCart(p, 1)}
                            className="flex-1 bg-[#3A1407] text-white text-[10px] font-bold py-1.5 rounded-lg"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            className="px-2 py-1.5 border border-[#EADBCE] text-red-600 rounded-lg text-[10px]"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#8C7A6B] py-8 text-center">
                    No items saved yet. Browse the shop to add items to your wishlist!
                  </p>
                )}
              </div>
            )}

            {/* ORDERS TAB */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                  <h3 className="font-serif text-lg font-bold text-[#2B170B]">
                    All Orders ({orders.length})
                  </h3>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-xs font-semibold text-[#8B1E2D]"
                  >
                    Back to Overview
                  </button>
                </div>

                <div className="space-y-4">
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="p-4 rounded-2xl border border-[#F0E5D8] bg-[#FFFDF9] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#2B170B]">
                          Order ID: {o.id}
                        </span>
                        <span className="text-xs font-bold text-[#8B1E2D]">₹{o.total}</span>
                      </div>
                      <p className="text-xs text-[#5C4535]">Delivery To: {o.address}</p>
                      <p className="text-[11px] text-[#8C7A6B]">
                        Slot: {o.deliveryDate} ({o.deliverySlot}) &bull; Payment: {o.paymentMethod}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADDRESSES TAB */}
            {activeTab === "addresses" && (
              <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                  <h3 className="font-serif text-lg font-bold text-[#2B170B]">
                    Saved Delivery Addresses
                  </h3>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-xs font-semibold text-[#8B1E2D]"
                  >
                    Back to Overview
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-[#E58B23] bg-[#FFFBF5] space-y-2">
                    <span className="text-xs font-bold text-[#2B170B] bg-[#FFF0E0] px-2 py-0.5 rounded">
                      Home (Default)
                    </span>
                    <p className="text-xs text-[#5C4535] leading-relaxed">
                      35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli,
                      Bengaluru - 560037
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-[#F0E5D8] bg-white space-y-2">
                    <span className="text-xs font-bold text-[#2B170B] bg-[#FAF5EE] px-2 py-0.5 rounded">
                      Office
                    </span>
                    <p className="text-xs text-[#5C4535] leading-relaxed">
                      2nd Floor, Prestige Tech Park, Inner Ring Road, Bengaluru - 560103
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PAYMENTS & PROFILE FALLBACK */}
            {(activeTab === "payments" || activeTab === "profile") && (
              <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                  <h3 className="font-serif text-lg font-bold text-[#2B170B] capitalize">
                    {activeTab}
                  </h3>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-xs font-semibold text-[#8B1E2D]"
                  >
                    Back to Overview
                  </button>
                </div>
                <div className="p-4 bg-[#FAF5EE] rounded-2xl text-xs text-[#5C4535] space-y-2">
                  <p>Sai Kumar &bull; saikumar@gmail.com &bull; +91 98450 50418</p>
                  <p className="text-emerald-700 font-semibold">
                    ✓ Verified Customer &bull; 100% Secure Account
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

