import React from "react";
// import Image from "../../atom/Image/index.";
import Image from "next/image";
import Button from "../../atom/Button/index";
// import { properties } from ".";
import iconlocationbw from "../../../../public/assets/iconlocationbw.svg";
import iconshower from "../../../../public/assets/iconshower.svg";
import iconsize from "../../../../public/assets/iconsize.svg";
import iconbed from "../../../../public/assets/iconbed.svg";

const PropertyListing = ({ title, rurblistbg }) => {
  const propertyStyle = {
    backgroundImage: `url(${rurblistbg})`,
  };
  return (
    <>
      <div className=" mr-[30px]">
        <div className="w-[340px] pb-[18px] shadow-lg shadow-[rgba(0, 0, 0, 0.10)]">
          {/* img */}
          <div
            className="bg-cover  bg-no-repeat relative rounded-[20px] mb-[20px] px-[20px] h-[176px]"
            style={propertyStyle}
          >
            <span className="bg-rurb-green rounded-[20px]  px-[11px] text-[.9rem] text-rurb-white absolute top-[20px] ft-[30px] ">
              For rent
            </span>
          </div>
          {/* title */}
          <div className="px-[20px]">
            <h4 className="font-bold text-[1.5rem] text-black ">{title}</h4>
            <span className="flex gap-[8px]">
              <Image src={iconlocationbw} />
              <p className="font-pop">Warri, Delta state</p>
            </span>
          </div>
          {/* Description */}
          <div className="flex justify-between gap-[8px] px-[20px] my-[25px]">
            <span className="flex gap-[8px]">
              <Image src={iconsize} />{" "}
              <p className="font-pop text-rurb-black ">1500 sqft</p>
            </span>
            <span className="flex gap-[8px]">
              <Image src={iconbed} />{" "}
              <p className="font-pop text-rurb-black">4 beds</p>
            </span>
            <span className="flex gap-[8px]">
              <Image src={iconshower} />{" "}
              <p className="font-pop text-rurb-black">3 bath</p>
            </span>
          </div>
          {/* Price */}
          <div className="flex justify-between px-[20px]">
            <p className="text-pop text-[#000] ">$400</p>
            <Button BtnChildren="Checkout" className="text-[1rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
