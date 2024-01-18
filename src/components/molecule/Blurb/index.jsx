import React from "react";
import { cn } from "../../../lib/utils";
import Image from "next/image";

export const Blurb = ({
  imgSrc,
  blurbHeadTxt,
  blurbPTxt,
  className,
  headClassName,
  pClassName,
  imgClassName,
}) => {
  return (
    <div className={className}>
      <Image src={imgSrc} className={imgClassName} />
      <h3
        className={cn(
          "mt-[24px] mb-[12px] text-[1.2rem] text-rurb-brown font-geo font-bold",
          headClassName
        )}
      >
        {blurbHeadTxt}
      </h3>
      <p className={cn("text-rurb-txt-black", pClassName)}>{blurbPTxt}</p>
    </div>
  );
};
