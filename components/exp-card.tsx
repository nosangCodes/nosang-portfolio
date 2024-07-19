import React from "react";
import Chip from "./chip";

type Props = Experience;

/* class="absolute -inset-x-4 -inset-y-4 z-0 
hidden 
rounded-md 
transition 
motion-reduce:transition-none 
lg:-inset-x-6 
lg:block 
lg:group-hover:bg-slate-800/50 
lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
lg:group-hover:drop-shadow-lg" 
*/

export default function ExperienceCard({
  startDate,
  endDate,
  role,
  company,
  description,
  skills,
}: Props) {
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
      <div className="mt-1 flex flex-row gap-x-1 text-slate-400 text-xs font-semibold">
        <p>{startDate}</p>
        <span>-</span>
        <p>{endDate}</p>
      </div>
      <div className="flex flex-col  md:gap-y-2">
        <h4 className="text-slate-100 font-semibold max-md:text-sm text-base">
          {role} | {company}
        </h4>
        <p className="text-slate-400/90 line-clamp-5 text-sm max-md:text-xs tracking-tight">
          {description}
        </p>
        <div className="flex flex-row flex-wrap max-md:mt-2 gap-1">
          {skills?.map((skill, index) => (
            <Chip key={index} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
