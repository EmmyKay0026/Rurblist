import Button from "@/components/atom/Button";
import React from "react";


const Subscribe = ()=>{

    return(
        <section className="bg-rurb-gradient py-[20%] pl-[20px] pr-[18px] md:py-[9%] md:px-[25%] ">
            <h3 className="text-rurb-brown font-bold font-geo text-[1.2rem] md:text-[2rem]">Subscribe to our newsletter</h3>
            <p className="text-rurb-brown text-[.9rem]">Be the first to know about the properties available..</p>
            <form className="flex flex-col md:flex-row gap-[10px] w-full mt-[30px]" action="" method="post">
                <input className="w-full text-[16px] py-[8px] pl-[20px] rounded-[8px] border-[1px] border-rurb-green" type="email" name="email" id="email1" placeholder="Enter your email address..."/>
                <Button BtnChildren="&#8594;"/>
            </form>
        </section>
    )
}

export default Subscribe