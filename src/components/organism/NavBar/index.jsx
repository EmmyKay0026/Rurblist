import React from "react";
import Link from "next/link";
import Button from "@/components/atom/Button";
import Image from "next/image";
import logo from "../../../../public/assets/Logo.png"
import { cn } from "@/lib/utils";


 const NavBar=({ulClassName})=> {

  return (
    <nav className="flex justify-between items-center py-[20px] px-[25px] ">
        <div>
            <Image src={logo} className="w-[100%]" />
        </div>
        <div className="lg:hidden">
            <div className="bg-rurb-orange w-[28px] h-[4px] mb-[4px] rounded-[8px] "></div>
            <div className="bg-rurb-orange w-[28px] h-[4px] mb-[4px] rounded-[8px] "></div>
            <div className="bg-rurb-orange w-[28px] h-[4px] mb-[4px] rounded-[8px] "></div>
        </div>  
        <ul className={cn("hidden ullist gap-[40px] items-center text-[20px] text-rurb-dark-green lg:flex ",ulClassName)}>
            <Link href="/"><li className="cursor-pointer hover:text-rurb-orange active:hover:text-rurb-orange">Home</li></Link>
            <Link href=""><li className="cursor-pointer hover:text-rurb-orange active:hover:text-rurb-orange">About</li></Link>
            <Link href="/properties"><li className="cursor-pointer hover:text-rurb-orange active:hover:text-rurb-orange">Properties</li></Link>
            <Link href=""><li className="cursor-pointer hover:text-rurb-orange active:hover:text-rurb-orange">Contact us</li></Link>
            <li className="cursor-pointer hover:text-rurb-orange"> <Link href="/auth/login" > <Button className="bg-rurb-white-bg text-rurb-orange rounded-[20px] hover:bg-rurb-orange hover:text-rurb-white " BtnChildren="Log in" /> </Link> </li>
            <li className="cursor-pointer hover:text-rurb-orange"> <Link href="/auth/signup" ><Button className="rounded-[20px]" BtnChildren="Sign up" /></Link> </li>
        </ul>
    </nav>

    
    )
}

export default NavBar