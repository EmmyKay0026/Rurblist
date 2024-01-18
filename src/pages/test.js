import Property from "@/components/organism/PropertySlider/property";
import Link from "next/link";


export default  function Home({photos}){
    console.log(photos);
    // return(
    //     <section>
    //         <div className="flex justify-between items-center">
    //         <h1 className="text-[3rem] font-bold">Home Page</h1>
    //         <Link href="/post" className="text-[20px] text-center border-[2px] border-black px-[30px] py-[10px] mb-[30px] hover:text-white hover:bg-black cursor-pointer" >View blog</Link>

    //         </div>
    //         <div className="flex justify-around flex-wrap mt-[30px]">
    //             {
    //                 photos.map((photo)=>{
    //                    return( <div key={photo.description} className="w-[300px] mb-[30px]">
    //                         <div>
    //                             <img src={photo.rurblistbg} />
    //                         </div>
    //                         <p>{photo.title}</p>
    //                         <p>{photo.description}</p>
                            
    //                     </div>)
    //                 })
    //             }
    //         </div>
    //     </section>
    // )

    return(
                //  <Property />
        <>
        hello
        </>
    )
}


async function test(){
    // const response = await fetch('http://localhost:3000/api/properties')
    // const data = await response.json()
    // console.log(data);

    const url = 'https://nigeria-states-and-lga.p.rapidapi.com/lgalists';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15b062ff0amsh55f2282cd9a3200p12f9e8jsn8d08e1820f31',
		'X-RapidAPI-Host': 'nigeria-states-and-lga.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.text();
	console.log(data);
} catch (error) {
	console.error(error);
}
   
}
test()