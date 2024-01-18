import React from "react";
import { cn } from "../../../lib/utils";

const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      className={cn(
        "bg-rurb-orange text-rurb-white py-[6px] px-[26px] rounded-[10px]  text-[1.25rem]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
