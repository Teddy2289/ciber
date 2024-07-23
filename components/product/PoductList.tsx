import React from "react";
import { Wrapper } from "../wrapper";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import ProductCard from "./ProductCard";
import Button from "../common/Button";
import { Separator } from "../ui";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
}

export default function PoductList({ products }: ProductListProps) {
  return (
    <div className="mt-40 px-6 md:px-8 md:mt-[450px] lg:mt-14">
      <TitlteSecrion title="Découvrez nos produits" postTitle="Nos produits" />
      <section className="w-fit mx-auto grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <div className="flex justify-center pt-[20px]">
        <Button
          Text="Voir plus..."
          className="bg-secondary text-white px-20 text-sm text-center  hover:bg-secondary2 duration-300 ease-in-out"
        />
      </div>
      <Separator classname="h-3 mt-12" />
    </div>
  );
}
