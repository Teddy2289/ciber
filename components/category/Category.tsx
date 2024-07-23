import { Category, CategoryProps } from "@/types";
import { Subcategory } from "./SubCategory";

export const Categories = ({ category }: CategoryProps) => {
  return (
    <div className="relative flex flex-col gap-4  w-full  lg:w-fit z-10">
      {category.map((cat: Category, index: number) => (
        <Subcategory
          category_name={cat.category_name}
          link={cat.link}
          subcategories={cat.subcategories}
          key={index}
        />
      ))}
    </div>
  );
};
