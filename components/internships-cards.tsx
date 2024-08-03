"use client";
import { Button } from "@/components/ui/button";

import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Internshipcards({data}:{data:any}) {
  return (
    <section
      className="w-full h-full flex-wrap flex flex-col items-center justify-start"
    >
      <div className="flex flex-wrap gap-8 w-full sm:grid grid-cols-2 lg:grid-cols-3">
        {data.map((item:any, index:number) => (
          <div
            key={item.index}
            className="bg-background border border-b-[6px] border-text p-1 rounded-xl flex flex-col justify-center items-center gap-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-64 sm:h-44 rounded-lg"
            />
            <div className="px-2.5 mb-2.5">
              <h1 className="text-lg font-medium">{item.title}</h1>
              <p className="text-sm text-text/80">{item.description}</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={item.link}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button size="sm" className="bg-text text-background">
                    View <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Button>
                </Link>
                <Link
                  href={item.github}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="px-2.5 bg-text text-background"
                  >
                    <FaGithub className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
