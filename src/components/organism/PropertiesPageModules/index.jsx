import React, { useState } from "react";
import Image from "next/image";
// import Image from "@/components/atom/Image/index.";
import PropertiesSlideSetup from "@/components/molecule/PropertiesSlideSetup";
import Button from "../../atom/Button";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import CustomDot from "../../atom/CustomDot";
import "react-multi-carousel/lib/styles.css";
import agentImg from "../../../../public/assets/agentImg.png"


const PropertiesPageModules=() =>{
    const [active, setactive]= useState(true)

    const handleClick = ()=>{
        setactive(false)

    }

  return (
    <>
        
        <h2 className="text-rurb-orange font-bold font-geo text-[20px] lg:text-[50px]">For Rent - The Pearl Apartments, warri Delta state.</h2>
        
        {/*  */}
        <div>
          <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </div>

        <div className="flex justify-center gap-[25px]">
        <img
    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    
      height= '100'
    
      width= '100'
    
  />
  <img
    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    
      height= '100'
    
      width= '100'
    
  />
  <img
    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    
      height= '100'
    
      width= '100'
    
  />
  <img
    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    
      height= '100'
    
      width= '100'
    
  />
  <img
    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    
      height= '100'
    
      width= '100'
    
  />
</div>

        {/*  */}

        <div className="block lg:w-[85%] lg:flex lg:justify-between">
            <p className="w-full lg:w-[500px] text-justify">Recently renovated home in the sought after Airport road neighborhood. Top rated schools and minutes away from shopping, restaurants, parks, Buckhead, and Midtown. The main level features an open floor plan with newly finished hardwood floors, modernized kitchen, marble fireplace, 2 bedrooms upstairs with an updated bathroom full bath. </p>
            <div className="flex gap-[20px] items-start">
                <Image src={agentImg} alt="agent image" />
                <span className="font-pop">
                    <p className="text-[20px]">Emily James</p>
                    <p className="text-[16px] mt-[7px] mb-[15px]">Posted on <br /> 12/03/2023</p>
                    <Link href="" ><Button BtnChildren="Chat" /></Link>
                </span>
            </div>
        </div>
    </>
  )
}

export default PropertiesPageModules