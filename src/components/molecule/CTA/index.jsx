import React from "react";
import Button from "../../atom/Button";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const CTA = ({
  ctaHeadText,
  ctaPText,
  ctaBtn,
  className,
  ctaHeadClassname,
  ctaPClassname,
  btnLink,
}) => {
  return (
    <div className={className}>
      <h2
        className={cn(
          "text-rurb-dark-green font-geo leading-[1.9rem] text-[1.5rem] md:text-[1.9rem] ",
          ctaHeadClassname
        )}
      >
        {ctaHeadText}
      </h2>
      <p
        className={cn(
          "font-pop text-[0.875rem] leading-[1.4rem] my-[9px] md:my-[28px] sm:leading-[2.2rem] md:text-[1.2rem]",
          ctaPClassname
        )}
      >
        {ctaPText}
      </p>
      <Link className="" href={btnLink}>
        <Button className="font-bold mt-[15px]" BtnChildren={ctaBtn} />
      </Link>
    </div>
  );
};

export default CTA;
