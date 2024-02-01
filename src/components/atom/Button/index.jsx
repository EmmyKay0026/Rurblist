import React from "react";
import { cn } from "../../../lib/utils";

const Button = ({ type, BtnChildren, className, onClick }) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-rurb-orange text-rurb-white py-[6px] px-[26px] rounded-[10px] border-[2px] border-rurb-orange text-[1.25rem] transition-colors duration-200 hover:transition-colors hover:duration-200 hover:bg-rurb-white-bg hover:text-rurb-orange ",
        className
      )}
      onClick={onClick}
    >
      {BtnChildren}
    </button>
  );
};

export default Button;
