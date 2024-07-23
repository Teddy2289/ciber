"use client";
import React, { useState } from "react";

interface InputProps {
  placeholder: string;
  type?: string;
  name: string;
  classname?: string;
  isSelect?: boolean;
  icon?: JSX.Element;
  title: string;
  lists?: any[];
}

export const Input = ({
  title,
  placeholder,
  type,
  classname,
  icon,
  isSelect,
  name,
  lists,
}: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-secondary font-bold text-lg uppercase">{title}</h2>
      <div className="flex gap-2 w-full border border-gray-500 rounded-full px-4  py-2">
        {isSelect ? (
          <select
            className={`border-none text-sm outline-none w-full placeholder:capitalize bg-none text-gray-600 py-1 ${classname}`}
            name={name}
            value={value}
            onChange={(e: any) => handleChange(e)}>
            {lists?.map((list, index) => (
              <option className="capitalize" value={list} key={index}>
                {list}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input
              type={type}
              placeholder={placeholder}
              className={`border-none text-sm outline-none w-[90%] placeholder:capitalize bg-none text-gray-600 ${classname}`}
              name={name}
              value={value}
              onChange={(e: any) => handleChange(e)}
            />
            {icon && (
              <button className="w-fit text-2xl text-gray-600">{icon}</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

interface InputRangeProps {
  min: number;
  max: number;
  title: string;
  name: string;
}

export const InputRanges = ({ min, max, name, title }: InputRangeProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(Number(e.target.value));
  };
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-secondary font-bold text-lg uppercase">{title}</h2>
      <div className="flex gap-2 w-full border border-gray-500 rounded-full px-4  py-2 relative">
        <div
          className="absolute top-0 bg-secondary flex justify-center items-center text-white w-fit p-2 h-full rounded-l-full rounded-tr-lg z-[1]"
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}>
          {value}
        </div>
        <input
          className="w-full z-10"
          type="range"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </div>
  );
};
