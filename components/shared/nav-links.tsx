"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
const navlinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Courses",
    href: "#courses",
  },
  {
    label: "Internship",
    href: "#internship",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact Us",
    href: "/contactus",
  },
];

export const NavLinks = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex items-center justify-between gap-10", className)}>
      {navlinks.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={index}
            className="capitalize font-semibold"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
