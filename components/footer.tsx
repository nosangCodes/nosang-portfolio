import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import React from "react";
import GithubIcon from "../assets/icons/github-mark-white.svg";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <div className={cn("flex flex-col gap-0", className)}>
      <ul>
        <li>
          <h5 className="font-semibold text-sm">Software Engineer</h5>
        </li>
        <li>
          <p className="font-light text-sm">
            I weave the web with pixel-perfect precision.
          </p>
        </li>
        <li>
          <p className="font-light text-sm">Kalimpong</p>
        </li>
        <li className="leading-4 text-wrap">
          <a
            className="font-light text-sm hover:text-white transition-colors"
            href="mailto:nosang.codes@gmail.com"
          >
            nosang.codes@gmail.com
          </a>
        </li>
        <li className="mt-4">
          <div className="flex flex-row items-center gap-x-1">
            <a
              className="scale-100 hover:scale-110 transition-transform"
              target="_blank"
              href="https://github.com/nosangCodes"
              aria-label="github link"
            >
              <Image
                priority
                width={20}
                height={20}
                className=" object-cover"
                src={GithubIcon}
                alt="Github icon"
              />
            </a>
            <a
              className="scale-100 hover:scale-110 transition-transform"
              href="https://www.linkedin.com/in/nosangsubba/"
              target="_blank"
              aria-label="Linkedin link"
            >
              <Linkedin height={20} width={20} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
