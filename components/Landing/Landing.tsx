import React from "react";
import PromotionSlide from "../slide/PromotionSlide";
import { Categories } from "../category/Category";
import { category } from "@/utils";

export default function Landing() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-8 lg:flex-row justify-between items-start pt-[50px] px-6 lg:px-6 lg:py-12  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] z-10">
      <Categories category={category} />
      <PromotionSlide />
    </div>
  );
}
