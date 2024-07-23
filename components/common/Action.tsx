import { NavLink } from "@/Typography";
import { FiShoppingBag } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";

import { LuUser2 } from "react-icons/lu";

import React from "react";

export default function Action() {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <NavLink classname="flex flex-col gap-2 items-center" href="/login">
          <LuUser2 />
          <span className="font-normal text-sm leading-normal">Compte</span>
        </NavLink>
        <NavLink href="/panier" classname="flex flex-col gap-2 items-center">
          <FiShoppingBag />
          <span className="font-normal text-sm leading-normal">Panier</span>
        </NavLink>
        <NavLink href="/contact" classname="flex flex-col gap-2 items-center">
          <FiHelpCircle />
          <span className="font-normal text-sm leading-normal">
            Nous contacter
          </span>
        </NavLink>
      </div>
    </div>
  );
}
