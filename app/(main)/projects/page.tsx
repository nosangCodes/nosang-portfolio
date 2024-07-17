import List from "@/components/list";
import React from "react";

const projects = [
  {
    text: "Alpha",
  },
  {
    text: "Theta Endeavor",
  },
  {
    text: "Beta",
  },
  {
    text: "Delta Assignment",
  },
  {
    text: "Gamma",
  },
  {
    text: "Epsilon Venture",
  },
  {
    text: "Zeta Enterprise",
  },
  {
    text: "Omega",
  },
  {
    text: "Iota",
  },
  {
    text: "Kappa Mission",
  },
  {
    text: "Lambda",
  },
  {
    text: "Mu Challenge",
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
