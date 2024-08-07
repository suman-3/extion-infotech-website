"use client";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WhyChooseUsContent } from "@/constant/why-choose-us";

export const WhyChooseUs = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const plugin2 = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5 gap-y-10 pl-1 md:pl-3 lg:pl-5">
      <div className="flex items-start flex-col gap-7 lg:gap-9">
        <div className="flex flex-col gap-5 lg:gap-8">
          <h1 className="text-3xl md:text-3xl lg:text-5xl text-center md:text-left font-semibold animate-pulse bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text tracking-tight">
            Why Our Customers Choose Working With Us
          </h1>
          <p
            className={cn(
              GeistMono.variable,
              "font-mono text-center md:text-left font-medium text-sm lg:text-[1rem]"
            )}
          >
            At Extion Infotech, we don’t just meet expectations—we redefine them. Committed to excellence and innovation, we offer client-focused solutions that foster a collaborative journey built on trust, reliability, and exceptional success. Partner with Extion Infotech for a transformative experience that turns your aspirations into tangible achievements.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Carousel plugins={[plugin2.current]} className="hidden md:block">
            <CarouselContent>
              {WhyChooseUsContent.map((item, index) => {
                return (
                  <CarouselItem
                  key={index}
                  >
                    <div className="flex gap-3">
                      <h1 className="text-5xl font-semibold">{item.number}</h1>
                      <div className="flex flex-col gap-3">
                        <h1 className="text-3xl">{item.title}</h1>
                        <p className="text-md">{item.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/Coder.svg"
          alt="coder.svg"
          width={400}
          height={400}
          className="hidden md:block w-100 h-100 object-contain pointer-events-none select-none"
        />
        <Image
          src="/Coder.svg"
          alt="coder.svg"
          width={190}
          height={190}
          className="w-50 h-50 object-contain pointer-events-none select-none block md:hidden"
        />
      </div>
      <div className="px-4 py-2 mb-3 block md:hidden">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {WhyChooseUsContent.map((item, index) => {
              return (
                <CarouselItem
                key={index}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <h1 className="text-2xl font-semibold">{item.number}</h1>
                      <h1 className="text-xl">{item.title}</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
