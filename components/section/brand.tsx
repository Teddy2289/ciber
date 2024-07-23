"use client";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import { Wrapper } from "../wrapper";

export default function Brand() {
  const brands = [
    { name: "Brand 1", image: "/images/samsung.png" },
    { name: "Brand 2", image: "/images/asus.png" },
    { name: "Brand 3", image: "/images/sony.png" },
    { name: "Brand 1", image: "/images/samsung.png" },
    { name: "Brand 2", image: "/images/asus.png" },
    { name: "Brand 3", image: "/images/sony.png" },
  ];
  return (
    <div className="max-w-2xl gl_brands mt-14 mb-14">
      <Swiper
        navigation={true}
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper w-full">
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-slide">
              <Image
                width={100}
                height={100}
                src={brand.image}
                alt={brand.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
