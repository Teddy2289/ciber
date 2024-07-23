import Image from "next/image";
import { Wrapper } from "../wrapper";

const services = [
  {
    title: "Service client 24/7",
    description: "Service client 24/7 convivial",
    image: "/images/Services.png",
  },
  {
    title: "Garantie de remboursement",
    description: "Nous rembourserons l’argent dans les 30 jours",
    image: "/images/guaranty.png",
  },
];

export const Textui = () => {
  return (
    <Wrapper classname="w-full mt-8 lg:mt-14">
      <div className="flex flex-col gap-8  lg:flex-row justify-between">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt={service.title}
              src={service.image}
              width={80}
              height={80}
            />
            <h2 className="font-semibold text-xl text-black leading-8 mt-6">
              {service.title}
            </h2>
            <p className="font-normal text-base text-black leading-6 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
