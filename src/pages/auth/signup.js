import Input from "@/components/atom/Input";
import SectionTitle from "@/components/molecule/SectionHeading";
import Image from "next/image";
import signup from "../../../public/assets/rurbkeysinhand.png"
import Link from "next/link";


export default function SignUp(){
    return(
        <main className="flex justify-center ">
          
          <div className="hidden h-[140vh]  items-end w-[45%] bg-[#FBE2CF] lg:flex" >
            <Image src={signup}/>
          </div>
          <section className="w-[100%] mb-[10%] md:w-[70%] lg:w-[55%] px-[16px]">
            <SectionTitle className="px-[31px] lg:px-[10%]" headClassName="text-[#555555] text-left font-geo" headingText="Create an account" pClassName="font-pop text-left text-[#808080] my-[8px]" pText="Let’s get you started." />
            
              <form className="md:w-[100%] md:px-[31px] lg:px-[10%] " action="" method="POST">
                <Input label="First Name" type="text" required={true} />
                <Input label="Last Name" type="text" required={true} />
                <Input label="Email address" type="password" required={true} />
                <Input label="Password" type="password" required={true} />
                <Input label="Confirm password" type="email" required={true} />
                <Input type="submit" value="Create an account" inputClassName="text-[1rem] lg:text-[1.3rem] lg:font-bold bg-rurb-orange border-0 p-[10px] h-[initial] text-rurb-white"  />
                <p className="text-[1rem] lg:text-[1.1rem] mt-[30px]">I have an account? <Link className="text-[1.1rem] font-bold text-rurb-orange lg:text-[1.3rem]" href="" >Login</Link> </p>
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