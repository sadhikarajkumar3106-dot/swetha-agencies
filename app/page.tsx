
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./context/CartContext";
import {
  ArrowRight,
  ShoppingBag,
  Leaf,
  ShieldCheck,
  Truck,
  Heart,
  MessageCircle,
  ShoppingCart,
  Check,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    name: "Groundnut Oil",
    description: "Rich in Nutrition",
    size: "1 Litre",
    price: 270,
    image: "/images/groundnut-oil.png",
    category: "TRADITIONAL GOODNESS",
  },
  {
    name: "Sesame Oil",
    description: "Pure & Healthy",
    size: "1 Litre",
    price: 400,
    image: "/images/sesame-oil.png",
    category: "PURE & NATURAL",
  },
  {
    name: "Coconut Oil",
    description: "Natural Goodness",
    size: "1 Litre",
    price: 400,
    image: "/images/coconut-oil.png",
    category: "NATURAL GOODNESS",
  },
  {
    name: "Pure Ghee",
    description: "Aromatic & Wholesome",
    size: "250 ml",
    price: 190,
    image: "/images/pure-ghee.png",
    category: "TRADITIONAL TASTE",
  },
];

const benefits = [
  { icon: Leaf, title: "100% Pure & Natural", subtitle: "No Adulteration" },
  { icon: ShieldCheck, title: "Trusted Quality", subtitle: "For Your Family" },
  { icon: Truck, title: "Local Delivery", subtitle: "Across Chennai" },
  { icon: Heart, title: "Traditional Goodness", subtitle: "In Every Drop" },
];

export default function HomePage() {
  const { addToCart, cartCount } = useCart();
  const [addedProduct, setAddedProduct] = useState("");

  function handleAddToCart(product: (typeof products)[number]) {
    addToCart({
      name: product.name,
      price: product.price,
      size: product.size,
    });

    setAddedProduct(product.name);
    setTimeout(() => setAddedProduct(""), 1500);
  }

  return (
    <main className="min-h-screen bg-[#FFF8E9] text-[#174D35]">

      {/* Announcement */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#103D25] px-6 py-3 text-xs text-white md:px-12">
        <span>Pure Quality • Traditional Goodness • Swetha Agencies</span>

        <a
          href="https://wa.me/919840599527"
          className="flex items-center gap-2"
        >
          <MessageCircle size={15} />
          +91 9840599527 | Local Delivery Only
        </a>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#D6A642]/30 bg-[#FFF8E9]">
        <nav className="mx-auto flex max-w-[1450px] items-center justify-between gap-4 px-6 py-4 md:px-12">

          <Link href="/" className="flex items-center gap-2">
            <Leaf size={42} className="text-[#D6A642]" />

            <div>
              <h1 className="font-serif text-2xl font-bold tracking-wider md:text-3xl">
                SWETHA
              </h1>
              <p className="text-center text-[10px] tracking-[0.4em]">
                AGENCIES
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 font-semibold md:flex">
            <Link href="/" className="text-[#B68A32]">
              Home
            </Link>

            <Link
              href="/shop"
              className="transition hover:text-[#B68A32]"
            >
              Shop
            </Link>

            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-[#174D35] px-4 py-3 text-white transition hover:bg-[#B68A32]"
          >
            <ShoppingCart size={20} />
            <span className="hidden text-sm sm:inline">Cart</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D6A642] px-1 text-xs font-bold text-[#174D35]">
              {cartCount}
            </span>
          </Link>

        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[#F8EDDA] px-6 py-16 text-center md:py-24">
        <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#B68A32]">
          WELCOME TO SWETHA AGENCIES
        </p>

        <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
          Pure Taste.
          <br />
          Traditional Goodness.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#795438] md:text-base">
          Bring home the goodness of traditional cooking oils and pure ghee.
          Quality essentials for your family's kitchen.
        </p>

        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#174D35] px-8 py-4 font-semibold text-white transition hover:bg-[#B68A32]"
        >
          Explore Products
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Benefits */}
      <section className="border-y border-[#D6A642]/30 bg-[#F8EDDA]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-6 py-7 md:grid-cols-4">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-3"
            >
              <item.icon
                size={32}
                className="shrink-0 text-[#174D35]"
              />

              <div>
                <h3 className="text-xs font-bold md:text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-[#795438]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-[1450px] px-6 py-14 md:px-12 md:py-20">

        <div className="mb-10 text-center md:text-left">
          <p className="text-xs tracking-[0.3em] text-[#B68A32]">
            OUR COLLECTION
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Quality for Your Kitchen
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-[#D6A642]/40 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden bg-[#F4EBD9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">

                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#B68A32]">
                  {product.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#795438]">
                  {product.description}
                </p>

                <p className="mt-5 text-xl font-bold">
                  ₹{product.price}
                  <span className="ml-2 text-sm font-normal text-[#795438]">
                    / {product.size}
                  </span>
                </p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#174D35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#B68A32] hover:text-[#103D25]"
                >
                  {addedProduct === product.name ? (
                    <>
                      <Check size={17} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={17} />
                      Add to Cart
                    </>
                  )}
                </button>

              </div>
            </article>
          ))}

        </div>

        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-semibold text-[#174D35] underline hover:text-[#B68A32]"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="bg-[#F8EDDA] px-6 py-16 text-center"
      >
        <Leaf size={38} className="mx-auto text-[#B68A32]" />

        <h2 className="mt-4 font-serif text-3xl font-bold">
          About Swetha Agencies
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#795438]">
          At Swetha Agencies, we believe in bringing traditional goodness
          and quality essentials to your family's kitchen.
          Pure taste and trusted quality in every product.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#103D25] px-6 py-12 text-white md:px-12"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-3">

          <div>
            <h2 className="font-serif text-2xl font-bold tracking-widest">
              SWETHA AGENCIES
            </h2>

            <p className="mt-3 text-sm text-white/70">
              Pure Taste. Traditional Goodness.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-[#D6A642]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/75">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/#about">About Us</Link>
              <Link href="/#contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-[#D6A642]">
              Contact Us
            </h3>

            <p className="text-sm leading-7 text-white/80">
              5/112, Bhajanai Kovil Street,
              <br />
              Ramapuram, Chennai – 600089,
              <br />
              Tamil Nadu, India.
              <br />
              WhatsApp: +91 9840599527
            </p>

            <a
              href="https://wa.me/919840599527"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D6A642]"
            >
              <MessageCircle size={18} />
              Chat with us on WhatsApp
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © 2026 SWETHA AGENCIES. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}
