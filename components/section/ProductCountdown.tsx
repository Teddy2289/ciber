import Button from "../common/Button";
import { Countdown } from "../common/CountDown";
import { Wrapper } from "../wrapper";

export const ProductCountdown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);
  return (
    <div className="w-full  bg-black px-14 gap-6 flex flex-row overflow-hidden">
      <div className="flex flex-col py-16 justify-between w-1/2 gap-3">
        <p className="text-green font-semibold text-base leading-5 capitalize mb-8 text-secondary">
          categories
        </p>
        <h2 className="capitalize text-white font-semibold leading-snug text-5xl mb-8">
          Enhance Your Music Experience
        </h2>
        <Countdown targetDate={targetDate} />

        <Button
          Text="Acheter maintenant"
          className="bg-secondary hover:bg-secondary2 relative px-12 py-2 rounded-sm text-white w-fit capitalize text-base font-medium leading-6  mt-10"
        />
      </div>
      <div
        className="w-1/2 bg-no-repeat bg-center bg-contain "
        style={{ backgroundImage: "url('/images/JBL.png')" }}
      />
    </div>
  );
};
