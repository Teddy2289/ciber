"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa";

export default function PromotionSlide() {
  return (
    <div className="w-full lg:w-4/5 relative z-[5] pb-6 lg:pb-unset">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}>
        {Array.from({ length: 4 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black lg:h-96 flex flex-col lg:flex-row gap-10">
              <div className="flex flex-col items-center lg:items-start lg:w-1/2 px-10 py-12 lg:px-16 lg:py-14">
                <div className="flex flex-row gap-6 items-center">
                  <FaApple width={100} className="text-white" height={100} />
                  <span className="font-base font-normal leading-6 text-white">
                    iPhone 14 Series
                  </span>
                </div>
                <h2 className="text-4xl text-center lg:text-left font-semibold leading-tight text-white mt-5 mb-6 lg:max-w-[210px]">
                  Jusqu’à 10% de réduction{" "}
                </h2>
                <Link
                  href="/"
                  className="flex flex-row gap-2 items-center text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-[70%] after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                  Acheter maintenant
                  <IoIosArrowForward className="text-white" />
                </Link>
              </div>
              <div className="lg:w-1/2 scale-90 bg-hero" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
