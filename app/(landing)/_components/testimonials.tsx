import { MovingCards } from "@/components/uianimation/moving-card";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { LucideIcon, MessageCircleIcon } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      content: " As the founder, I witnessed their innovative solutions propel our business. They don't just deliver; they craft impactful experiences. Their dedication and expertise make them an invaluable partner. Highly recommended.",
      name: "@Mangalam Gupta",
      image: "",
    },
    {
      content: "Sen-X has been a game-changer for us. As CTO and CFO, I've witnessed firsthand their innovative tech solutions and financial tools. Their team's expertise and dedication have propelled our growth. They don't just meet expectations; they exceed them. Sen-X is the partner you need for success.",
      name: "@Rishab Gupta",
      image: "",
    },
    {
      content:
        "Sen-X's Cyber Security internship is a hands-on journey into the world of cutting-edge defense strategies. The mentorship is stellar, fostering innovation and practical skills. Highly recommend for those ready to dive into real-world cybersecurity challenges.",
      name: "@Sharyu Uchade",
      image: "",
    },
    {
      content:
        "The website is so clean and good. Surprising that it was just made by one person.",
      name: "avinashboi",
      image: "",
    },
    {
      content:
        "Very cool website, also love the fact that it's open source because the people using it can contribute and make it better!",
      name: "anonymous",
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
