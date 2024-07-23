import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa6";
import { Wrapper } from "../wrapper";

export default function Info() {
  return (
    <Wrapper classname="flex flex-col lg:flex-row bg-gray justify-between px-6 lg:px-2 py-2 lg:mx-32 mt-14 lg:mt-20  w-full gap-4">
      <div className="flex flex-row justify-between items-center w-full lg:w-1/4 gap-2">
        <FaStar className="text-5xl lg:text-[40px]" />
        <p className="text-md lg:text-sm w-4/5">
          24 ans d&apos;expertise à votre service
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full lg:w-1/4 gap-2">
        <FiShoppingBag
          className="text-5xl lg:text-[50px]"
          width={200}
          height={200}
        />
        <p className="text-md lg:text-sm w-4/5">
          {" "}
          + de 15 000 références choisies par nos experts
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full lg:w-1/4 gap-2">
        <FiPackage
          className="text-5xl lg:text-[60px]"
          width={200}
          height={200}
        />
        <p className="text-md lg:text-sm w-4/5">
          Livraison en magasin offerte dès 200 euros d&apos;achat
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full lg:w-1/4 gap-2">
        <FaHeadphones
          className="text-5xl lg:text-[40px]"
          width={200}
          height={200}
        />

        <p className="text-md lg:text-sm w-4/5">
          Une équipe clientèle à votre écoute
        </p>
      </div>
    </Wrapper>
  );
}
