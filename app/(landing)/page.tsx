import Navbar from "@/components/shared/navbar";
import {
  LayoutIcon,
  PersonStandingIcon,
  RocketIcon,
  StarsIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import Particles from "@/components/uianimation/particles";

import Hero from "./_components/hero";
import Highlight from "./_components/hightlight-box";
import Countercard from "./_components/counter-cards-section";
import { WhyChooseUs } from "./_components/why-choose-us";
import { Footer } from "@/components/shared/footer";
import { Testimonials } from "./_components/testimonials";
import { FAQ } from "./_components/faq-section";
import ServiceSection from "./_components/services-section";
import { InternShipsTabs } from "./_components/internship-tabs";

const LandingPage = () => {
  return (
    <>
      <div
        className="absolute inset-x-0 top-[200px] h-[400px] max-md:hidden "
        style={{
          background:
            "repeating-linear-gradient(to right, hsl(var(--border)), transparent 1px, transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--border)), transparent 1px, transparent 50px)",
        }}
      />

      <main className="container mb-[80px] top-[70px] relative max-w-[500px] sm:max-w-[700px] md:max-w-[900px]  lg:max-w-[1200px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <StarsIcon
              className="absolute -left-2 -top-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <StarsIcon
              className="absolute -bottom-2 -right-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <Hero />
          </div>
        </div>

        {/* About us section  */}
        <div className="mt-8 lg:mt-14 relative">
          <div className="container rounded-tl-lg border-x border-t py-8 md:py-10 lg:py-12 flex flex-col gap-y-3 sm:gap-y-4 lg:gap-y-6">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent flex items-center justify-center text-center pb-1 lg:pb-2">
              Trusted By 6000+ Interns Since 2023.
            </h2>
            <p
              className={cn(
                GeistMono.variable,
                "font-mono lg:py-2 text-center text-[14px] sm:text-sm lg:text-md"
              )}
            >
              At Extion Infotech, we bridge the gap between innovation and opportunity in technology. Our dual focus is on delivering cutting-edge IT solutions and providing valuable internship experiences for aspiring tech professionals.
              Our SEO-driven approach ensures our services reach a wide audience, while our internships provide practical experience and mentorship to help future tech leaders grow. We are committed to both technological excellence and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-4 border-b rounded-br-lg">
            <Highlight icon={RocketIcon} heading="Pioneers in Action.">
              
Stay ahead with Extion Infotech’s "First On Field" approach. Our proactive solutions ensure you’re always at the forefront, ready to seize opportunities before they emerge.
            </Highlight>
            <Highlight icon={LayoutIcon} heading="Seamless Accessibility.">
            Experience seamless connectivity with Extion Infotech's "Easy To Reach" ethos. Our streamlined communication channels ensure effortless and responsive collaboration.
            </Highlight>
            <Highlight
              icon={PersonStandingIcon}
              heading="Global Reach, Local Touch."
            >
              Enjoy the advantage of Extion Infotech's "Worldwide Services." We offer global solutions with a personalized, local touch, ensuring your business excels on an international scale.
            </Highlight>
            <Highlight
              icon={PersonStandingIcon}
              heading="Around-the-Clock Assurance."
            >
              With Extion Infotech's "24/7 Support," you can rest easy knowing our dedicated team is always at your service. We offer continuous support, providing you with peace of mind around the clock.
            </Highlight>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
          {/* <h2 className="absolute top-4 left-5 text-2xl">About us</h2> */}
        </div>

        {/* Countter card  */}
        <div className="mt-8 lg:mt-14">
          <Countercard />
        </div>

        {/* why coose us section */}
        <div className="mt-8 lg:mt-14">
          <WhyChooseUs />
        </div>
        <div className="mt-8 lg:my-20">
          <ServiceSection/>
        </div>
        <div className="mt-8 lg:my-20">
          <InternShipsTabs/>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 lg:mt-14 flex w-full items-center justify-center px-4">
          <FAQ />
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <Testimonials />
        </div>

        {/* Services we offer */}
        {/* <div className="mt-8 lg:mt-14">
       <OurServices/>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
