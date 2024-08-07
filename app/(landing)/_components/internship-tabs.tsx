"use client";

import Internshipcards from "@/components/internships-cards";
import { Tabs } from "@/components/ui/tabs";
import { ai, all, cloud, cyber, ui } from "@/constant/projects";

export function InternShipsTabs() {
  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <div className="w-full h-full">
          <All />
        </div>
      ),
    },
    {
      title: "AI & App",
      value: "ai",
      content: (
        <div className="w-full h-full">
          <AiApp />
        </div>
      ),
    },
    {
      title: "Cloud",
      value: "cloud",
      content: (
        <div className="w-full h-full">
          <Cloud />
        </div>
      ),
    },
    {
      title: "Ui/Ux",
      value: "design",
      content: (
        <div className="w-full h-full">
          <Design />
        </div>
      ),
    },
    {
      title: "Cyber Security",
      value: "cyber",
      content: (
        <div className="w-full h-full">
          <Cyber />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full h-full flex flex-col gap-5">
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-center md:text-left font-semibold animate-pulse bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text tracking-tight">
        Opportunities Point
          <span className="md:ml-2 bg-black dark:bg-white text-background inline-block px-3 py-1 md:py-2 rounded-md">
          Internships
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
        At Extion Infotech, we are committed to fostering the growth and development of aspiring professionals. Our internship programs are designed to provide hands-on experience, mentorship, and exposure to real-world projects, equipping you with the skills and knowledge needed to excel in the tech industry.
        </p>
      </div>
      <div className="h-full max-w-6xl mx-auto w-full mb-6">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

const All = () => {
  return <Internshipcards data={all} />;
};
const Design = () => {
  return <Internshipcards data={ui} />;
};

const AiApp = () => {
  return (
    <Internshipcards data={ai} />
  );
};
const Cloud = () => {
  return (
    <Internshipcards data={cloud} />
  );
};
const Cyber = () => {
  return (
    <Internshipcards data={cyber} />
  );
};
