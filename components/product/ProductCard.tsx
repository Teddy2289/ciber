/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

export default function ProductCard() {
  return (
    // <div classNameName="w-75 px-4 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    //   <a href="#">
    //     <Image
    //       src={mac}
    //       alt="Product"
    //       classNameName="h-60 w-70 object-contain rounded-t-xl"
    //     />
    //     <div classNameName="px-4 py-1 w-55">
    //       <span classNameName="text-gray-400 mr-3 uppercase text-xs">Brand</span>
    //       <p classNameName="text-lg font-bold text-black truncate block capitalize">
    //         Product Name
    //       </p>
    //       <div classNameName="flex items-center">
    //         <p classNameName="text-lg font-semibold text-secondary2 cursor-auto my-3">
    //           $149
    //         </p>
    //         <del>
    //           <p classNameName="text-sm text-gray-600 cursor-auto ml-2">$199</p>
    //         </del>
    //         <div classNameName="ml-auto">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             fill="currentColor"
    //             classNameName="bi bi-bag-plus"
    //             viewBox="0 0 16 16">
    //             <path
    //               fill-rule="evenodd"
    //               d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
    //             />
    //             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </a>
    // </div>

    <div className="relative lg:m-10 w-full lg:w-full max-w-xs lg:max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#" className="flex justify-center">
        <img
          className="h-50 w-56 lg:h-60 lg:w-52  rounded-t-lg object-contain"
          src="./images/mac.png"
          alt="product image"
        />
      </a>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        en vente
      </span>
      <div className="mt-4 px-5 pb-4 mb-4">
        <a href="#">
          <h5 className="text-sm lg:text-xl font-semibold tracking-tight text-slate-900">
            Product Name
          </h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 text-[13px]  lg:text-xs font-semibold">
            5.0
          </span>
          <TiStarFullOutline className="text-secondary" />
          <TiStarFullOutline className="text-secondary" />
          <TiStarFullOutline className="text-secondary" />
        </div>
        <div className="flex items-center justify-between">
          <p className="flex items-center ">
            <span className="text-1xl lg:text-3xl font-bold text-gray-600">
              $249
            </span>
            <span className="text-1xl lg:text-sm  text-slate-900 line-through">
              $299
            </span>
          </p>
          <a
            href="#"
            className="flex items-center rounded-md lg:border-2 px-3 py-2 text-center text-[25px] font-medium text-black hover:text-secondary hover:focus:outline-none focus:ring-4 focus:ring-slate-300">
            <FaCartPlus />
          </a>
        </div>
      </div>
    </div>
  );
}
