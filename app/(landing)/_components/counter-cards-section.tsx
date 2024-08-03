import React from "react";
import { MdManageAccounts } from "react-icons/md";

import NumberTicker from "@/components/uianimation/number-ticker";
import { Trophy, UserPlus } from "lucide-react";
import { AiOutlineAim } from "react-icons/ai";

import { cn } from "@/lib/utils";
import CardSpotlight from "./border-gradient-card";
import GridPattern from "./grid-pattern";

const Countercard = () => {
  const CardNumberClass = "text-lg md:text-2xl font-bold";
  const cardDescriptionClass = "text-sm sm:text-md w-full flex text-center";
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-2 sm:gap-3 md:gap-5 lg:gap-7 px-5 py-7 border rounded-lg relative">
      <CardSpotlight>
        <div className="flex flex-col gap-[3px] md:gap-1 items-center justify-center">
          <MdManageAccounts className="size-12 shrink-0" />
          <h1 className="text-lg md:text-2xl font-bold">
            <NumberTicker value={4000} stiffnessValue={300} /> +
          </h1>
          <p className={cn("text-sm sm:text-md", cardDescriptionClass)}>
            Active Interns
          </p>
        </div>
      </CardSpotlight>
      <CardSpotlight>
        <div className="flex flex-col gap-[3px] items-center justify-center mt-3 lg:mt-0">
          <Trophy className="size-10 lg:size-12 shrink-0" />
          <h1 className="text-lg md:text-2xl font-bold">
            <NumberTicker value={23} stiffnessValue={70} /> +
          </h1>
          <p className={cn("text-sm sm:text-md", cardDescriptionClass)}>
            Trailblazing <br className="lg:hidden" /> Achievements
          </p>
        </div>
      </CardSpotlight>
      <CardSpotlight>
        <div className="flex flex-col gap-1 items-center justify-center">
          <UserPlus className="size-10 lg:size-12 shrink-0" />
          <h1 className="text-lg md:text-2xl font-bold">
            <NumberTicker value={500} stiffnessValue={200} /> +
          </h1>
          <p className={cn("text-sm sm:text-md", cardDescriptionClass)}>
            Happy Success Stories
          </p>
        </div>
      </CardSpotlight>
      <CardSpotlight>
        <div className="flex flex-col gap-1 items-center justify-center">
          <AiOutlineAim className="size-12 shrink-0" />
          <h1 className={cn("", CardNumberClass)}>
            <NumberTicker value={28} stiffnessValue={70} /> +
          </h1>
          <p className={cn("text-sm sm:text-md", cardDescriptionClass)}>
            Collective Expertise
          </p>
        </div>
      </CardSpotlight>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-40"
        )}
      />
    </div>
  );
};

export default Countercard;
