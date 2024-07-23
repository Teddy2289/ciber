import React from "react";
import { Wrapper } from "../wrapper";
import TitlteSecrion from "@/Typography/TitlteSecrion";
import Link from "next/link";

export default function NewArrival() {
  return (
    <div className="w-full flex flex-col gap-10 mt-14 px-6 md:px-8">
      <TitlteSecrion postTitle="En vedette" title="Nouveaux arrivés" />
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row gap-8">
        <div
          className="w-full lg:w-1/2 bg-black flex flex-col justify-end items-start p-9 lg:p-8 md:h-[300px] lg:h-[600px] rounded-sm bg-no-repeat bg-bottom bg-contain"
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
              Acheter maintenant
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-between w-full lg:w-1/2  h-full">
          <div
            className="bg-[#0D0D0D] md:h-[300px] lg:h-[286px] p-8 lg:px-6  flex flex-row  w-full rounded-sm"
            // style={{ backgroundImage: "url('/images/pc.png')" }}
          >
            <div className="flex flex-col gap-3 justify-end w-full lg:w-[55%] py-6">
              <h4 className="font-semibold text-3xl lg:text-2xl leading-8 text-white">
                Titre
              </h4>
              <p className="text-white text-md lg:text-sm leading-5 mt-4 mb-4">
                Sous titre
              </p>
              <Link
                href="/"
                className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                Acheter maintenant
              </Link>
            </div>
            <div
              className="bg-contain bg-center hidden lg:block lg:w-[45%] h-full bg-no-repeat"
              style={{ backgroundImage: "url('/images/pc.png')" }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-end w-full h-[286px]">
            <div
              className="w-full lg:w-1/2 bg-contain bg-black h-full  bg-center	  bg-no-repeat p-8 lg:px-6 flex flex-col justify-end lg:py-6 rounded-sm"
              style={{ backgroundImage: "url('/images/audio.png')" }}>
              <div className="flex flex-col gap-4 lg:gap-unset md:h-[300px] lg:h-auto justify-end w-full">
                <h4 className="font-semibold text-3xl lg:text-2xl leading-8 text-white">
                  Speakers
                </h4>
                <p className="text-white text-md lg:text-sm leading-5 mt-2 mb-2">
                  Amazon wireless speakers
                </p>
                <Link
                  href="/"
                  className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                  Acheter maintenant
                </Link>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 bg-contain bg-black bg-center lg:h-[286px] bg-no-repeat p-8 lg:px-6 flex flex-col justify-end lg:py-6 rounded-sm"
              style={{ backgroundImage: "url('/images/mac.png')" }}>
              <div className="flex flex-col gap-4 lg:gap-unset justify-end w-full md:h-[300px] lg:h-auto">
                <h4 className="font-semibold text-3xl lg:text-2xl leading-8 text-white">
                  Titre
                </h4>
                <p className="text-white text-md lg:text-sm leading-5 mt-2 mb-2">
                  Sous titre
                </p>
                <Link
                  href="/"
                  className=" text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-full after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white">
                  Acheter maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
