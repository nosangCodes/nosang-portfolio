import React from "react";

type Props = {
  text: string;
};

export default function Chip({ text }: Props) {
  return (
    <div className="bg-slate-700/50 rounded-xl py-1 px-2">
      <p className="max-md:text-[10px] text-xs leading-3 font-medium">{text}</p>
    </div>
  );
}
