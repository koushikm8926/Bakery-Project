"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  Heart,
  ShoppingBag,
  Zap,
  MapPin,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Award,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function ProductDetailView({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Gallery state
  const gallery = product.galleryImages.length > 0 ? product.galleryImages : [product.image];
  const [selectedImage, setSelectedImage] = useState(gallery[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Customization state
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions?.[0] || "500g");
  const [isEggless, setIsEggless] = useState(product.isEggless);
  const [quantity, setQuantity] = useState(1);

  // Pincode checker state
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "valid" | "invalid">("idle");

  // Tabs state
  const [activeTab, setActiveTab] = useState<
    "description" | "ingredients" | "storage" | "delivery" | "reviews"
  >("description");

  const isFavorite = isInWishlist(product.id);

  // Dynamic price calculation based on weight
  const getCalculatedPrice = () => {
    let multiplier = 1;
    if (selectedWeight === "1kg") multiplier = 1.35;
    if (selectedWeight === "2kg") multiplier = 2.4;
    return Math.round(product.price * multiplier);
  };

  const calculatedPrice = getCalculatedPrice();
  const calculatedOriginalPrice = product.originalPrice
    ? Math.round(
        product.originalPrice *
          (selectedWeight === "1kg" ? 1.35 : selectedWeight === "2kg" ? 2.4 : 1)
      )
    : null;

  const discountPercentage = calculatedOriginalPrice
    ? Math.round(((calculatedOriginalPrice - calculatedPrice) / calculatedOriginalPrice) * 100)
    : null;

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus("valid");
    } else {
      setPincodeStatus("invalid");
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight, isEggless);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedWeight, isEggless);
    router.push("/checkout");
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-12">
      {/* 1. BREADCRUMBS */}
      <nav className="text-xs text-[#8C7A6B] flex items-center gap-2">
        <Link href="/" className="hover:text-[#8B1E2D]">
          Home
        </Link>
        <span>&gt;</span>
        <Link href="/shop" className="hover:text-[#8B1E2D]">
          Shop
        </Link>
        <span>&gt;</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-[#8B1E2D] capitalize"
        >
          {product.category}
        </Link>
        <span>&gt;</span>
        <span className="text-[#2B170B] font-semibold">{product.name}</span>
      </nav>

      {/* 2. PRODUCT MAIN SHOWCASE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Gallery & Trust Strip */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Hero Photo Container */}
          <div className="relative rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#F0E5D8] aspect-square shadow-sm">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Favorite Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#8B1E2D] flex items-center justify-center shadow-md transition-transform hover:scale-110"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-[#8B1E2D] text-[#8B1E2D]" : "text-[#786558]"
                }`}
              />
            </button>
          </div>

          {/* Thumbnails Row */}
          {gallery.length > 1 && (
            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={() => {
                  const newIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(gallery[newIndex]);
                }}
                className="w-8 h-8 rounded-full border border-[#EADBCE] bg-white flex items-center justify-center text-[#5C4535] hover:bg-[#FAF5EE]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 overflow-x-auto p-1">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentImageIndex(idx);
                      setSelectedImage(imgUrl);
                    }}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === imgUrl
                        ? "border-[#8B1E2D] ring-2 ring-[#8B1E2D]/20 scale-105"
                        : "border-[#EADBCE] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} thumb ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  const newIndex = (currentImageIndex + 1) % gallery.length;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(gallery[newIndex]);
                }}
                className="w-8 h-8 rounded-full border border-[#EADBCE] bg-white flex items-center justify-center text-[#5C4535] hover:bg-[#FAF5EE]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Trust Badges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#F0E5D8]">
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#FAF6EE]">
              <Sparkles className="w-5 h-5 text-[#D97706] mb-1" />
              <span className="font-bold text-[11px] text-[#2B170B]">Freshly Baked Daily</span>
              <span className="text-[10px] text-[#8C7A6B]">Made with quality</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#FAF6EE]">
              <ShieldCheck className="w-5 h-5 text-[#D97706] mb-1" />
              <span className="font-bold text-[11px] text-[#2B170B]">Hygienic & Safe</span>
              <span className="text-[10px] text-[#8C7A6B]">Prepared with care</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#FAF6EE]">
              <Truck className="w-5 h-5 text-[#D97706] mb-1" />
              <span className="font-bold text-[11px] text-[#2B170B]">Same Day Delivery</span>
              <span className="text-[10px] text-[#8C7A6B]">In selected areas</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#FAF6EE]">
              <Award className="w-5 h-5 text-[#D97706] mb-1" />
              <span className="font-bold text-[11px] text-[#2B170B]">Premium Cocoa</span>
              <span className="text-[10px] text-[#8C7A6B]">Finest ingredients</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Configurator */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#C2410C]">
              Premium {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B170B] mt-1">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-[#D97706]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#2B170B]">
                {product.rating} ({product.reviewsCount} Reviews)
              </span>
            </div>
          </div>

          <p className="text-sm text-[#5C4535] leading-relaxed">
            {product.description}
          </p>

          {/* Pricing & Stock Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF5EE] border border-[#EADBCE]">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#2B170B]">
                ₹{calculatedPrice}
              </span>
              {calculatedOriginalPrice && (
                <span className="text-base text-[#9E8B7C] line-through">
                  ₹{calculatedOriginalPrice}
                </span>
              )}
              {discountPercentage && (
                <span className="bg-[#FFF0E0] text-[#C2410C] text-xs font-bold px-2 py-0.5 rounded-full border border-[#E58B23]/30">
                  Save {discountPercentage}%
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>In Stock &bull; Ready for fresh delivery</span>
            </div>
          </div>

          {/* Weight / Size Selection */}
          {product.weightOptions && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#2B170B] uppercase tracking-wider block">
                Weight / Size
              </label>
              <div className="flex items-center gap-3">
                {product.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedWeight === weight
                        ? "bg-[#3A1407] text-white shadow-md scale-105"
                        : "bg-white text-[#4A2D1B] border border-[#EADBCE] hover:bg-[#FAF6EE]"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Egg Preference */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#2B170B] uppercase tracking-wider block">
              Egg Preference
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#2B170B]">
                <input
                  type="radio"
                  name="eggPreference"
                  checked={!isEggless}
                  onChange={() => setIsEggless(false)}
                  className="accent-[#C2410C] w-4 h-4 cursor-pointer"
                />
                <span>With Egg</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-emerald-800">
                <input
                  type="radio"
                  name="eggPreference"
                  checked={isEggless}
                  onChange={() => setIsEggless(true)}
                  className="accent-emerald-600 w-4 h-4 cursor-pointer"
                />
                <span className="font-semibold">Eggless (100% Veg)</span>
              </label>
            </div>
          </div>

          {/* Quantity Counter & Action Buttons */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              {/* Counter */}
              <div className="flex items-center border border-[#EADBCE] bg-white rounded-xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-sm font-bold text-[#5C4535] hover:bg-[#FAF6EE] transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 text-sm font-bold text-[#2B170B] min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-sm font-bold text-[#5C4535] hover:bg-[#FAF5EE] transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#3A1407] hover:bg-[#250D04] text-white text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#D97706] hover:bg-[#B45309] text-white text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Zap className="w-4 h-4" />
                <span>Buy Now</span>
              </button>
            </div>
          </div>

          {/* Check Delivery Pincode */}
          <div className="p-4 rounded-2xl bg-[#FFFBF5] border border-[#F0E5D8] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2B170B]">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span>Check Delivery Availability</span>
            </div>
            <p className="text-[11px] text-[#8C7A6B]">
              Enter your 6-digit delivery pincode to check instant slot & same-day readiness.
            </p>

            <form onSubmit={handlePincodeCheck} className="flex gap-2 pt-1">
              <input
                type="text"
                maxLength={6}
                placeholder="Enter Pincode (e.g. 560037)"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#EADBCE] text-[#2B170B] focus:outline-none focus:border-[#C2410C]"
              />
              <button
                type="submit"
                className="bg-[#3A1407] text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-[#250D04] transition-colors"
              >
                Check
              </button>
            </form>

            {pincodeStatus === "valid" && (
              <p className="text-xs font-medium text-emerald-700 flex items-center gap-1.5 pt-1">
                <Check className="w-4 h-4" />
                Delivery available! Guaranteed delivery in 2-4 hours.
              </p>
            )}
            {pincodeStatus === "invalid" && (
              <p className="text-xs font-medium text-red-600 pt-1">
                Please enter a valid 6-digit pincode.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3. TABS SECTION */}
      <div className="border border-[#F0E5D8] rounded-3xl overflow-hidden bg-white shadow-sm">
        {/* Tab Headers */}
        <div className="flex flex-wrap items-center border-b border-[#F0E5D8] bg-[#FAF5EE]">
          {[
            { id: "description", label: "Description" },
            { id: "ingredients", label: "Ingredients" },
            { id: "storage", label: "Storage Instructions" },
            { id: "delivery", label: "Delivery Information" },
            { id: "reviews", label: `Reviews (${product.reviewsCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                activeTab === tab.id
                  ? "border-[#8B1E2D] text-[#8B1E2D] bg-white"
                  : "border-transparent text-[#8C7A6B] hover:text-[#2B170B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === "description" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                  About This Fresh Creation
                </h3>
                <p className="text-sm text-[#5C4535] leading-relaxed">
                  {product.description}
                </p>

                {product.highlights && (
                  <ul className="space-y-2 pt-2">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#2B170B]">
                        <div className="w-4 h-4 rounded-full bg-[#FFF6E5] text-[#D97706] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="md:col-span-4 flex justify-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border border-[#F0E5D8] shadow-md">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div className="space-y-4 max-w-2xl">
              <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                Finest Quality Ingredients
              </h3>
              <p className="text-xs text-[#8C7A6B]">
                We use 100% natural, unadulterated ingredients without artificial additives or preservatives.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(product.ingredients || [
                  "Premium Belgian Chocolate",
                  "Dutch-Processed Cocoa Powder",
                  "Organic Flour",
                  "Pure Vanilla Extract",
                  "Farm-Fresh Cream & Butter",
                ]).map((ing, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF5EE] text-xs font-semibold text-[#2B170B]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "storage" && (
            <div className="space-y-3 max-w-2xl">
              <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                Storage & Serving Instructions
              </h3>
              <p className="text-sm text-[#5C4535] leading-relaxed">
                {product.storageInstructions ||
                  "Keep refrigerated between 4°C - 8°C. For optimal melt-in-the-mouth texture and chocolate flavor, take the cake out of the refrigerator 15 minutes before serving."}
              </p>
              <div className="p-3 bg-[#FFF6E5] border border-[#FDE68A] rounded-xl text-xs text-[#92400E]">
                Consume within 48 hours for the freshest taste and texture.
              </div>
            </div>
          )}

          {activeTab === "delivery" && (
            <div className="space-y-3 max-w-2xl">
              <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                Delivery Information
              </h3>
              <p className="text-sm text-[#5C4535] leading-relaxed">
                {product.deliveryInfo ||
                  "We hand-deliver our cakes in temperature-controlled boxes with complimentary message cards, candles, and a wooden cake knife. Available in Sandton, Bengaluru and surrounding delivery radius."}
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B170B]">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#D97706]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#2B170B]">
                      {product.rating} out of 5 based on {product.reviewsCount} verified orders
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    author: "Sai Kumar",
                    date: "3 days ago",
                    comment:
                      "The truffle texture was unreal! Not overly sweet, beautifully rich chocolate ganache, and delivered right on time for our anniversary.",
                  },
                  {
                    author: "Priya Sharma",
                    date: "1 week ago",
                    comment:
                      "Ordered the eggless version and could not believe how soft and moist the sponge was. Everyone at the party asked where we got it from!",
                  },
                ].map((rev, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#FAF5EE] border border-[#EADBCE] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-xs text-[#2B170B]">
                        {rev.author}
                      </span>
                      <span className="text-[10px] text-[#8C7A6B]">{rev.date}</span>
                    </div>
                    <div className="flex text-[#D97706]">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 fill-[#D97706]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#5C4535]">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. "YOU MAY ALSO LIKE" SECTION */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#2B170B]">
              You May Also Like
            </h2>
            <Link
              href="/shop?category=cakes"
              className="text-xs font-bold text-[#8B1E2D] hover:underline flex items-center gap-1"
            >
              <span>View All Cakes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-[#F0E5D8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="aspect-square relative bg-[#FAF6EE]">
                  <Link href={`/products/${p.slug}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>
                <div className="p-3 space-y-2">
                  <Link href={`/products/${p.slug}`}>
                    <h4 className="font-serif text-xs font-bold text-[#2B170B] truncate hover:text-[#8B1E2D]">
                      {p.name}
                    </h4>
                  </Link>
                  <p className="text-xs font-bold text-[#8B1E2D]">₹{p.price}</p>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="w-full bg-[#3A1407] hover:bg-[#250D04] text-white text-[11px] font-bold py-1.5 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. "BAKED FRESH, LOVED ALWAYS" BANNER */}
      <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF6E5] to-[#FAF0DD] border border-[#FDE68A] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B170B]">
            Baked Fresh, Loved Always
          </h3>
          <p className="text-xs sm:text-sm text-[#785437]">
            Delicious cakes made with the finest ingredients and a whole lot of love.
          </p>
        </div>

        <Link
          href="/#story"
          className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs px-6 py-3 rounded-full transition-colors shrink-0 shadow-md flex items-center gap-2"
        >
          <span>Our Story</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}

