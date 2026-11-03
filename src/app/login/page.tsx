"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Truck,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useCart();

  const [identifier, setIdentifier] = useState("saikumar@gmail.com");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      showToast("Welcome back, Sai Kumar!");
      router.push("/account");
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0]">
      <div className="max-w-5xl w-full bg-white rounded-3xl border border-[#F0E5D8] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: BRAND STORY & IMAGERY */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#FFF8EE] to-[#FAF2E6] p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F0E5D8]">
          <div className="space-y-6">
            <Logo size="lg" />

            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#2B170B] leading-tight">
                Freshly Baked Happiness, <br />
                <span className="text-[#C2410C]">Delivered to You!</span>
              </h2>
              <div className="w-16 h-1 bg-[#D97706] rounded-full"></div>
            </div>

            {/* Value propositions */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#EADBCE] text-[#D97706] flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2B170B]">Fresh &amp; Premium</h4>
                  <p className="text-[11px] text-[#8C7A6B]">Baked fresh every morning</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#EADBCE] text-[#D97706] flex items-center justify-center shadow-xs">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2B170B]">Fast Delivery</h4>
                  <p className="text-[11px] text-[#8C7A6B]">At your preferred slot</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#EADBCE] text-[#D97706] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#2B170B]">Quality Ingredients</h4>
                  <p className="text-[11px] text-[#8C7A6B]">Always pure &amp; wholesome</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cake Photo */}
          <div className="pt-6">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-16/10">
              <img
                src="/images/products/hero-cake.jpg"
                alt="Sandton Fresh Cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LOGIN FORM */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          {/* Sign In / Sign Up switcher pills */}
          <div className="flex rounded-2xl bg-[#FAF5EE] p-1.5 border border-[#EADBCE] max-w-sm mb-8">
            <div className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[#3A1407] text-white shadow-sm text-center">
              Sign In
            </div>
            <Link
              href="/register"
              className="flex-1 py-2.5 text-xs font-bold rounded-xl text-[#8C7A6B] hover:text-[#2B170B] text-center transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="space-y-6 max-w-md">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B170B]">
                Welcome Back!
              </h3>
              <p className="text-xs text-[#8C7A6B] mt-1">
                Sign in to your Sandton Bakery account to track orders &amp; save treats.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email / Phone Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2B170B] block">
                  Email or Mobile Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter email or mobile number"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] placeholder-[#9E8B7C] focus:outline-none focus:border-[#C2410C]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2B170B] block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] placeholder-[#9E8B7C] focus:outline-none focus:border-[#C2410C]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9E8B7C] hover:text-[#2B170B]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-[#5C4535]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-[#3A1407] rounded"
                  />
                  <span>Remember me</span>
                </label>

                <Link
                  href="/forgot-password"
                  className="font-bold text-[#8B1E2D] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3A1407] hover:bg-[#250D04] disabled:opacity-60 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>{loading ? "Signing In..." : "Sign In"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Divider */}
            <div className="relative flex items-center justify-center py-2">
              <div className="h-px bg-[#EADBCE] w-full"></div>
              <span className="bg-white px-3 text-[11px] text-[#8C7A6B] absolute uppercase tracking-wider">
                or continue with
              </span>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => router.push("/account")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#EADBCE] bg-white hover:bg-[#FAF5EE] text-xs font-semibold text-[#2B170B] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => router.push("/account")}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#EADBCE] bg-white hover:bg-[#FAF5EE] text-xs font-semibold text-[#2B170B] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.88c.65-.8 1.09-1.92.97-3.04-.94.04-2.07.63-2.73 1.42-.58.68-1.09 1.79-.95 2.88 1.05.08 2.06-.46 2.71-1.26z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            {/* Bottom Link */}
            <p className="text-center text-xs text-[#8C7A6B]">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-bold text-[#8B1E2D] hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
