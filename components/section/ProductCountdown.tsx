import Button from "../common/Button";
import { Countdown } from "../common/CountDown";
import { Wrapper } from "../wrapper";

export const ProductCountdown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);
  return (
    <div className="w-full  bg-black px-8 lg:px-14 gap-6 md:px-16 md:py-10 flex flex-col lg:flex-row overflow-hidden mt-9">
      <div className="flex flex-col py-5 lg:py-16 justify-between md:items-center lg:items-start w-full lg:w-1/2 gap-5 lg:gap-3">
        <p className="text-green font-semibold text-center lg:text-left text-base leading-5 capitalize lg:mb-8 text-secondary">
          Catégories
        </p>
        <h2 className="capitalize text-white text-center lg:text-left font-semibold leading-snug text-2xl lg:text-5xl lg:mb-8 ">
          Améliorez votre expérience musicale{" "}
        </h2>
        <Countdown targetDate={targetDate} />

        <Button
          Text="Acheter maintenant"
          className="bg-secondary hover:bg-secondary2 relative px-12 py-2 rounded-sm text-white w-full md:w-fit lg:w-fit capitalize text-base font-medium leading-6  lg:mt-10"
        />
      </div>
      <div
        className="w-0 lg:w-1/2 bg-no-repeat bg-center bg-contain "
        style={{ backgroundImage: "url('/images/JBL.png')" }}
      />
    </div>
  );
};
