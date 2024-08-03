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
    label: "Services",
    href: "#services",
  },
];

export const NavLinks = ({className}:{className: string}) => {
  return (
    <div className={cn("flex items-center justify-between gap-7", className)}>
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
