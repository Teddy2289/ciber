import React from "react";
import { Wrapper } from "../wrapper";
import { ProductFilter } from "../Filter";
import PoductList from "./PoductList";
import { category } from "@/utils";
import ProductCard from "./ProductCard";
import { Separator } from "../ui";
import Pagination from "../ui/Pagination";

interface ProductListFilterProps {}

export const ProductListFilter = ({}: ProductListFilterProps) => {
  return (
    <div className="flex flex-row gap-2">
      <ProductFilter />
      <div>
        <section className="w-fit mx-auto grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-6 mt-10 mb-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
        <Separator classname="h-3 mt-12" />
        <Pagination />
      </div>
    </div>
  );
};
