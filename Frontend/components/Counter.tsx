"use client";

import { useCart } from "@/contexts/CartContext";

interface CounterProps {
  productId: string;
}

const Counter: React.FC<CounterProps> = ({ productId }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const item = cart.find((p) => p.id === productId);

  if (!item) return null; // if item not in cart, don't render counter

  const increaseHandler = () => {
    addToCart({ ...item, qty: 1 }); // add 1 more
  };

  const decreaseHandler = () => {
    if (item.qty <= 1) {
      removeFromCart(productId); // remove completely if qty = 1
    } else {
      // overwrite qty by reducing 1
      removeFromCart(productId);
      addToCart({ ...item, qty: item.qty - 1 });
    }
  };

  return (
    <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
      <button onClick={decreaseHandler} className="p-1 select-none">
        -
      </button>
      <p className="p-1">{item.qty}</p>
      <button onClick={increaseHandler} className="p-1 select-none">
        +
      </button>
    </div>
  );
};

export default Counter;
