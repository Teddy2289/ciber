/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { Wrapper } from "../wrapper";
import ProductCard from "./ProductCard";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import { Separator } from "../ui";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction: any) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: (direction: any) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  }),
};
export default function BestSellerProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const products = [
    <ProductCard key={1} />,
    <ProductCard key={2} />,
    <ProductCard key={3} />,
    <ProductCard key={4} />,
    <ProductCard key={5} />,
    <ProductCard key={6} />,
    <ProductCard key={7} />,
    <ProductCard key={8} />,
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + products.length) % products.length
    );
  };

  const currentProducts = products.slice(currentIndex, currentIndex + 4);
  return (
    <div className="mt-14 px-6 md:px-8">
      <TitlteSecrion
        title="Nos produits les plus vendus"
        postTitle="Nos produits"
      />
      <section className="relative w-full mx-auto overflow-hidden">
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5"> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:flex lg:justify-center gap-4 mt-10 mb-5  overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {currentProducts.map((product, index) => (
              <motion.div
                key={currentIndex + index}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                className="product-card">
                {product}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2">
          <CiSquareChevLeft className="text-3xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2">
          <CiSquareChevRight className="text-3xl" />
        </button>
      </section>
      <Separator classname="h-3 mt-12" />
    </div>
  );
}
