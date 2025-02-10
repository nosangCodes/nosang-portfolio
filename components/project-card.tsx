import React from "react";
import Chip from "./chip";
import Link from "next/link";

type Props = Project;

export default function ProjectCard({ name, description, tech, link }: Props) {
  return (
    <div className="group relative transition-all flex max-md:flex-col flex-row max-md:gap-y-1 gap-x-3">
      <div
        className="
      absolute 
      -inset-4 
      opacity-0 
      transition-all
      ease-in-out
      duration-300
      md:group-hover:opacity-100
      group-hover:shadow-[inset_0_1px_0_0_rgba(15, 23, 42 , 0.2)] 
      group-hover:drop-shadow-lg 
      rounded-md 
      bg-slate-300/5"
      ></div>
      <div className="flex z-10 flex-col  md:gap-y-2">
        <Link
          target="_blank"
          className="cursor-pointer hover:underline"
          href={link}
          aria-label="project link"
        >
          <h4 className="text-slate-100 font-semibold max-md:text-sm text-base">
            {name}
          </h4>
        </Link>
        <p className="text-slate-400/90 text-sm max-md:text-xs tracking-tight">
          {description}
        </p>
        <div className="flex flex-row flex-wrap max-md:mt-2 gap-1">
          {tech?.map((item, index) => (
            <Chip key={index} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
