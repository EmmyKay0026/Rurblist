import React from 'react';
import Button from '@/components/atom/Button';
import Link from 'next/link';
import {PricingListCell} from '@/components/molecule/PricingCard/PriceListCell';


const PricingCard =({priceAmount,cardTitle})=>{
    return(
        <section className="w-[90%] mt-[30px] pb-[70px] mlj-[40px] shadow-3xl px-[60px] pt-[60px]  rounded-[20px] md:w-[initial] ">
            <h2 className='text-rurb-green font-bold font-geo text-[1.5rem] mb-[55px]'>{cardTitle}</h2>
            <ul>
                <PricingListCell listChildren="Quick Approval" />
                <PricingListCell listChildren="12 Posts" />
                <PricingListCell listChildren="No promotion" />
            </ul>
            <div className='flex items-baseline gap-[20px] text-rurb-green mb-[50px] '><h2 className=' text-[2.1rem] font-bold '>${priceAmount} </h2><p>Monthly</p></div>
            <Link href=""><Button BtnChildren="Subscribe" /></Link>
        </section>
    )
}

export default PricingCard