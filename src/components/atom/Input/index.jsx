import React from "react";
import { cn } from "../../../lib/utils";


const Input = ({className,labelClassname,label,htmlFor,type,placeholder,inputClassName,id,name,value,required})=>{

    return(
        <div className={cn("my-[16px]",className)}>
            <label className={cn("block text-[#3E3E3E] text-[1rem] font-pop md:[1.3rem]",labelClassname)} htmlFor={htmlFor}>{label}</label>
            <input className={cn("border-[.5px] border-rurb-grey rounded-[4px] pl-[10px] pr-[5px] w-full mt-[12px] h-[28px] text-[.9rem] outline-0 ",inputClassName)} type={type} required={required} placeholder={placeholder}  id={id} name={name} value={value}/>
        </div>
    )
}

export default Input
