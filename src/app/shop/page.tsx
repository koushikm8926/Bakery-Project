import React, { Suspense } from "react";
import { Metadata } from "next";
import { ShopCatalogView } from "@/components/shop/ShopCatalogView";

export const metadata: Metadata = {
  title: "Shop All Bakery Products | Sandton Bakery",
  description: "Browse our signature cakes, flaky pastries, crusty sourdough breads, cookies and cupcakes.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-[#8C7A6B]">Loading Sandton Bakery shop...</div>}>
      <ShopCatalogView />
    </Suspense>
  );
}
