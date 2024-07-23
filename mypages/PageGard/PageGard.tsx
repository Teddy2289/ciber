import { Separator, Textui } from "@/components";
import Info from "@/components/Landing/Info";
import Landing from "@/components/Landing/Landing";
import NewArrival from "@/components/NewArrival/NewArrival";
import BestSellerProduct from "@/components/product/bestSellerProduct";
import PoductList from "@/components/product/PoductList";
import { ProductCountdown } from "@/components/section";
import Brand from "@/components/section/brand";

import React from "react";

export default function PageGard() {
  return (
    <>
      <Landing />
      <Info />
      <NewArrival />
      <PoductList products={[]} />
      <BestSellerProduct />
      <Brand />
      <ProductCountdown />
      <Textui />
    </>
  );
}
