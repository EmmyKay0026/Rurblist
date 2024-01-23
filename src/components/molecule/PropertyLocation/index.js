import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../atom/Button";
import rurblisthouse3 from "../../../../public/assets/rurblisthouse3.png"

 function PropertyLocation (){
  
  return (

    <section className="flex flex-wrap md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 px-[6%] gap-[2%]">
    
      <div className="flex flex-col items-center justify-center my-[40px]">
      <p className="text-[20px]">Warri, Delta state.</p>
      <Image className="my-[2%]" src={rurblisthouse3} />
      <Link href="">
        <Button className="bg-transparent text-rurb-orange border-[1.5px] border-rurb-orange font-bold" BtnChildren="View home &#8594;" />
      </Link>
    </div>
      <div className="flex flex-col items-center justify-center">
      <p className="text-[20px]">Warri, Delta state.</p>
      <Image className="my-[2%]" src={rurblisthouse3} />
      <Link href="">
        <Button className="bg-transparent text-rurb-orange border-[1.5px] border-rurb-orange font-bold" BtnChildren="View home &#8594;" />
      </Link>
    </div>
      <div className="flex flex-col items-center justify-center">
      <p className="text-[20px]">Warri, Delta state.</p>
      <Image className="my-[2%]" src={rurblisthouse3} />
      <Link href="">
        <Button className="bg-transparent text-rurb-orange border-[1.5px] border-rurb-orange font-bold" BtnChildren="View home &#8594;" />
      </Link>
    </div>
      <div className="flex flex-col items-center justify-center">
      <p className="text-[20px]">Warri, Delta state.</p>
      <Image className="my-[2%]" src={rurblisthouse3} />
      <Link href="">
        <Button className="bg-transparent text-rurb-orange border-[1.5px] border-rurb-orange font-bold" BtnChildren="View home &#8594;" />
      </Link>
    </div>
    
    
    </section>
  );
};


// export async function getServerSideProps (){
//   const response = await fetch("http://localhost:3000/api/properties")
//   const data = await response.json()
//   console.log(data);

//   return{
//     props:{
//         photos:data,
//     }
// }
// }
export default PropertyLocation;
