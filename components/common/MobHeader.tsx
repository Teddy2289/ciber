"use client";
import { NavLink } from "@/Typography";
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { HiMiniXMark } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { SearchBar } from "./SearchBar";

export const MobHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row">
      <div className="flex flex-row gap-4">
        <NavLink href="/">
          <LuUser2 className="text-3xl" />
        </NavLink>
        <NavLink href="/">
          <FiShoppingBag className="text-3xl" />
        </NavLink>
        <RxHamburgerMenu className="text-3xl" onClick={() => setOpen(!open)} />
        <div
          className={`fixed w-full shadow-md pt-10 top-0 bg-white z-40 h-screen left-0 right-0 pb-10 flex flex-col justify-center  items-center ${
            open ? "translate-x-0" : "translate-x-[-100%]"
          }`}>
          <HiMiniXMark
            className="text-5xl absolute top-3 left-4"
            onClick={() => setOpen(!open)}
          />
          <div className="flex flex-col gap-2 items-center ">
            <NavLink href="/nouveaute">Nouveauté</NavLink>
            <NavLink href="/product">Nos produit</NavLink>
            <NavLink href="/promotions">Promotions</NavLink>
            <NavLink href="/service">Services</NavLink>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
