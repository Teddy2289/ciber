"use client";
import { Category } from "@/types";
import {
  IoChevronForwardCircleOutline,
  IoChevronDownCircleOutline,
} from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";
import { SubSubCategory } from "./SubSubCategory";

export const Subcategory = ({
  category_name,
  link,
  subcategories,
}: Category) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Link
      href={link}
      className="cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="flex justify-between items-center w-full ">
        <span>{category_name}</span>
        <div className="ml-auto">
          {isHover ? (
            <IoChevronForwardCircleOutline
              className="text-[20px]"
              width={20}
              height={20}
            />
          ) : (
            <IoChevronDownCircleOutline
              className="text-[20px]"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
      {isHover && <SubSubCategory subcategory={subcategories} />}
    </Link>
  );
};
