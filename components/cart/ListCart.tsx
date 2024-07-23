"use client";
import React, { useState } from "react";
import { ProductListProps } from "@/types";
import Carte from "./CarteItems";

export default function ListCart({ products }: ProductListProps) {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Initialiser chaque produit avec une quantité de 1
      return acc;
    }, {} as Record<number, number>)
  );

  const incrementQuantity = (productId: number) => {
    setQuantities({
      ...quantities,
      [productId]: quantities[productId] + 1,
    });
  };

  const decrementQuantity = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities({
        ...quantities,
        [productId]: quantities[productId] - 1,
      });
    }
  };
  return (
    <div>
      {products.map((product) => (
        <Carte
          key={product.id}
          product={product}
          quantity={quantities[product.id]}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          onDelete={function (productId: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      ))}
    </div>
  );
}
