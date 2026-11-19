
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  name: string;
  price: number;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("swetha-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("swetha-cart");
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("swetha-cart", JSON.stringify(cart));
    }
  }, [cart, loaded]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((previous) => {
      const existing = previous.find(
        (product) =>
          product.name === item.name && product.size === item.size
      );

      if (existing) {
        return previous.map((product) =>
          product.name === item.name && product.size === item.size
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...previous, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((previous) =>
      previous.filter((item) => item.name !== name)
    );
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity < 1) return;

    setCart((previous) =>
      previous.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
