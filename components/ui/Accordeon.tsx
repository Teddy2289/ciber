"use client";
import { Accordion } from "@szhsin/react-accordion";
import React from "react";
import { Category, CategoryProps } from "@/types";
import { category } from "@/utils";
import AccordionItem from "./AccordionItem";
import Link from "next/link";

export default function Accordeon() {
  return (
    <div className="w-full">
      <Accordion
        className="w-full bg-gray-200"
        transition
        transitionTimeout={200}>
        {category.map((cat) => (
          <div key={cat.category_name} className="w-64">
            <AccordionItem header={cat.category_name}>
              <ul>
                {cat.subcategories.map((subcat) => (
                  <div
                    key={subcat.name}
                    className="flex flex-col gap-2 px-2 text-md font-serif">
                    <Link href="#">{subcat.name}</Link>
                    <hr />
                  </div>
                ))}
              </ul>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
}
