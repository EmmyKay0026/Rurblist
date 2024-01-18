import React from "react";
import { cn } from "../../../lib/utils";

const SectionTitle = ({
  headingText,
  pText,
  className,
  pClassName,
  headClassName,
}) => {
  return (
    <div className={className}>
      <h2
        className={cn(
          "text-center text-rurb-dark-green font-geo leading-[1.9rem] text-[1.9rem]",
          headClassName
        )}
      >
        {headingText}
      </h2>
      <p
        className={cn(
          "text-center font-pop text-[1.2rem] leading-[2.2rem] mt-[28px] mb-[70px]",
          pClassName
        )}
      >
        {pText}
      </p>
    </div>
  );
};

export default SectionTitle;
