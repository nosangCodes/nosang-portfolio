import List from "@/components/list";
import ProjectCard from "@/components/project-card";
import React from "react";

const projects: Array<Project> = [
  {
    name: "PlantsZen",
    description:
      "A platform for exploring plants that enables users to browse a list of plants, view detailed information about each, create an account, save preferred plants for future reference, and purchase plants directly through the platform.",
    link: "https://plantszen.nosang.in",
    tech: ["Next.js", "MongoDb", "Express.js"],
  },
  {
    name: "Piclogue",
    link: "https://piclogue.nosang.in",
    description:
      "Piclogue is a social media platform where users can upload pictures and share their thoughts. Users can also follow other users who share similar interests",
    tech: ["Next.js", "uploadThing", "Prisma"],
  },
  {
    name: "La Luminous",
    description: "Portfolio website for a photograpger",
    link: "https://lal-x.nosang.in",
    tech: ["Next.js", "SW3 Bucket", "Express"],
  },
  {
    name: "Weather",
    description:
      "Fetches weather data from the OpenWeather API and supports querying places via the TomTom API.",
    link: "https://weather.nosang.in",
    tech: ["React", "OpenWeatherAPI", "TomTomAPI"],
  },
];

type Props = {};

export default function Projects({}: Props) {
  return (
    <ul className="md:w-[550px] fixed max-md:left-0 max-md:top-20 max-md:bottom-[10rem] right-0 top-0 md:py-6 bottom-0 overflow-y-scroll mt-3 flex flex-col gap-y-7 px-4 md:px-10">
      {projects?.map((project, index) => (
        <li key={index}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
