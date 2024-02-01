import { useState } from "react";
import SectionTitle from "@/components/molecule/SectionHeading";
import openenveloprecovery from "../../../public/assets/openenveloprecovery.svg"
import closedenveloptick from "../../../public/assets/closedenveloptick.svg"
import Image from "next/image";
import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import Link from "next/link";

export default function PasswordRecovery(){


    const handleClick =()=>{
        setState(!state)
    }

    const [state, setState] = useState(true)
    return(
        <section className="flex justify-center">
        <div className="flex flex-col items-center  lg:w-[60%] px-[16px] md:px-[120px]">
            <SectionTitle headingText="Forgot Password" pText="Please enter the email address" />
            <Input label="Email address"type="email" labelClassname="text-[16px] text-rurb-dark-green md:text-[24px]" inputClassName="h-[40px] text-[1.2rem] font-pop"  className="w-full  mb-[52px] font-pop"  />
            <Link href="/auth/password-recovery" ><Button className="w-full font-pop" BtnChildren="Continue" /></Link>
        </div>
        </section>
    )
}




