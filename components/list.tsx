import { cn, formatNumber } from "@/lib/utils";
import React from "react";
import "./styles.css";
import Link from "next/link";

type ItemProps = {
  className?: string;
  text: string;
  link?: string;
  index: number;
};

type Props = {
  className?: string;
  items: Array<Omit<ItemProps, "index">>;
};

function ListItem({ text, className, index, link }: ItemProps) {
  return (
    <Link
      href={link ?? ""}
      className={cn(
        "flex w-full text-right list-child cursor-pointer flex-row justify-end",
        className
      )}
    >
      <h5 className="font-bebas mr-2 text-base text-slate-400 italic">
        {formatNumber(index + 1)}
      </h5>
      <h4 className="font-black font-bebas text-[18vw] md:text-[9vw] leading-[0.91em] tracking-wide text-slate-200">
        {text}
      </h4>
    </Link>
  );
}

export default function List({ className, items }: Props) {
  return (
    <div
      className={cn(
        "w-full fixed top-6 md:top-4 right-0 bottom-0 mt-4 container overflow-y-scroll",
        className
      )}
    >
      <ul className="flex flex-col max-md:gap-y-2 list">
        {items?.map((item, index) => (
          <li key={index}>
            <ListItem index={index} link={item.link} text={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
