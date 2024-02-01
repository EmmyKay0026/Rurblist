"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/atom/Input";
import SectionTitle from "@/components/molecule/SectionHeading";
import signup from "../../../public/assets/rurbkeysinhand.png"


export default function SignUp(){
  const initialData = {
    fname: "",  
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [inputValue, setInputValue] = useState(initialData)

  // const style = ()=>{
  //   if (inputValue.password =! inputValue.cpassword ) {
  //       return    
  //   }
  // }

  const handleChanges = (e) =>
  setInputValue((prev) => {
    return {
      ...prev,
      [e.target.name]: e.target.value,
    };
  });

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(inputValue);

    setInputValue(initialData)
  }

    return(
        <main className="flex justify-center ">
          
          <div className="hidden h-[140vh]  items-end w-[45%] bg-[#FBE2CF] lg:flex" >
            <Image src={signup}/>
          </div>
          <section className="w-[100%] mb-[10%] md:w-[70%] lg:w-[55%] px-[16px]">
            <SectionTitle className="px-[31px] lg:px-[10%]" headClassName="text-[#555555] text-left font-geo" headingText="Create an account" pClassName="font-pop text-left text-[#808080] my-[8px]" pText="Let’s get you started." />
            
              <form className="md:w-[100%] md:px-[31px] lg:px-[10%] " onSubmit={handleSubmit} action="" method="POST">
                <Input label="First Name" type="text" htmlFor="fname" id="fname" name="fname" value={inputValue.fname} onChange={handleChanges} required={true} />
                <Input label="Last Name" type="text" htmlFor="lname" id="lname" name="lname" value={inputValue.lname} onChange={handleChanges} required={true} />
                <Input label="Email address" htmlFor="email" type="email" id="email" name="email" value={inputValue.email} onChange={handleChanges} required={true} />
                <Input label="Password" htmlFor="password" id="password" name="password" value={inputValue.password} onChange={handleChanges} type="password" required={true} />
                <Input label="Confirm password" htmlFor="cpassword" id="cpassword" name="cpassword" value={inputValue.cpassword} onChange={handleChanges} type="password" required={true} />
                <i className={"hidden text-[red] text-[.8rem] m-0"}>Password does not match</i>
                <div className="hidden" >
                <p className={"block font-bold text-[.8rem] m-0"}>Ensure your password contains at least one: </p>
                <i className={"block text-[red] text-[.8rem] m-0"}>Upper case character</i>
                <i className={"block text-[red] text-[.8rem] m-0"}>Lower case character</i>
                <i className={"block text-[red] text-[.8rem] m-0"}>Numerical case character</i>
                </div>
                <Input type="submit" value="Create an account" inputClassName="text-[1rem] lg:text-[1.3rem] lg:font-bold bg-rurb-orange border-0 p-[10px] h-[initial] text-rurb-white"  />
                <p className="text-[1rem] lg:text-[1.1rem] mt-[30px]">I have an account? <Link className="text-[1.1rem] font-bold text-rurb-orange lg:text-[1.3rem]" href="/auth/login" >Login</Link> </p>
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