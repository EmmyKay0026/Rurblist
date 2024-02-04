import NavBar from "@/components/organism/NavBar";
import PropertiesPageModules from "@/components/organism/PropertiesPageModules";



export default function Properties(){
    return (
        <>
            <NavBar ulClassName="text-[px] [&:nth-child(3)]:text-rurb-green" />
            <main className="px-[16px] lg:px-[80px]">
                <PropertiesPageModules />
            </main>
        </>
    )
}