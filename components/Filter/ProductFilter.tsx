import { Category, CategoryProps } from "@/types";
import React from "react";
import { Input, InputRanges } from "../ui";
import { IoSearchOutline } from "react-icons/io5";

export const ProductFilter = ({}) => {
  return (
    <div className="w-1/5 gap-5 flex flex-col shadow-2xl border rounded-2xl px-6 py-5">
      <Input
        title="référence"
        placeholder="mandona"
        type="search"
        name="search"
        icon={<IoSearchOutline />}
      />
      <Input
        title="marque"
        placeholder="marque"
        name="marque"
        isSelect
        lists={["mandona", "yes", "non", "gvng"]}
      />
      <Input
        title="taille de l'ecran"
        placeholder="taille de l'ecran"
        name="taille_ecran"
        isSelect
        lists={["mandona", "yes", "non", "gvng"]}
      />
      <Input
        title="processeur"
        placeholder="processeur"
        name="processeur"
        isSelect
        lists={["mandona", "yes", "non", "gvng"]}
      />
      <Input
        title="chipset graphique"
        placeholder="chipset graphique"
        name="chipset"
        isSelect
        lists={["mandona", "yes", "non", "gvng"]}
      />
      <Input
        title="système d'éxploitation"
        placeholder="systeme d'éxploitation"
        name="system_dexploitation"
        isSelect
        lists={["mandona", "yes", "non", "gvng"]}
      />
      <InputRanges min={0} max={100} title="mandona" name="mandona" />
    </div>
  );
};
