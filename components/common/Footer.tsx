/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Wrapper } from "../wrapper";
import Logo from "./Logo";
import { Separator } from "../ui";
import Button from "./Button";

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-black flex text-white flex-col justify-between items-center pt-[50px] px-32 mt-[50px]">
        <div className="Linkx-8 grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-1xl">Abonnement exclusif</h3>
            <Link href="#" className="text-sm text-slate-400">
              Obtenez 10% de rabais sur vos Linkremières commandes
            </Link>
            <input
              type="text"
              name="Linkrice"
              id="Linkrice"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="email"
            />
            <textarea className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <Button
              Text="Nous contacter"
              className="transition duration-300 ease-in-out bg-secondary hover:bg-secondary2 px-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-1xl">Support</h3>
            <Link href="#" className="text-sm text-slate-400">
              Lorem iLinksum dolor sit amet consectetur adiLinkisicing elit. Ea,
              molestiae?
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              exclusive@gmail.com.
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              +88015-88888-9999
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-1xl">
              Compte
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              Connexion / S'inscrire
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              Liste de cadeaux
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              Panier
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-1xl">Lien rapide</h3>
            <Link href="#" className="text-sm text-slate-400">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              Conditions générales d'utilisation
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              FAQ
            </Link>
            <Link href="#" className="text-sm text-slate-400">
              Contacte
            </Link>
          </div>
        </div>
        <Separator classname="w-full mt-10 h-5" />
        <div className="flex items-center justify-between py-4">
          <Link href="#" className="text-sm text-slate-400">
            Copyright © 2024. Tous droits réservés.
          </Link>
          <Logo />
        </div>
      </div>
    </>
  );
};
