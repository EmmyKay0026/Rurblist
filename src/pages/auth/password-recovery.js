import { useState } from "react";
import SectionTitle from "@/components/molecule/SectionHeading";
import openenveloprecovery from "../../../public/assets/openenveloprecovery.svg"
import closedenveloptick from "../../../public/assets/closedenveloptick.svg"
import Image from "next/image";
import Button from "@/components/atom/Button";
import Link from "next/link";


export default function PasswordRecovery(){


    const handleClick =()=>{
        setState(!state)
    }

    const [state, setState] = useState(true)
    return(
        <>
            <SectionTitle headingText="Password Recovery" />
            <div className="flex flex-col items-center gap-[20px]">
            {state ? <Image src={openenveloprecovery} /> : <Image src={closedenveloptick} /> }
                {state ? <span>A link has been sent to your email address</span> :<Link href="/auth/login" > <Button BtnChildren="Proceed to login" /></Link>  }

                
            </div>
            <Button className="absolute l-[121px] b-[10px] " BtnChildren="Change state" onClick={handleClick} />
        </>
    )
}




