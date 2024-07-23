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
    <div className="flex flex-col lg:flex-row justify-between gap-12">
      <ProductFilter />
      <div className="w-full lg:w-[70%]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="ptext-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            <ProductCard />
          </div>
          <div className="ptext-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            {" "}
            <ProductCard />
          </div>
          <div className="text-center text-black bg-blue-500">
            <ProductCard />
          </div>
        </div>
        <Separator classname="h-3 mt-12" />
        <Pagination />
      </div>
    </div>
  );
};
