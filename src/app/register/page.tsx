"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";

export default function RegisterPage() {
  const router = useRouter();
  const { showToast } = useCart();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEgglessPref, setIsEgglessPref] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    if (!termsAgreed) {
      setErrorMessage("Please accept the terms & conditions.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    setTimeout(() => {
      setLoading(false);
      showToast(`Welcome to Sandton Bakery, ${fullName || "friend"}!`);
      router.push("/account");
    }, 700);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0]">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-[#F0E5D8] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT BRAND PROMISES */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF8EE] to-[#FAF2E6] p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F0E5D8]">
          <div className="space-y-6">
            <Logo size="lg" />

            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#2B170B] leading-tight">
                Join the <br />
                <span className="text-[#C2410C]">Sandton Bakery</span> Family
              </h2>
              <div className="w-16 h-1 bg-[#D97706] rounded-full"></div>
            </div>

            <p className="text-xs text-[#5C4535] leading-relaxed">
              Unlock members-only bakery treats, earn loyalty rewards, and enjoy lightning-fast 2-hour cake delivery across the city.
            </p>

            {/* Perks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#EADBCE] text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#2B170B]">
                  15% off your very first order (Use code: BAKERY15)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#EADBCE] text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#2B170B]">
                  Priority morning dispatch for birthday celebrations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#EADBCE] text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#2B170B]">
                  Personalized eggless and dietary recommendations
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-16/10">
              <img
                src="/images/products/strawberry-cake.jpg"
                alt="Celebration Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT REGISTRATION FORM */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          {/* Sign In / Sign Up switcher pills */}
          <div className="flex rounded-2xl bg-[#FAF5EE] p-1.5 border border-[#EADBCE] max-w-sm mb-6">
            <Link
              href="/login"
              className="flex-1 py-2.5 text-xs font-bold rounded-xl text-[#8C7A6B] hover:text-[#2B170B] text-center transition-colors"
            >
              Sign In
            </Link>
            <div className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[#3A1407] text-white shadow-sm text-center">
              Sign Up
            </div>
          </div>

          <div className="space-y-5 max-w-md">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B170B]">
                Create Your Account
              </h3>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Enter your details to start ordering freshly baked treats today.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2B170B] block">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sai Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                  />
                </div>
              </div>

              {/* Email & Mobile 2-column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">Mobile *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 50418"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>
              </div>

              {/* Password & Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">Password *</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="At least 6 chars"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-8 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9E8B7C]"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">Confirm *</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Repeat password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>
              </div>

              {/* Dietary preference toggle */}
              <div className="p-3 bg-[#FAF5EE] rounded-xl border border-[#EADBCE] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#2B170B] block">
                    🌱 Prefer 100% Eggless Treats?
                  </span>
                  <span className="text-[10px] text-[#8C7A6B]">
                    We will prioritize pure vegetarian bakery selections
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={isEgglessPref}
                  onChange={(e) => setIsEgglessPref(e.target.checked)}
                  className="accent-emerald-700 w-4 h-4 cursor-pointer"
                />
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-2 cursor-pointer text-[11px] text-[#5C4535] pt-1">
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={(e) => setTermsAgreed(e.target.checked)}
                  className="accent-[#3A1407] rounded mt-0.5"
                />
                <span>
                  I agree to Sandton Bakery&apos;s{" "}
                  <Link href="/contact" className="text-[#8B1E2D] font-bold underline">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/contact" className="text-[#8B1E2D] font-bold underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Create Account CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B1E2D] hover:bg-[#6E1422] disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>{loading ? "Creating Account..." : "Create Account"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Bottom Link */}
            <p className="text-center text-xs text-[#8C7A6B]">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#8B1E2D] hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
