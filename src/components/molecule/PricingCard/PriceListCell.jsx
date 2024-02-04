import React from "react";


export const PricingListCell= ({listChildren})=>{
    return(
        <li className="flex items-center gap-[20px] mb-[20px] ">
            <div className="font-pop w-[16px] h-[16px] bg-rurb-orange rounded-[100%] text-rurb-txt-black"></div>
            <p>{listChildren}</p>
        </li>
    )
}



