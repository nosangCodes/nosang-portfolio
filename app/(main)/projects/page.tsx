import List from "@/components/list";
import React from "react";

const projects = [
  {
    text: "PlantsZen",
    link: "https://plantszen.nosang.in",
  },
  {
    text: "Piclogue",
    link: "https://piclogue.nosang.in",
  },
];

type Props = {};

export default function Projects({}: Props) {
  return (
    <div>
      <List items={projects} />
    </div>
  );
}
