
import Link from "next/link";


export default  function Property({photos}){
    // console.log(photos[1].title);
    return(
        <section>
            <div className="flex justify-between items-center">
            <h1 className="text-[3rem] font-bold">Home Page</h1>
            <Link href="/post" className="text-[20px] text-center border-[2px] border-black px-[30px] py-[10px] mb-[30px] hover:text-white hover:bg-black cursor-pointer" >View blog</Link>

            </div>
            <div className="flex justify-around flex-wrap mt-[30px]">
                {
                    photos.map((photo)=>{
                       return( <div key={photo.description} className="w-[300px] mb-[30px]">
                            <div>
                                <img src={photo.rurblistbg} />
                            </div>
                            <p>{photo.title}</p>
                            <p>{photo.description}</p>
                            
                        </div>)
                    })
                    
                }
                {/* {photos.map((photo)=>{
                    <PropertyListing
                    description={photo.description}
                    title={photo.title}
                    rurblistbg={photo.rurblistbg}
        />
                })} */}
            </div>
        </section>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/properties')
    const data = await response.json()
    console.log(data);
    return{
        props:{
            photos:data
        }
    }
}