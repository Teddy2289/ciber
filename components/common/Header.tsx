"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Action from "./Action";
import { SearchBar } from "./SearchBar";
import { MobHeader } from "./MobHeader";

export default function Header() {
  return (
    <>
      <div className="bg-black w-full p-2 text-center z-20">
        <motion.div
          className="overflow-hidden whitespace-nowrap"
          style={{ display: "flex", alignItems: "center" }}>
          <motion.p
            className="text-white text-sm"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ whiteSpace: "nowrap" }}>
            💻 Promotions exclusives - jusqu&lsquo;à 50% de réduction sur une
            sélection d&lsquo;articles ! 💻 Livraison rapide & support client
            24/7 !
          </motion.p>
        </motion.div>
      </div>
      <div className="hidden lg:flex items-center justify-center mx-auto bg-white rounded-full px-10 pb-[18px] py-[14px] mt-5 shadow-lg w-fit">
        <Logo />
        <Navbar />
        <SearchBar />
        <Action />
      </div>
      <div className="flex flex-row items-center w-full justify-between py-4 px-6 z-10 lg:hidden">
        <Logo />
        <MobHeader />
      </div>
    </>
  );
}
