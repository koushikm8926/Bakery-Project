import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailView } from "@/components/product/ProductDetailView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) {
    return { title: "Product Not Found | Sandton Bakery" };
  }
  return {
    title: `${product.name} | Sandton Bakery`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-[#8C7A6B]">Loading delicious bake...</div>}>
      <ProductDetailView product={product} />
    </Suspense>
  );
}
