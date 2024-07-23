"use client";

import { IoSearchOutline } from "react-icons/io5";

export const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-gray-500 rounded-full py-2 px-3 flex flex-row gap-2 w-fit justify-between mr-[70px] bg-transparent">
      <input
        type="search"
        placeholder="recherch"
        className="border-none text-sm outline-none w-4/5 placeholder:capitalize bg-none text-gray-600"
        style={{ backgroundColor: "transparent" }}
      />
      <button className="w-fit">
        <IoSearchOutline />
      </button>
    </form>
  );
};
