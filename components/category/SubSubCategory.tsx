import { SubSubcategoryProps, Subcategory } from "@/types";
import Link from "next/link";

export const SubSubCategory = ({ subcategory }: SubSubcategoryProps) => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap absolute top-[-10px] left-40 bg-white shadow-md p-5 w-[75vw] 2xl:w-[60vw]">
      {subcategory.slice(0, 4).map((cat: Subcategory, index: number) => (
        <div key={index} className="flex flex-col w-1/4">
          <h2 className="font-bold text-lg uppercase text-secondary mb-3">
            {cat.name}
          </h2>
          <div className="flex flex-col gap-2">
            {cat.subcategories
              .slice(0, 10)
              .map((subcat: Subcategory, index) => (
                <Link
                  href={subcat.link}
                  key={index}
                  className="capitalize font-normal text-black hover:text-secondary text-sm leading-[24px] w-fit relative after:content-[''] after:absolute after:bottom-[-1px] after:block after:w-0 after:bg-secondary after:h-[1px] hover:after:w-full transition-all ease-in-out after:transition-all after:ease-in-out after:duration-200">
                  {subcat.name}
                </Link>
              ))}
          </div>
          <Link href={cat.link} className="font-medium mt-4 text-sm">
            Voir +
          </Link>
        </div>
      ))}
    </div>
  );
};
