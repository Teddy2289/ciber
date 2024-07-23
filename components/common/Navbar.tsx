import { NavLink } from "@/Typography";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row gap-5 items-center mr-[70px]">
      <NavLink href="/nouveaute">Nouveauté</NavLink>
      <NavLink href="/product">Nos produit</NavLink>
      <NavLink href="/promotions">Promotions</NavLink>
      <NavLink href="/service">Services</NavLink>
    </div>
  );
}
