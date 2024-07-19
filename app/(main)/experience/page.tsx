import ExperienceCard from "@/components/exp-card";
import { experiences } from "@/data";
import { Link } from "lucide-react";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="md:w-[550px] fixed max-md:left-0 max-md:top-20 right-0 top-0 md:py-6 bottom-0 overflow-y-scroll">
      <ul className="flex flex-col gap-y-7 px-4 md:px-10">
        {experiences?.map((exp, index) => (
          <li key={exp.id}>
            <ExperienceCard {...exp} />
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        className="flex ml-[24px] w-fit flex-row items-center gap-x-1 mt-5 font-medium max-md:text-base text-lg hover:underline hover:underline-offset-4 hover:text-indigo-600/60 transition-all"
        href="/resume/nosang.resume.pdf"
      >
        <Link height={14} width={14} />
        <p>Resume</p>
      </a>
    </div>
  );
}

// href="https://drive.google.com/file/d/1ReEzKNB3JTszVO8XwARfV2lfYlknivbJ/view?usp=sharing"
