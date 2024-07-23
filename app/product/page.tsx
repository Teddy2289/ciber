import { Wrapper } from "@/components";
import { ProductListFilter } from "@/components/product/ProductListFilter";
import Accordeon from "@/components/ui/Accordeon";
import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";

export default function page() {
  return (
    <div className="w-full bg-slate-300 bg-opacity-50 px-6 py-8 ">
      <div className="relative flex items-center justify-between p-4 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Link
            href="/"
            className="flex gap-2 capitalize font-normal text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
            <GoHome className="text-lg" />
            Accueil
          </Link>
          <Link
            href="/"
            className="flex gap-2 capitalize font-normal text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
            <span>/</span>
            Catégorie
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="capitalize font-normal text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
            Meilleures ventes
          </Link>
          <Link
            href="/"
            className="capitalize font-normal text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
            Nouveautés
          </Link>
          <Link
            href="/"
            className="capitalize font-normal text-black hover:text-secondary text-base leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
            Les mieux notés
          </Link>
        </nav>
      </div>
      <ProductListFilter />
    </div>
  );
}
