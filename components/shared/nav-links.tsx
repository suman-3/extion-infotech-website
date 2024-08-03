"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
const navlinks = [
  {
    id: 1,
    label: "About",
    href: "#about",
  },
  {
    id: 1,
    label: "Courses",
    href: "#courses",
  },
  {
    id: 1,
    label: "Internship",
    href: "#internship",
  },
  {
    id: 1,
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: 1,
    label: "Blogs",
    href: "#blogs",
  },
  {
    id: 1,
    label: "Contact Us",
    href: "#contactus",
  },
];

export const NavLinks = ({className}:{className: string}) => {
  return (
    <div className={cn("flex items-center justify-between gap-10", className)}>
      {navlinks.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.id}
            className="capitalize font-semibold"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
