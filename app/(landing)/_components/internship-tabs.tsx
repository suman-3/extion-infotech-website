"use client";

import Internshipcards from "@/components/internships-cards";
import { Tabs } from "@/components/ui/tabs";
import { aiml, webDev } from "@/constant/projects";

export function InternShipsTabs() {
  const tabs = [
    {
      title: "Core",
      value: "product",
      content: (
        <div className="w-full h-full">
          <Core />
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full h-full">
          <Design />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[47rem] md:h-[30rem] [perspective:1000px] relative  flex flex-col max-w-6xl mx-auto w-full items-start justify-start mb-8 lg:mb-12">
      <Tabs tabs={tabs} />
    </div>
  );
}
const Core = () => {
  return <Internshipcards data={webDev} />;
};
const Design = () => {
  return <Internshipcards data={aiml} />;
};

const Branding = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      hi
    </div>
  );
};
const Management = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      hi
    </div>
  );
};
const TaskForce = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      hi
    </div>
  );
};
