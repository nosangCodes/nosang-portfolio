import ExperienceCard from "@/components/exp-card";
import { experiences } from "@/data";
import { Link } from "lucide-react";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-[500px] flex flex-col justify-center h-[calc(100svh-100px)] md:mr-[4rem]">
      <ul className="">
        {experiences?.map((exp, index) => (
          <li key={exp.id}>
            <ExperienceCard {...exp} />
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        className="flex flex-row items-center gap-x-1 mt-5 font-medium max-md:text-base text-lg hover:underline hover:underline-offset-4 hover:text-indigo-600/60 transition-all"
        href="https://drive.google.com/file/d/1ReEzKNB3JTszVO8XwARfV2lfYlknivbJ/view?usp=sharing"
      >
        <Link height={14} width={14} />
        <p>Resume</p>
      </a>
    </div>
  );
}
