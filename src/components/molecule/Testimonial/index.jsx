import React from "react";
import iconstar from "../../../../public/assets/iconstar.svg";
import Image from "../../atom/Image/index.";

const Testimonial = () => {
  return (
    <div className="">
      <h4 className="font-geo text-dark-green font-bold text-[1.5rem] ">
        What our clients are saying
      </h4>
      <p className="text-[1.2rem] font-pop text-rurb-black leading-[1.8rem] my-[20px]">
        After going through the frustrations and stress of looking for a house
        that suits my needs and with the frustrations from agents, I found
        rubrlist and decided to give it a trial and it was the best decision I
        made because i found an amazing home. Their stress free and affordable
        services are top notch.{" "}
      </p>
      <div className="flex justify-between items-center w-[80%]">
        <div>
          <h5 className="font-bold font-geo text-[1.5rem] text-rurb-brown">
            Peter Adams
          </h5>
          <p className="font-pop text-rurb-black">65 Old gra road, Maryland.</p>
        </div>
        <div>
          <Image imgSrc={iconstar} />
          <span className="font-pop text-rurb-black">06/02/23</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
