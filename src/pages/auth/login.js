"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/atom/Input";
import SectionTitle from "@/components/molecule/SectionHeading";
import signin from "../../../public/assets/rurbhouseinhand.png"
import Button from "@/components/atom/Button";


export default function SignIn(){
  const initialData = {
    email: "",
    password: "",
    
  };
  const [inputValue, setInputValue] = useState(initialData)

  // const style = ()=>{
  //   if (inputValue.password =! inputValue.cpassword ) {
  //       return    
  //   }
  // }

  const handleChanges = (e) =>{
  console.log(e.target.value);
  setInputValue((prev) => {
    return {
      ...prev,
      [e.target.name]: e.target.value,
    };
  });
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(inputValue);

    setInputValue(initialData)
  }

    return(
        <main className="flex justify-center ">
          
          <div className="hidden h-[135vh]  items-end w-[45%] bg-[#FBE2CF] lg:flex" >
            <Image src={signin}/>
          </div>
          <section className="w-[100%] mb-[10%] md:w-[70%] lg:w-[55%] px-[16px]">
            <SectionTitle className="px-[31px] lg:px-[10%]" headClassName="text-[#555555] text-left font-geo" headingText="Welcome back!" pClassName="font-pop text-left text-[#808080] my-[8px]" pText="Welcome, Please enter your details." />
            <div className="px-[31px] lg:px-[10%]"><Button BtnChildren="Log in with Google" className="bg-transparent w-full border-[1px] border-[#F29D60] text-rurb-txt-black font-geo "/>
            <span className="flex text-rurb-orange items-center gap-[12px] my-[40px] " ><hr className="w-full text-[#A9A9A9]"/> or <hr className="w-full text-[#A9A9A9]" /></span>
            </div>

              <form className="md:w-[100%] md:px-[31px] lg:px-[10%] " onSubmit={handleSubmit} action="" method="POST">
                <Input label="Email address" htmlFor="email" type="email" id="email" name="email" value={inputValue.email} onChange={handleChanges} required={true} />
                <Input label="Password" htmlFor="password" id="password" name="password" value={inputValue.password} onChange={handleChanges} type="password" required={true} />
                <div className="flex items-center justify-between">
                    <Input type="checkbox" className="flex flex-row-reverse items-center flex-nowrap"  htmlFor="rememberMe" labelClassname="ml-[10px]"  label="Remember me" inputClassName="border-[1px]  w-[18px] m-0 h-[18px]" id="rememberMe"/>
                    <p classname="text-rurb-txt-black bg-red text-[0.8rem]" >Forgotten Password? </p>
                </div>
                <Input type="submit" value="Log in" inputClassName="text-[1rem] lg:text-[1.3rem] lg:font-bold bg-rurb-orange border-0 p-[10px] h-[initial] text-rurb-white"  />
                <p className="text-[1rem] lg:text-[1.1rem] mt-[30px]">Don't have an account? <Link className="text-[1.1rem] font-bold text-rurb-orange lg:text-[1.3rem]" href="" >Sign up for free</Link> </p>
              </form>
      
           </section> 
        </main>
    )
}

//   import { getProviders, signIn } from "next-auth/client"

// export default function SignIn({ providers }) {
//   return (
//     <>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   )
// }

// // This is the recommended way for Next.js 9.3 or newer
// export async function getServerSideProps(context) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/