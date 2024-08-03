"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constant/faq-data";



export function FAQ() {


  
  return (
    <div className="flex flex-col w-full z-10 px-5 lg:px-10 overflow-hidden rounded-lg border bg-background md:shadow-xl py-10 lg:py-14">
      <h1 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
        Frequently Asked Questions (FAQs)
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full text-left grid grid-cols-1 md:grid-cols-4 gap-3"
      >
        {faqsData.map((faq) => (
          <AccordionItem
            value={`item-${faq.id}`}
            key={faq.id}
            className="col-span-1 md:col-span-2"
          >
            <AccordionTrigger className="text-left text-[1rem] md:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-left text-md">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
