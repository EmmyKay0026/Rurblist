import React from "react";
import Button from "../../atom/Button";
import Image from "next/image";
import { Blurb } from "../../molecule/Blurb";
import iconlist from "../../../../public/assets/iconlist.svg";
import iconhome from "../../../../public/assets/iconhome.svg";
import iconlocation from "../../../../public/assets/iconlocation.svg";
import iconlocation2 from "../../../../public/assets/iconlocation2.svg";
import iconflag from "../../../../public/assets/iconflag.svg";
import iconrating from "../../../../public/assets/iconrating.svg";

export default function HeroSection() {
  return (
    <>
      <section className="pt-[147px] pb-[129px] w-full bg-cover bg-no-repeat lg:bg-hero-bg md:bg-hero-bg-tab bg-hero-bg-mob">
        <div className="flex flex-col gap-40px pl-[16px] w-[90%] sm:w-[70%] sm:pl-[32px] lg:pl-[80px] lg:w-[60%] xl:w-[50%]">
          <h1 className=" text-bg-rurb-black text-[2rem] mb-[18px] font-geo sm:text-[3rem] lg:text-[4rem]">
            DISCOVER YOUR DREAM HOME
          </h1>
          <form className="grid grid-cols-2 sm:grid-cols-3 items-center px-[20px] py-[12px] rounded-[20px] bg-rurb-gradient">
            <div className="w-full border-r-[1px] border-rurb-txt-black">
              {/* Location */}
              <div className="flex items-center gap-[10px] text-rurb-brown font-geo mb-[12px] text-[1rem] md:text-[1.25rem]">
                <Image src={iconlocation} />
                <p>Location</p>
              </div>
              <div className=" flex items-center gap-[12px] text-rurb-txt-black text-[0.8rem] md:text-[0.875rem] md:gap-[13px] lg:gap-[23px]">
                <select
                  className="ml-[10px] outline-0 cursor-pointer bg-[transparent]"
                  name="location"
                  id=""
                >
                  <option>Asaba, Delta state</option>
                </select>
              </div>
            </div>
            <div className="pl-[12px] md:pl-[22px]">
              {/* status */}
              <div className="flex items-center gap-[10px] text-rurb-brown font-geo mb-[12px] text-[1rem] md:text-[1.25rem]">
                <Image src={iconhome} />
                <p>Status</p>
              </div>
              <div className=" flex items-center gap-[23px] text-rurb-txt-black text-[0.8rem] md:text-[0.875rem] md:gap-[13px] lg:gap-[23px]">
                <select
                  className="ml-[10px] outline-0 cursor-pointer bg-[transparent]"
                  name="status"
                  id=""
                >
                  <option>For sale</option>
                </select>
              </div>
            </div>
            <div className="hidden sm:block">
              <Button type="submit" className="font-bold" BtnChildren="Search" />
            </div>
          </form>
        </div>
      </section>
      <section className="flex justify-left flex-wrap gap-[20px] px-[20px] py-[38px] w-full xm:bg-red bg-rurb-gradient  md:gap-[60px] md:px-[65px] md:py-[37px] lg:flex-nowrap">
        <Blurb
          imgSrc={iconlist}
          blurbHeadTxt="Best Price"
          blurbPTxt="Get your dream home at the best price without breaking the bank. Get the best offer now!"
          className="md:w-[43%] lg:w-[36%] "
        />
        <Blurb
          imgSrc={iconlocation2}
          blurbHeadTxt="Good Location"
          blurbPTxt="All our listed properties are located at a safe and secure environment."
          className="md:w-[43%] lg:w-[36%]  "
        />
        <Blurb
          imgSrc={iconflag}
          blurbHeadTxt="Luxury"
          blurbPTxt="Our properties provide the best luxury. Enjoy luxury at an affordable price."
          className="md:w-[43%] lg:w-[36%] "
        />
        <Blurb
          imgSrc={iconrating}
          blurbHeadTxt="Rating"
          blurbPTxt="Our properties are rated highly because we provide a seamless and stress free services."
          className="md:w-[43%] lg:w-[36%] "
        />
      </section>
    </>
  );
}
