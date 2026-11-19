
"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

const products = [
  {
    name: "Groundnut Oil",
    size: "1 Litre",
    price: 270,
    image: "/images/groundnut-oil.png",
    description: "Traditional cold-pressed goodness.",
  },
  {
    name: "Sesame Oil",
    size: "1 Litre",
    price: 400,
    image: "/images/sesame-oil.png",
    description: "Pure sesame oil for everyday cooking.",
  },
  {
    name: "Coconut Oil",
    size: "1 Litre",
    price: 400,
    image: "/images/coconut-oil.png",
    description: "Naturally rich coconut goodness.",
  },
  {
    name: "Pure Ghee",
    size: "250 ml",
    price: 190,
    image: "/images/pure-ghee.png",
    description: "Rich aroma and traditional taste.",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#FFF8E9] text-[#174D35]">

      {/* Header */}
      <header className="bg-[#103D25] px-6 py-6 text-center text-white">
        <Link href="/">
          <h1 className="font-serif text-3xl font-bold">
            SWETHA AGENCIES
          </h1>
        </Link>
        <p className="mt-2 text-xs tracking-widest text-[#D6A642]">
          PURE TASTE. TRADITIONAL GOODNESS.
        </p>
      </header>

      {/* Page Heading */}
      <section className="px-6 py-12 text-center">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B28A35]">
          SWETHA AGENCIES
        </p>

        <h1 className="font-serif text-4xl font-bold md:text-5xl">
          Our Products
        </h1>

        <p className="mt-4 text-[#795438]">
          Pure and healthy essentials for your family.
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-[#E9DFC9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="relative h-64 w-full bg-[#F4EBD9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              <div className="p-6">

                <p className="text-xs uppercase tracking-widest text-[#B28A35]">
                  {product.size}
                </p>

                <h2 className="mt-2 font-serif text-2xl font-semibold">
                  {product.name}
                </h2>

                <p className="mt-2 min-h-12 text-sm text-[#795438]">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold">
                    ₹{product.price}
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 rounded-full bg-[#174D35] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#B28A35]"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#103D25] px-6 py-8 text-center text-white">
        <h2 className="font-serif text-xl font-bold">
          SWETHA AGENCIES
        </h2>

        <p className="mt-2 text-sm text-[#D6A642]">
          Pure Taste. Traditional Goodness.
        </p>

        <p className="mt-4 text-xs text-white/70">
          © 2026 SWETHA AGENCIES. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}
