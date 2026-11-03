"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Clock,
  CreditCard,
  Building,
  Wallet,
  Smartphone,
  Lock,
  Plus,
  Edit2,
  Check,
  CheckCircle2,
  Wheat,
  X,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useCart, Order } from "@/context/CartContext";
import { FeatureStrip } from "@/components/layout/FeatureStrip";
import {
  GPayBadge,
  PhonePeBadge,
  PaytmBadge,
  VisaBadge,
  MastercardBadge,
  RuPayBadge,
  AmazonPayBadge,
  MobiKwikBadge,
} from "@/components/ui/BrandIcons";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartSubtotal, deliveryCharge, discount, totalAmount, cartCount, placeOrder } =
    useCart();

  // Address selection
  const [selectedAddress, setSelectedAddress] = useState<"home" | "office">("home");

  // Delivery Date & Slot
  const [deliveryDate, setDeliveryDate] = useState("Today, Oct 31");
  const [deliverySlot, setDeliverySlot] = useState("10:00 AM - 12:00 PM");

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "wallet">(
    "upi"
  );

  // Success modal state
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  const dates = [
    { label: "Today", date: "Oct 31" },
    { label: "Tomorrow", date: "Nov 01" },
    { label: "Sun", date: "Nov 02" },
    { label: "Mon", date: "Nov 03" },
    { label: "Tue", date: "Nov 04" },
  ];

  const timeSlots = [
    "10:00 AM - 12:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
  ];

  const handlePlaceOrder = () => {
    const addressStr =
      selectedAddress === "home"
        ? "35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli, Bengaluru - 560037"
        : "2nd Floor, Prestige Tech Park, Inner Ring Road, Bengaluru - 560103";

    const paymentStr =
      paymentMethod === "upi"
        ? "UPI (Google Pay, PhonePe, Paytm)"
        : paymentMethod === "card"
        ? "Credit / Debit Card (Visa / Mastercard)"
        : paymentMethod === "netbanking"
        ? "Net Banking"
        : "Mobile Wallet";

    const order = placeOrder({
      address: addressStr,
      deliveryDate,
      deliverySlot,
      paymentMethod: paymentStr,
    });

    setPlacedOrder(order);
  };

  return (
    <div className="space-y-12 pb-16 relative">
      {/* 1. CHECKOUT HEADER HERO */}
      <section className="bg-gradient-to-r from-[#FAF5EE] via-[#FFF8EE] to-[#FAF5EE] border-b border-[#F0E5D8] py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <nav className="text-xs text-[#8C7A6B] flex items-center justify-center md:justify-start gap-2">
                <Link href="/" className="hover:text-[#8B1E2D]">
                  Home
                </Link>
                <span>&gt;</span>
                <Link href="/cart" className="hover:text-[#8B1E2D]">
                  Cart
                </Link>
                <span>&gt;</span>
                <span className="text-[#2B170B] font-semibold">Checkout</span>
              </nav>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B]">
                Checkout
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Wheat className="w-4 h-4 text-[#D97706]" />
                <p className="text-xs sm:text-sm text-[#786558]">
                  Complete your order in a few simple steps.
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

      {/* 2. STEPPER PROGRESS BAR */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-[#EADBCE] -z-0"></div>

          {[
            { id: "cart", label: "Cart", icon: ShoppingBag, completed: true },
            { id: "address", label: "Address", icon: MapPin, completed: true, active: true },
            { id: "delivery", label: "Delivery", icon: Calendar, completed: false },
            { id: "payment", label: "Payment", icon: CreditCard, completed: false },
            { id: "review", label: "Review", icon: CheckCircle2, completed: false },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-1.5 z-10 bg-[#FFFDF9] px-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    step.active
                      ? "bg-[#3A1407] text-white ring-4 ring-[#3A1407]/20 shadow-md"
                      : step.completed
                      ? "bg-[#E58B23] text-white"
                      : "bg-[#FAF5EE] text-[#9E8B7C] border border-[#EADBCE]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span
                  className={`text-[11px] font-semibold ${
                    step.active
                      ? "text-[#3A1407] font-bold"
                      : step.completed
                      ? "text-[#C2410C]"
                      : "text-[#9E8B7C]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MAIN CHECKOUT FORM & SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: ADDRESS, SLOTS & PAYMENT */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. DELIVERY ADDRESS */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0E5D8]">
                <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B]">
                  <MapPin className="w-5 h-5 text-[#D97706]" />
                  <span>Delivery Address</span>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-[#8B1E2D] hover:underline">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Address</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Home Address */}
                <div
                  onClick={() => setSelectedAddress("home")}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedAddress === "home"
                      ? "border-[#D97706] bg-[#FFF8EE] shadow-sm"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#2B170B]">
                      <input
                        type="radio"
                        name="addressRadio"
                        checked={selectedAddress === "home"}
                        onChange={() => setSelectedAddress("home")}
                        className="accent-[#D97706]"
                      />
                      <span>Home</span>
                    </div>
                    <button className="text-[11px] font-semibold text-[#8C7A6B] hover:text-[#8B1E2D] flex items-center gap-1">
                      <Edit2 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#5C4535] mt-2 leading-relaxed">
                    35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli,
                    Bengaluru – 560037
                  </p>
                </div>

                {/* Office Address */}
                <div
                  onClick={() => setSelectedAddress("office")}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedAddress === "office"
                      ? "border-[#D97706] bg-[#FFF8EE] shadow-sm"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 font-bold text-xs text-[#2B170B]">
                      <input
                        type="radio"
                        name="addressRadio"
                        checked={selectedAddress === "office"}
                        onChange={() => setSelectedAddress("office")}
                        className="accent-[#D97706]"
                      />
                      <span>Office</span>
                    </div>
                    <button className="text-[11px] font-semibold text-[#8C7A6B] hover:text-[#8B1E2D] flex items-center gap-1">
                      <Edit2 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#5C4535] mt-2 leading-relaxed">
                    2nd Floor, Prestige Tech Park, Inner Ring Road, Bengaluru – 560103
                  </p>
                </div>
              </div>
            </div>

            {/* 2. DELIVERY DATE & TIME */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B] pb-3 border-b border-[#F0E5D8]">
                <Calendar className="w-5 h-5 text-[#D97706]" />
                <span>Delivery Date &amp; Time</span>
              </div>

              {/* Date selection pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#2B170B] uppercase tracking-wider block">
                  Select Delivery Day
                </label>
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                  {dates.map((d, i) => {
                    const fullDate = `${d.label}, ${d.date}`;
                    const isSelected = deliveryDate === fullDate;
                    return (
                      <button
                        key={i}
                        onClick={() => setDeliveryDate(fullDate)}
                        className={`px-4 py-2.5 rounded-2xl border text-center min-w-[5rem] transition-all ${
                          isSelected
                            ? "bg-[#3A1407] text-white border-[#3A1407] shadow-sm scale-102"
                            : "bg-[#FAF5EE] text-[#4A2D1B] border-[#EADBCE] hover:bg-white"
                        }`}
                      >
                        <span className="block text-[11px] font-bold">{d.label}</span>
                        <span className="block text-[10px] opacity-80">{d.date}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot selection */}
              <div className="space-y-2 pt-2 border-t border-[#F5EDE3]">
                <label className="text-xs font-bold text-[#2B170B] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Select Delivery Slot</span>
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {timeSlots.map((slot) => {
                    const isSelected = deliverySlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setDeliverySlot(slot)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? "bg-[#D97706] text-white border-[#D97706] shadow-sm"
                            : "bg-white text-[#4A2D1B] border-[#EADBCE] hover:bg-[#FAF5EE]"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. PAYMENT METHOD */}
            <div className="bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-4">
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-[#2B170B] pb-3 border-b border-[#F0E5D8]">
                <CreditCard className="w-5 h-5 text-[#D97706]" />
                <span>Payment Method</span>
              </div>

              <div className="space-y-3">
                {/* UPI */}
                <label
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "upi"
                      ? "border-[#D97706] bg-[#FFF8EE]"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentRadio"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="accent-[#D97706]"
                    />
                    <Smartphone className="w-5 h-5 text-[#C2410C]" />
                    <div>
                      <h4 className="font-bold text-xs text-[#2B170B]">Instant UPI</h4>
                      <p className="text-[11px] text-[#8C7A6B]">
                        Google Pay, PhonePe, Paytm and any UPI app
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GPayBadge />
                    <PhonePeBadge />
                    <PaytmBadge />
                  </div>
                </label>

                {/* Cards */}
                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-[#D97706] bg-[#FFF8EE]"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentRadio"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-[#D97706]"
                    />
                    <CreditCard className="w-5 h-5 text-[#C2410C]" />
                    <div>
                      <h4 className="font-bold text-xs text-[#2B170B]">Credit / Debit Card</h4>
                      <p className="text-[11px] text-[#8C7A6B]">Visa, Mastercard, RuPay, Amex</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white px-2.5 py-1 rounded border border-[#EADBCE]">
                    <VisaBadge />
                    <MastercardBadge />
                    <RuPayBadge />
                  </div>
                </label>

                {/* Net Banking */}
                <label
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "netbanking"
                      ? "border-[#D97706] bg-[#FFF8EE]"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentRadio"
                      checked={paymentMethod === "netbanking"}
                      onChange={() => setPaymentMethod("netbanking")}
                      className="accent-[#D97706]"
                    />
                    <Building className="w-5 h-5 text-[#C2410C]" />
                    <div>
                      <h4 className="font-bold text-xs text-[#2B170B]">Net Banking</h4>
                      <p className="text-[11px] text-[#8C7A6B]">All major banks supported</p>
                    </div>
                  </div>
                </label>

                {/* Wallets */}
                <label
                  onClick={() => setPaymentMethod("wallet")}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === "wallet"
                      ? "border-[#D97706] bg-[#FFF8EE]"
                      : "border-[#F0E5D8] hover:border-[#EADBCE] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentRadio"
                      checked={paymentMethod === "wallet"}
                      onChange={() => setPaymentMethod("wallet")}
                      className="accent-[#D97706]"
                    />
                    <Wallet className="w-5 h-5 text-[#C2410C]" />
                    <div>
                      <h4 className="font-bold text-xs text-[#2B170B]">Wallets</h4>
                      <p className="text-[11px] text-[#8C7A6B]">Amazon Pay, Mobikwik &amp; more</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded border border-[#EADBCE]">
                    <AmazonPayBadge />
                    <span>&bull;</span>
                    <MobiKwikBadge />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT: ORDER SUMMARY & PLACE ORDER BUTTON */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#F0E5D8] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E5D8]">
              <h3 className="font-serif text-lg font-bold text-[#2B170B]">Order Summary</h3>
              <span className="text-xs font-bold text-[#8C7A6B]">{cartCount} Items</span>
            </div>

            {/* Selected Items Previews */}
            <div className="space-y-3 divide-y divide-[#F5EDE3] max-h-64 overflow-y-auto pr-1">
              {cart.map((item) => {
                let multiplier = 1;
                if (item.weight === "1kg") multiplier = 1.35;
                if (item.weight === "2kg") multiplier = 2.4;
                const unitPrice = Math.round(item.product.price * multiplier);

                return (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#EADBCE]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#2B170B] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[10px] text-[#8C7A6B]">
                        {item.weight || "500g"} &bull; {item.isEggless ? "Eggless" : "With Egg"} &bull; Qty {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#2B170B]">
                      ₹{unitPrice * item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 text-xs pt-4 border-t border-[#F0E5D8]">
              <div className="flex items-center justify-between text-[#5C4535]">
                <span>Subtotal</span>
                <span className="font-bold text-[#2B170B]">₹{cartSubtotal}</span>
              </div>
              <div className="flex items-center justify-between text-[#5C4535]">
                <span>Delivery Charges</span>
                <span className="font-bold text-[#2B170B]">
                  {deliveryCharge === 0 ? <span className="text-emerald-700">FREE</span> : `₹${deliveryCharge}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex items-center justify-between text-emerald-700 font-bold">
                  <span>Coupon Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-[#F0E5D8] space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="font-serif font-bold text-base text-[#2B170B]">Total Amount</span>
                <span className="text-2xl font-bold text-[#8B1E2D]">₹{totalAmount}</span>
              </div>
              <p className="text-[11px] text-[#8C7A6B]">Inclusive of all taxes</p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
              className="w-full bg-[#3A1407] hover:bg-[#250D04] disabled:opacity-50 text-white font-bold text-sm py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98"
            >
              <Lock className="w-4 h-4 text-[#FBBF24]" />
              <span>Place Order &amp; Pay ₹{totalAmount} &rarr;</span>
            </button>

            {/* Security Promise */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-[#8C7A6B] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Secure Payments &bull; SSL Encrypted</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ORDER SUCCESS POPUP MODAL */}
      {placedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full text-center relative shadow-2xl border border-[#F0E5D8] animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setPlacedOrder(null)}
              className="absolute top-4 right-4 p-2 text-[#8C7A6B] hover:text-[#2B170B] rounded-full hover:bg-[#FAF5EE]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Illustrative Bag Graphic */}
            <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#FFF6E5] border-2 border-[#E58B23] flex flex-col items-center justify-center shadow-lg relative">
                <ShoppingBag className="w-12 h-12 text-[#D97706]" />
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-md border-2 border-white">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
              Order Placed Successfully!
            </h2>

            <p className="text-xs sm:text-sm text-[#5C4535] mt-2 max-w-sm mx-auto leading-relaxed">
              Thank you for your order with <strong className="text-[#2B170B]">Sandton Bakery</strong>.
              Your oven-fresh treats are received and will be prepared with care.
            </p>

            {/* Order ID Box */}
            <div className="my-6 p-4 rounded-2xl bg-[#FFFBF5] border border-[#FDE68A] inline-block">
              <span className="text-[11px] uppercase tracking-wider text-[#9E8B7C] block font-bold">
                Order ID
              </span>
              <span className="font-serif text-2xl font-bold text-[#8B1E2D]">
                {placedOrder.id}
              </span>
              <span className="text-[11px] text-[#5C4535] block mt-1">
                Estimated Delivery: {placedOrder.deliveryDate} ({placedOrder.deliverySlot})
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/shop"
                onClick={() => setPlacedOrder(null)}
                className="w-full sm:w-auto bg-[#3A1407] hover:bg-[#250D04] text-white text-xs font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping</span>
              </Link>

              <Link
                href="/account"
                onClick={() => setPlacedOrder(null)}
                className="w-full sm:w-auto bg-white hover:bg-[#FAF5EE] text-[#4A2D1B] border border-[#EADBCE] text-xs font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 5. FEATURE STRIP */}
      <FeatureStrip />
    </div>
  );
}

