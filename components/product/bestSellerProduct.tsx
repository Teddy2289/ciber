import React from "react";
import { Wrapper } from "../wrapper";
import ProductCard from "./ProductCard";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import { Separator } from "../ui";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BestSellerProduct() {
  return (
    <Wrapper classname="w-4/5">
      <TitlteSecrion
        title="Nos produits les plus vendus"
        postTitle="Nos produits"
      />
      <section className="w-fit mx-auto grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <Separator classname="h-3 mt-12" />
    </Wrapper>
  );
}
