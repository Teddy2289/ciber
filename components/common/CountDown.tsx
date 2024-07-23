"use client";

import { useCountDown } from "@/utils/hooks/useCountDown";
import React from "react";

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const timeLeft = useCountDown(targetDate);

  if (timeLeft === null) {
    return null;
  }

  return (
    <div>
      {timeLeft.days ||
      timeLeft.hours ||
      timeLeft.minutes ||
      timeLeft.seconds ? (
        <div className="flex flex-row justify-center lg:justify-start gap-6 items-center">
          <div className="flex flex-col justify-center items-center lg:px-7 lg:py-6  lg:bg-white rounded-full gap-4 lg:gap-0">
            <span className="lg:text-base text-xl font-semibold text-secondary leading-6">
              {timeLeft.days}
            </span>
            <span className="text-xs font-normal leading-4 capitalize text-white lg:text-black">
              jours
            </span>
          </div>
          <div className="flex flex-col justify-center items-center lg:px-7 lg:py-6  lg:bg-white rounded-full gap-4 lg:gap-0">
            <span className="lg:text-base text-xl font-semibold text-secondary leading-6">
              {timeLeft.hours}
            </span>
            <span className="text-xs font-normal leading-4 capitalize text-white lg:text-black">
              heures
            </span>
          </div>
          <div className="flex flex-col justify-center items-center lg:px-5 lg:py-6  lg:bg-white rounded-full gap-4 lg:gap-0">
            <span className="lg:text-base text-xl font-semibold text-secondary leading-6">
              {timeLeft.minutes}
            </span>
            <span className="text-xs font-normal leading-4 capitalize text-white lg:text-black">
              minutes
            </span>
          </div>
          <div className="flex flex-col justify-center items-center lg:px-5 lg:py-6  lg:bg-white rounded-full gap-4 lg:gap-0">
            <span className="lg:text-base text-xl font-semibold text-secondary leading-6">
              {timeLeft.seconds}
            </span>
            <span className="text-xs font-normal leading-4 capitalize text-white lg:text-black">
              secondes
            </span>
          </div>
        </div>
      ) : (
        <span className="flex flex-col justify-center items-center lg:px-5 lg:py-6  lg:bg-white rounded-full gap-4">
          <span className="lg:text-base text-xl font-semibold text-secondary leading-6">
            Temps écoulé!
          </span>
        </span>
      )}
    </div>
  );
};
