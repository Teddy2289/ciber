import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onDelete: (productId: number) => void;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
}
export default function CarteItems({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onDelete,
}: ProductCardProps) {
  return (
    <div>
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
            <Image
              src={product.image}
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full">
            <h3 className="text-base font-semibold text-gray-800">
              Velvet Sneaker
            </h3>
            <h6 className="text-sm text-gray-800 font-bold cursor-pointer mt-0.5">
              $18.00
            </h6>

            <div className="flex gap-4 mt-4">
              <div>
                <button
                  type="button"
                  className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                  <CiSquareMinus
                    className="w-3 h-3 fill-current"
                    onClick={(e) => {
                      e.preventDefault();
                      onDecrement(product.id);
                    }}
                  />

                  <span className="mx-2.5">{quantity}</span>
                  <CiSquarePlus
                    className="w-3 h-3 fill-current"
                    onClick={(e) => {
                      e.preventDefault();
                      onIncrement(product.id);
                    }}
                  />
                </button>
              </div>

              <div className="ml-auto">
                <FaRegTrashAlt
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(product.id);
                  }}
                  className="w-5 h-5 text-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />
      </div>
    </div>
  );
}
