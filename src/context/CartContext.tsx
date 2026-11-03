"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface CartItem {
  id: string; // unique item id composed of product.id + weight + eggPreference
  product: Product;
  quantity: number;
  weight?: string;
  isEggless: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  total: number;
  status: "Delivered" | "Out for Delivery" | "Preparing" | "Order Received";
  address: string;
  deliveryDate: string;
  deliverySlot: string;
  paymentMethod: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[]; // product IDs
  addToCart: (product: Product, quantity?: number, weight?: string, isEggless?: boolean) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  deliveryCharge: number;
  discount: number;
  couponCode: string;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  totalAmount: number;
  // Orders
  orders: Order[];
  placeOrder: (details: {
    address: string;
    deliveryDate: string;
    deliverySlot: string;
    paymentMethod: string;
  }) => Order;
  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize with initial sample data from the UI mockup
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("sandton_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        // Pre-populate with items from the Shopping Cart mockup:
        // Chocolate Truffle Cake (1kg, Eggless), Strawberry Cake (1kg, Eggless), Blueberry Cheesecake (1kg, Eggless)
        const p1 = PRODUCTS.find((p) => p.slug === "chocolate-truffle-cake")!;
        const p2 = PRODUCTS.find((p) => p.slug === "strawberry-cream-cake")!;
        const p4 = PRODUCTS.find((p) => p.slug === "blueberry-cheesecake")!;

        const initialItems: CartItem[] = [
          { id: `${p1.id}-1kg-eggless`, product: p1, quantity: 1, weight: "1kg", isEggless: true },
          { id: `${p2.id}-1kg-eggless`, product: p2, quantity: 1, weight: "1kg", isEggless: true },
          { id: `${p4.id}-1kg-eggless`, product: p4, quantity: 1, weight: "1kg", isEggless: true },
        ];
        setCart(initialItems);
      }

      const savedWishlist = localStorage.getItem("sandton_wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      } else {
        setWishlist(["sb-1", "sb-2", "sb-4", "sb-5"]);
      }

      const savedOrders = localStorage.getItem("sandton_orders");
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        // Mock sample orders matching the Account Dashboard mockup
        const p1 = PRODUCTS.find((p) => p.slug === "chocolate-truffle-cake")!;
        const p2 = PRODUCTS.find((p) => p.slug === "strawberry-cream-cake")!;
        setOrders([
          {
            id: "#SB784326",
            date: "Oct 31, 2025, 10:24 AM",
            items: [{ id: "order-1", product: p1, quantity: 3, weight: "1kg", isEggless: true }],
            subtotal: 2596,
            deliveryCharge: 0,
            discount: 100,
            total: 2596,
            status: "Delivered",
            address: "35, Ground Floor, 5th Cross, Lakshmi Layout, Munnekolala, Marathahalli, Bengaluru",
            deliveryDate: "Oct 31, 2025",
            deliverySlot: "10:00 AM - 12:00 PM",
            paymentMethod: "UPI (Google Pay)",
          },
          {
            id: "#SB782910",
            date: "Oct 26, 2025, 09:17 AM",
            items: [{ id: "order-2", product: p2, quantity: 1, weight: "1kg", isEggless: true }],
            subtotal: 799,
            deliveryCharge: 49,
            discount: 0,
            total: 848,
            status: "Out for Delivery",
            address: "2nd Floor, Prestige Tech Park, Inner Ring Road, Bengaluru",
            deliveryDate: "Today",
            deliverySlot: "02:00 PM - 04:00 PM",
            paymentMethod: "Credit Card",
          },
        ]);
      }
    } catch {
      // Ignore during SSR
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("sandton_cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("sandton_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("sandton_orders", JSON.stringify(orders));
    }
  }, [orders]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    weight: string = product.weightOptions?.[0] || "Standard",
    isEggless: boolean = product.isEggless
  ) => {
    const itemId = `${product.id}-${weight}-${isEggless ? "eggless" : "egg"}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, quantity, weight, isEggless }];
    });
    showToast(`Added ${quantity}x "${product.name}" to your cart!`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast("Item removed from cart");
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("sandton_cart");
    showToast("Cart cleared");
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isFav = prev.includes(productId);
      const updated = isFav ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(isFav ? "Removed from wishlist" : "Saved to your wishlist!");
      return updated;
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce((total, item) => {
    // calculate base price with weight multiplier if applicable
    let multiplier = 1;
    if (item.weight === "1kg") multiplier = 1.35;
    if (item.weight === "2kg") multiplier = 2.4;
    return total + Math.round(item.product.price * multiplier) * item.quantity;
  }, 0);

  const deliveryCharge = cartSubtotal > 1500 || cartSubtotal === 0 ? 0 : 49;

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "BAKERY15" || clean === "BAKERY20") {
      setCouponCode(clean);
      const disc = Math.round(cartSubtotal * 0.15);
      setDiscount(disc);
      showToast(`Coupon ${clean} applied! You saved ₹${disc}`);
      return true;
    } else if (clean === "FLAT100" || clean === "SWEET100") {
      setCouponCode(clean);
      setDiscount(100);
      showToast("Coupon applied! ₹100 flat discount added.");
      return true;
    }
    showToast("Invalid coupon code. Try BAKERY15 or FLAT100");
    return false;
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscount(0);
    showToast("Coupon removed");
  };

  const totalAmount = Math.max(0, cartSubtotal + deliveryCharge - discount);

  const placeOrder = (details: {
    address: string;
    deliveryDate: string;
    deliverySlot: string;
    paymentMethod: string;
  }): Order => {
    const newOrderId = `#SB${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: Order = {
      id: newOrderId,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryCharge,
      discount,
      total: totalAmount,
      status: "Preparing",
      address: details.address,
      deliveryDate: details.deliveryDate,
      deliverySlot: details.deliverySlot,
      paymentMethod: details.paymentMethod,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartSubtotal,
        deliveryCharge,
        discount,
        couponCode,
        applyCoupon,
        removeCoupon,
        totalAmount,
        orders,
        placeOrder,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
