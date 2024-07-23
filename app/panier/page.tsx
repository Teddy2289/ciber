import Carte from "@/components/cart/Carte";
import Checkout from "@/components/checkout/Checkout";
import React from "react";

export default function page() {
  return (
    <div className="font-sans max-w-6xl max-lg:max-w-2xl mx-auto py-[50px] mt-[50px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Cart panier  */}
        <Carte />
        {/* checkout */}
        <Checkout />
      </div>
    </div>
  );
}
