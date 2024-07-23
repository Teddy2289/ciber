import React from "react";
import { Wrapper } from "../wrapper";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import Link from "next/link";

export default function NewArrival() {
  return (
    <Wrapper classname="w-full">
      <div className="w-full flex flex-col gap-10">
        <TitlteSecrion postTitle="featured" title="new arrival" />
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="w-full lg:w-1/2 bg-black flex flex-col justify-end items-start p-9 lg:p-8 lg:h-[600px] rounded-sm bg-no-repeat bg-bottom bg-contain"
            style={{ backgroundImage: "url('/images/ps5.png')" }}>
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <h4 className="font-semibold text-3xl lg:text-2xl leading-8 text-white">
                PlayStation 5
              </h4>
              <p className="text-white text-md lg:text-sm leading-5 mt-4 mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link
                href="/"
                className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white text-xl">
                shop now
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-between w-1/2 h-full">
            <div className="bg-[#0D0D0D] h-[286px] px-6 flex flex-row  w-full rounded-sm">
              <div className="flex flex-col justify-end w-[55%] py-6">
                <h4 className="font-semibold text-2xl leading-8 text-white">
                  Women’s Collections
                </h4>
                <p className="text-white text-sm leading-5 mt-4 mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  href="/"
                  className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                  shop now
                </Link>
              </div>
              <div
                className="bg-contain bg-center  w-[45%] h-full bg-no-repeat"
                style={{ backgroundImage: "url('/images/pc.png')" }}
              />
            </div>
            <div className="flex flex-row gap-8 items-end w-full h-[286px]">
              <div
                className="w-1/2 bg-contain bg-black h-full bg-center	  bg-no-repeat px-6 flex flex-col justify-end py-6 rounded-sm"
                style={{ backgroundImage: "url('/images/audio.png')" }}>
                <div className="flex flex-col justify-end w-full">
                  <h4 className="font-semibold text-2xl leading-8 text-white">
                    Speakers
                  </h4>
                  <p className="text-white text-sm leading-5 mt-2 mb-2">
                    Amazon wireless speakers
                  </p>
                  <Link
                    href="/"
                    className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                    shop now
                  </Link>
                </div>
              </div>
              <div
                className="w-1/2 bg-contain bg-black bg-center h-[286px] bg-no-repeat px-6 flex flex-col justify-end py-6 rounded-sm"
                style={{ backgroundImage: "url('/images/mac.png')" }}>
                <div className="flex flex-col justify-end w-full">
                  <h4 className="font-semibold text-2xl leading-8 text-white">
                    Perfume
                  </h4>
                  <p className="text-white text-sm leading-5 mt-2 mb-2">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Link
                    href="/"
                    className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
