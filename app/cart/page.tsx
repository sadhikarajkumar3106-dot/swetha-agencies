
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

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

      <div className="mx-auto max-w-5xl px-6 py-12">

        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm hover:text-[#B68A32]"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <h2 className="mb-8 font-serif text-4xl font-bold">
          My Shopping Cart
        </h2>

        {cart.length === 0 ? (

          <div className="rounded-2xl border border-[#D6A642]/40 bg-white p-12 text-center shadow-sm">
            <ShoppingBag
              size={55}
              className="mx-auto mb-5 text-[#B68A32]"
            />

            <h3 className="font-serif text-2xl font-bold">
              Your Cart is Empty
            </h3>

            <p className="mt-3 text-sm text-[#795438]">
              Discover our traditional cooking oils and pure ghee.
            </p>

            <Link
              href="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#174D35] px-7 py-3 font-semibold text-white transition hover:bg-[#B68A32]"
            >
              Explore Products
              <ShoppingCart size={18} />
            </Link>
          </div>

        ) : (

          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

            {/* Cart Products */}
            <section className="space-y-5">

              {cart.map((item) => (
                <article
                  key={`${item.name}-${item.size}`}
                  className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[#D6A642]/40 bg-[#F8E8C9] p-6"
                >

                  <div>
                    <h3 className="font-serif text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#795438]">
                      {item.size}
                    </p>

                    <p className="mt-2 font-bold">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.name,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity === 1}
                      className="rounded-full border border-[#174D35] p-2 disabled:opacity-30"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.name,
                          item.quantity + 1
                        )
                      }
                      className="rounded-full border border-[#174D35] p-2"
                    >
                      <Plus size={15} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="ml-2 text-red-700 hover:text-red-900"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={19} />
                    </button>

                  </div>

                  <p className="w-full text-right font-bold">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>

                </article>
              ))}

              <button
                onClick={clearCart}
                className="text-sm font-semibold text-red-700 underline"
              >
                Clear Cart
              </button>

            </section>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-[#D6A642]/40 bg-white p-7 shadow-sm">

              <h3 className="font-serif text-2xl font-bold">
                Order Summary
              </h3>

              <div className="mt-6 flex justify-between text-sm">
                <span>Total Items</span>
                <span>{cartCount}</span>
              </div>

              <div className="mt-5 flex justify-between border-b border-[#E9DFC9] pb-5 text-sm">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="mt-5 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#795438]">
                Delivery charges will be confirmed separately.
              </p>

              <Link
                href="/checkout"
                className="mt-7 block w-full rounded-full bg-[#174D35] px-5 py-4 text-center font-semibold text-white transition hover:bg-[#B68A32] hover:text-[#103D25]"
              >
                Proceed to Checkout →
              </Link>

              <Link
                href="/shop"
                className="mt-4 block text-center text-sm text-[#795438] underline"
              >
                Continue Shopping
              </Link>

            </aside>

          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="mt-12 bg-[#103D25] px-6 py-8 text-center text-white">
        <h2 className="font-serif text-xl font-bold">
          SWETHA AGENCIES
        </h2>
        <p className="mt-2 text-xs text-white/70">
          Pure Taste. Traditional Goodness.
        </p>
        <p className="mt-4 text-xs text-[#D6A642]">
          © 2026 SWETHA AGENCIES. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}
