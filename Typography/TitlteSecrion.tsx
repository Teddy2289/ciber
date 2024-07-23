import React from "react";
import { TbRectangleVerticalFilled } from "react-icons/tb";

import Image from "next/image";
interface TitleProps {
  title: string;
  postTitle: string;
}
export default function TitlteSecrion({ title, postTitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <TbRectangleVerticalFilled className="text-secondary text-[40px]" />
        <span className="capitalize text-secondary text-base font-semibold leading-6">
          {postTitle}
        </span>
      </div>
      <h2 className="capitalize text-black text-4xl font-semibold leading-[48px]">
        {title}
      </h2>
    </div>
  );
}
