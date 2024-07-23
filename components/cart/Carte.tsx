import Image from "next/image";
import React from "react";
import ListCart from "./ListCart";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import strip from "../../public/images/stripe.png";
import blue from "../../public/images/card.png";
import paypal from "../../public/images/paypal.png";
import mac from "../../public/images/mac.png";
import { Product } from "@/types";

export default function Carte() {
  const products: Product[] = [
    { id: 1, name: "Smart Watch Timex", price: 90, image: mac },
    { id: 2, name: "Another Product", price: 150, image: mac },
    // Ajouter d'autres produits ici
  ];
  return (
    <div>
      <div className="p-6 rounded-md">
        <ListCart products={products} />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Image src={strip} alt="card1" className="w-12 object-contain" />
        <Image src={blue} alt="card2" className="w-12 object-contain" />
        <Image src={paypal} alt="card3" className="w-12 object-contain" />
      </div>
    </div>
  );
}
