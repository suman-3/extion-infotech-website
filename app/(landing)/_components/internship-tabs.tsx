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
    <section className="w-full h-full flex flex-col gap-5">
      <div className="flex flex-col space-y-5 items-center justify-center mt-5 md:mt-0 md:mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Streamline your business with our
          <span className="md:ml-2 bg-black dark:bg-white text-background inline-block px-3 py-1 md:py-2 rounded-md">
            Services
          </span>
        </h1>

        <p className="text-md font-semibold md:text-xl text-left md:text-center w-full md:w-[60%]">
          At Extion Infotech, our dedication to excellence shines through our
          meticulously crafted IT solutions. From innovative software
          development to comprehensive cybersecurity measures, we deliver robust
          and reliable services. In addition to our exceptional IT offerings,
          Extion Infotech is a nurturing ground for aspiring professionals.
          Discover our dynamic internship opportunities, designed to ignite your
          passion for technology and provide valuable hands-on experience.
        </p>
      </div>
      <div className="h-[47rem] md:h-[30rem] [perspective:1000px] relative  flex flex-col max-w-6xl mx-auto w-full items-start justify-start mb-8 lg:mb-12">
        <Tabs tabs={tabs} />
      </div>
    </section>
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
