import { useState } from "react";
import SectionTitle from "@/components/molecule/SectionHeading";
import Image from "next/image";
import PricingCard from "@/components/molecule/PricingCard";
import { redirect } from 'next/navigation'


export default function Pricing (){

    const handleClick= ()=>{
        setPricingState(!pricingState)
    }
    const [pricingState,setPricingState] = useState(true)

    return(
        <main>
            <div className="flexd items-start">
                <span className="text-rurb-orange text-[3.5rem] absolute top-[0px] left-[10px] lg:left-[30px] cursor-pointer">&#8592;</span>
            <SectionTitle className="mt-[90px] text-rurb-brown lg:mt-[initial]" pText="With flexible plan, enjoy posting and getting quick reviews and quick sales of your properties at a good rate." headingText="The right packages for your business"/>
            </div>
            <div className="flex justify-center items-center gap-[35px] text-[20px] mt-[8%] text-rurb-brown">
                <h4>Monthly</h4>
                <div className={pricingState ? " flex justify-start w-[112px]  bg-rurb-green px-[12px] py-[5px] rounded-[20px] cursor-pointer transition-[justify] duration-1000": "flex justify-end w-[112px]  bg-rurb-green px-[12px] py-[5px] rounded-[20px] cursor-pointer transition-[justify] duration-1000" } onClick={handleClick}>
                    <div className= "h-[40px] w-[40px] bg-rurb-dark-green rounded-[100%]"></div>
                </div>
                <h4>Yearly</h4>
        
            </div>
            <div className="flex justify-center gap-[20px] flex-wrap w-full my-[70px]">
                <PricingCard cardTitle="Flat" priceAmount={pricingState ? "0":"0"} /> 
                <PricingCard cardTitle="Golden" priceAmount={pricingState ? "5":"3"} /> 
                <PricingCard cardTitle="Platinum" priceAmount={pricingState ? "15":"10"} /> 
                <PricingCard cardTitle="Diamond" priceAmount={pricingState ? "25":"20"} /> 
            </div>
        </main>
    )
}