"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  KeyRound,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/context/CartContext";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { showToast } = useCart();

  const [step, setStep] = useState<"request" | "verify" | "success">("request");
  const [emailOrPhone, setEmailOrPhone] = useState("saikumar@gmail.com");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      setStep("verify");
      showToast(`Verification code sent to ${emailOrPhone}!`);
    }, 700);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);

      // Auto-focus next input
      if (val && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length < 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      setStep("success");
      showToast("Password reset successfully!");
    }, 700);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0]">
      <div className="max-w-4xl w-full bg-white rounded-3xl border border-[#F0E5D8] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* LEFT COLUMN: BRAND AMBIANCE */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#FFF8EE] to-[#FAF2E6] p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#F0E5D8]">
          <div className="space-y-6">
            <Logo size="md" />

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2410C] bg-[#FFF0E0] px-2.5 py-1 rounded-full border border-[#E58B23]/30">
                Account Security
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B170B]">
                Trouble Signing In?
              </h2>
              <div className="w-12 h-1 bg-[#D97706] rounded-full"></div>
            </div>

            <p className="text-xs text-[#5C4535] leading-relaxed">
              Don&apos;t worry! It happens to the best of us. We&apos;ll help you safely reset your password and get you back to enjoying freshly baked goodies.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B170B]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Instant OTP Protection</span>
              </div>
              <p className="text-[11px] text-[#8C7A6B]">
                A secure 6-digit code will be dispatched to your registered contact.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: STEPPED FLOW */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          {step === "request" && (
            <div className="space-y-6 max-w-md">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF6E5] text-[#D97706] flex items-center justify-center mb-3">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2B170B]">
                  Reset Your Password
                </h3>
                <p className="text-xs text-[#8C7A6B] mt-1">
                  Enter your registered email address or mobile number to receive a verification code.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleRequestOtp} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. saikumar@gmail.com"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#3A1407] hover:bg-[#250D04] disabled:opacity-60 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>{loading ? "Sending Code..." : "Send Verification Code"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === "verify" && (
            <div className="space-y-6 max-w-md">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97706]">
                  Step 2 of 2
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B170B] mt-1">
                  Verify &amp; Set New Password
                </h3>
                <p className="text-xs text-[#8C7A6B] mt-1">
                  Enter the 6-digit code sent to <strong className="text-[#2B170B]">{emailOrPhone}</strong>.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleResetPassword} className="space-y-4">
                {/* 6 Digit Inputs */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    6-Digit Verification Code
                  </label>
                  <div className="flex items-center gap-2">
                    {otp.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-11 h-12 text-center font-bold text-base rounded-xl bg-[#FAF5EE] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#8B1E2D] focus:bg-white"
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOtp(["4", "8", "2", "9", "1", "0"]);
                      showToast("Sample OTP filled: 482910");
                    }}
                    className="text-[10px] text-[#C2410C] font-semibold hover:underline block pt-1"
                  >
                    Auto-fill demo code (482910)
                  </button>
                </div>

                {/* New Password */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="At least 6 characters"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E8B7C]"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2B170B] block">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#9E8B7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#FFFDF9] border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#8B1E2D] hover:bg-[#6E1422] disabled:opacity-60 text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>{loading ? "Updating..." : "Update Password"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === "success" && (
            <div className="space-y-6 max-w-md text-center py-4">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#2B170B]">
                  Password Reset Successfully!
                </h3>
                <p className="text-xs text-[#5C4535] mt-2 leading-relaxed">
                  Your credentials have been securely updated. You can now log into your Sandton Bakery account.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => router.push("/login")}
                  className="w-full bg-[#3A1407] hover:bg-[#250D04] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all"
                >
                  Sign In with New Password &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

