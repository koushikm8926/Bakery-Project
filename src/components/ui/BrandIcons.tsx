import React from "react";

// 1. INSTAGRAM ICON (Official multi-colored radiant gradient background with camera glyph)
export function InstagramIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-115 hover:shadow-pink-500/40 cursor-pointer ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      }}
      title="Instagram"
    >
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5.5" ry="5.5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="3" />
      </svg>
    </div>
  );
}

// 2. FACEBOOK ICON (Official Facebook Blue with white bold 'f')
export function FacebookIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#1877F2] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-115 hover:shadow-blue-500/40 cursor-pointer ${className}`}
      title="Facebook"
    >
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
}

// 3. YOUTUBE ICON (Official YouTube Red with white play triangle)
export function YouTubeIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#FF0000] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-115 hover:shadow-red-500/40 cursor-pointer ${className}`}
      title="YouTube"
    >
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  );
}

// 4. WHATSAPP ICON (Official WhatsApp Green with authentic telephone receiver in speech bubble)
export function WhatsAppIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#25D366] flex items-center justify-center shadow-md transition-all duration-300 hover:scale-115 hover:shadow-emerald-500/40 cursor-pointer ${className}`}
      title="WhatsApp"
    >
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </div>
  );
}

// 5. OFFICIAL VISA BADGE
export function VisaBadge({ className = "h-4" }: { className?: string }) {
  return (
    <span className={`font-serif font-black italic text-[#1A1F71] text-xs tracking-wider inline-flex items-center ${className}`}>
      VISA
    </span>
  );
}

// 6. OFFICIAL MASTERCARD BADGE
export function MastercardBadge({ className = "w-6 h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center -space-x-2 shrink-0 ${className}`} title="Mastercard">
      <div className="w-4 h-4 rounded-full bg-[#EB001B]"></div>
      <div className="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply"></div>
    </div>
  );
}

// 7. OFFICIAL UPI BADGE
export function UpiBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 shrink-0 ${className}`} title="UPI">
      <span className="font-sans font-black text-[12px] tracking-tight text-[#097939]">
        UPI
      </span>
      <div className="w-1.5 h-3 bg-gradient-to-b from-[#097939] via-[#FFFFFF] to-[#ED752E] transform skew-x-12 border border-gray-200"></div>
    </div>
  );
}

// 8. OFFICIAL PAYTM BADGE
export function PaytmBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center font-sans font-black text-[12px] ${className}`} title="Paytm">
      <span className="text-[#002970]">Pay</span>
      <span className="text-[#00BAF2]">tm</span>
    </div>
  );
}

// 9. OFFICIAL GPAY BADGE
export function GPayBadge({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-[#EADBCE] shadow-xs text-xs font-bold ${className}`} title="Google Pay">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
      <span className="text-[#3c4043] font-medium text-[11px]">Pay</span>
    </div>
  );
}

// 10. OFFICIAL PHONEPE BADGE
export function PhonePeBadge({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 bg-[#5f259f] text-white px-2 py-0.5 rounded shadow-xs text-[11px] font-bold ${className}`} title="PhonePe">
      <span className="font-serif">पे</span>
      <span>PhonePe</span>
    </div>
  );
}

// 11. OFFICIAL RUPAY BADGE
export function RuPayBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center font-sans font-black text-xs ${className}`} title="RuPay">
      <span className="text-[#092B65]">Ru</span>
      <span className="text-[#EA6C1F]">Pay</span>
      <span className="text-[#092B65] text-[10px] ml-0.5">❯❯</span>
    </div>
  );
}

// 12. OFFICIAL AMAZON PAY BADGE
export function AmazonPayBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 font-sans text-xs font-bold ${className}`} title="Amazon Pay">
      <span className="text-[#232F3E]">amazon</span>
      <span className="text-[#FF9900]">pay</span>
    </div>
  );
}

// 13. OFFICIAL MOBIKWIK BADGE
export function MobiKwikBadge({ className = "h-4" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-0.5 font-sans font-black text-xs text-[#0070CD] ${className}`} title="MobiKwik">
      <span>Mobi</span>
      <span className="text-[#00BAF2]">Kwik</span>
    </div>
  );
}

// 14. COMPOSITE OFFICIAL PAYMENT BADGES PILL (Matching UI Mockup)
export function PaymentBadgesPill({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-lg border border-[#EADBCE] shadow-xs ${className}`}
    >
      <VisaBadge />
      <span className="text-[#EADBCE]">|</span>
      <MastercardBadge />
      <span className="text-[#EADBCE]">|</span>
      <UpiBadge />
      <span className="text-[#EADBCE]">|</span>
      <PaytmBadge />
    </div>
  );
}
