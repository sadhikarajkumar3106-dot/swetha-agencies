
"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ArrowLeft, MapPin, ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  function placeOrder() {
    if (!name.trim() || !phone.trim() || !address.trim() || !pincode.trim()) {
      alert("Please fill in all delivery details.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      alert("Enter a valid 6-digit PIN code.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const items = cart
      .map(
        (item) =>
          `${item.name} (${item.size}) x ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join("\n");

    const message = `
NEW ORDER - SWETHA AGENCIES

Customer: ${name}
Phone: ${phone}

Delivery Address:
${address}
PIN Code: ${pincode}

ORDER DETAILS:
${items}

Total Items: ${cartCount}
Order Total: ₹${cartTotal}

Please confirm delivery availability and charges.
`;

    window.open(
      `https://wa.me/919840599527?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8E9] text-[#174D35]">

      <header className="bg-[#103D25] px-6 py-6 text-center text-white">
        <h1 className="font-serif text-3xl font-bold">
          SWETHA AGENCIES
        </h1>
        <p className="mt-2 text-xs tracking-widest text-[#D6A642]">
          CHECKOUT
        </p>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">

        <Link href="/cart" className="mb-8 inline-flex items-center gap-2 text-sm">
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <h2 className="mb-8 font-serif text-4xl font-bold">
          Delivery Details
        </h2>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center">
            <ShoppingBag size={45} className="mx-auto mb-4 text-[#B68A32]" />
            <h3 className="font-serif text-2xl font-bold">
              Your cart is empty
            </h3>
            <Link href="/shop" className="mt-5 inline-block underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">

            <section className="rounded-2xl border border-[#D6A642]/40 bg-white p-7 shadow-sm">

              <div className="mb-6 flex items-center gap-3">
                <MapPin className="text-[#B68A32]" />
                <h3 className="font-serif text-2xl font-bold">
                  Your Information
                </h3>
              </div>

              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mb-5 w-full rounded-lg border border-[#D6A642]/50 bg-[#FFF8E9] p-3 outline-none focus:border-[#174D35]"
              />

              <label className="mb-2 block text-sm font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="10-digit mobile number"
                className="mb-5 w-full rounded-lg border border-[#D6A642]/50 bg-[#FFF8E9] p-3 outline-none focus:border-[#174D35]"
              />

              <label className="mb-2 block text-sm font-semibold">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House number, street, area, city"
                rows={4}
                className="mb-5 w-full rounded-lg border border-[#D6A642]/50 bg-[#FFF8E9] p-3 outline-none focus:border-[#174D35]"
              />

              <label className="mb-2 block text-sm font-semibold">
                PIN Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                placeholder="6-digit PIN code"
                className="w-full rounded-lg border border-[#D6A642]/50 bg-[#FFF8E9] p-3 outline-none focus:border-[#174D35]"
              />

            </section>

            <section className="h-fit rounded-2xl border border-[#D6A642]/40 bg-[#F8E8C9] p-7">

              <h3 className="mb-6 font-serif text-2xl font-bold">
                Order Summary
              </h3>

              {cart.map((item) => (
                <div
                  key={item.name}
                  className="mb-5 flex justify-between gap-3 border-b border-[#D6A642]/30 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-[#795438]">
                      {item.size} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#795438]">
                Delivery charges and delivery availability will be confirmed
                by Swetha Agencies through WhatsApp.
              </p>

              <button
                onClick={placeOrder}
                className="mt-7 w-full rounded-full bg-[#174D35] px-6 py-4 font-bold text-white transition hover:bg-[#B68A32] hover:text-[#103D25]"
              >
                Place Order via WhatsApp
              </button>

            </section>
          </div>
        )}
      </div>
    </main>
  );
}
