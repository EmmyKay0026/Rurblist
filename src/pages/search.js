

export default function Search(){
    return(<main>
        <div></div>
        <div className="flex justify-end gap-[16px]">
            <select className="hover:bg-rurb-green bg-[#F7E5D2] rounded-[16px] px-[30px] py-[16px] outline-none " >
                <option className="hover:bg-rurb-green">Status</option>
                <option>For sale</option>
                <option>For rent</option>
            </select>
            <select className="bg-[#F7E5D2] rounded-[16px] px-[30px] py-[16px] outline-none " >
                <option>Rating</option>
                <option>For sale</option>
                <option>For rent</option>
            </select>
            <select className="bg-[#F7E5D2] rounded-[16px] px-[30px] py-[16px] outline-none " >
                <option>Location</option>
                <option>Delta State</option>
                <option>Edo State</option>
            </select>
            <select className="bg-[#F7E5D2] rounded-[16px] px-[30px] py-[16px] outline-none " >
                <option>Type</option>
                <option>Single room</option>
                <option>One room</option>
                <option>Two room</option>
            </select>
            <select className="bg-[#F7E5D2] rounded-[16px] px-[30px] py-[16px] outline-none " >
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </div>
        <section></section>
    </main>)
}