import { cn } from "@/lib/utils";
import React from "react";
import "./styles.css";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function HeroLogo({ className }: Props) {
  return (
    <Link
      href={"/"}
      className={cn("inline-block cursor-pointer group hero-logo", className)}
    >
      <h1 className="font-semibold text-2xl md:text-4xl leading-[1.35rem] md:leading-[1.86rem] font-bebas tracking-[0.13rem]">
        Nosang
      </h1>
      <h1 className="font-semibold text-2xl md:text-4xl leading-[1.35rem] md:leading-[1.86rem] font-bebas tracking-[0.13rem]">
        Subba.
      </h1>
    </Link>
  );
}
