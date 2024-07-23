"use client";
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronRight } from "react-icons/fa";

interface AccordionItemProps {
  header: React.ReactNode;
}

const AccordionItem = ({ header, ...rest }: AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <span className="capitalize text-secondary2"> {header}</span>
        <FaChevronRight
          className={`ml-auto text-secondary2 transition-transform duration-200 ease-out ${
            isEnter && "rotate-90"
          }`}
        />
      </>
    )}
    className="px-4"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-300 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export default AccordionItem;
