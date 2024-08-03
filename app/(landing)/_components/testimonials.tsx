import { MovingCards } from "@/components/uianimation/moving-card";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { LucideIcon, MessageCircleIcon } from "lucide-react";
import React, { HTMLAttributes, ReactNode } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      content: "This looks so clean, love it!",
      name: "@_lic",
      image: "",
    },
    {
      content: "Nice, simple and sleek. I like it!",
      name: "@pfara",
      image: "",
    },
    {
      content:
        "I love it! It's clean and simple while still uses best practices, looks great and has great functionality!",
      name: "Annonymous",
      image: "",
    },
    {
      content:
        "The website is so clean and good. Surprising that it was just made by one person.",
      name: "@avinashboi",
      image: "",
    },
    {
      content:
        "Very cool website, also love the fact that it's open source because the people using it can contribute and make it better!",
      name: "@totallyachicken",
      image: "",
    },
  ];

  return (
    <div className="text-center">
      <Card
        icon={MessageCircleIcon}
        subheading="Testimonials"
        heading="Clients & Interns Testmonials"
        description=""
      >
        <MovingCards items={testimonials} direction="left" speed="normal" />
      </Card>
    </div>
  );
};

function Card({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): JSX.Element {
  return (
    <div className={cn("px-6 py-12 md:py-16", className)} {...props}>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <p
          className={cn(
            GeistMono.variable,
            "text-muted-foreground text-lg font-mono"
          )}
        >
          {subheading}
        </p>
      </div>
      <h2 className="mb-2 text-2xl lg:text-4xl font-semibold">{heading}</h2>
      {props.children}
    </div>
  );
}
