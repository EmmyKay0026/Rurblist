import Image from "next/image";
import CTA from "../components/molecule/CTA/index";
import PropertySlider from "../components/organism/PropertySlider/index";
import Button from "../components/atom/Button";
import PropertyLocation from "../components/molecule/PropertyLocation";
import SectionHeading from "../components/molecule/SectionHeading";
import TestimonialSlider from "../components/organism/TestimonialSlider/index";
import HeroSection from "../components/organism/HeroSection";
import rurblisthome from "../../public/assets/rurblist-home.png" 
import excitedRurblist from "../../public/assets/excitedRurblist.png";
import rurblistimg from "../../public/assets/rurblistimg.png";




function Landing()  {
  return (
    <main>
      <HeroSection />
       <section className="flex flex-col justify-between w-full px-[17px] py-[69px] md:px-[32px] lg:py-[40px] lg:flex-row lg:gap-[67px] lg:px-[70px] ">
        <Image
          className="lg:w-[50%]"
          src={rurblisthome}
          alt="happy family"
        />
        <CTA
          className="mt-[30px] lg:w-[50%]"
          ctaHeadText="Get the best experience of real estate at Rubrlist"
          ctaHeadClassname=" lg:w-[65%]"
          ctaPText="At Rubrlist, we create a stress free experience for you. Our agents provides options of different properties at affordable price. Let us find you your dream home seamlessly at a your location of choice. We create unforgettable experiences for you by offering you luxury at the best price according to your budget."
          ctaBtn="Contact a realtor now"
          btnLink="#"
        />
      </section> 
       <section>
        <SectionHeading
          headingText="Featured properties"
          pText="The best just for you"
        />

        <PropertySlider />
      </section>
      {/*<section className="flex justify-between gap-[67px] py-[40px] px-[70px] w-full my-[70px]">
        <Image
          className="w-[50%]"
          src={rurblistimg}
          alt="home"
        />
        <CTA
          className="mt-[30px] w-[50%]"
          ctaHeadText="Meet and talk with our agents"
          ctaHeadClassname="w-[65%]"
          ctaPText="All our agents are professionals and competent in their fields and will help you realize your dream housee with excellent price."
          ctaBtn="Chat an agent"
          btnLink=""
        />
      </section> */}

      {/* <section>
        <SectionHeading
          headingText="Our Property Locations"
          pText="View our property locations"
        />
        <div className="grid grid">
        <PropertyLocation viewHomeLink="#" homeImg={rurblisthome} />
        </div>

      </section>
      <section className="flex flex-col items-center justify-center learn-gradient-bg bg-cover bg-no-repeat mb-[50px] py-[67px] ">
        <p className="font-geo text-rurb-dark-green mb-[20px] text-[2rem] font-bold w-[60%] text-center">
          Learn more about our listing process as an agent, as well as our
          properties to become a home owner.
        </p>
        <Button children="Learn more" className="w-[15%] text-[1.3rem]" />
      </section>
      <section>
        <SectionHeading
          headingText="Testimonials"
          pText="See what our customer are saying about our services."
          pClassName="mt-[16px] mb-[32px] "
          headClassName="text-[2rem]"
        />
        <div className="flex justify-between gap-[20%] py-[40px] px-[80px] w-full">
          <TestimonialSlider /> 
          <Image
            className="w-[50%]"
            src={excitedRurblist}
            alt="happy family"
          />
        </div>
      </section> */}
      
    </main>
  );
}; 

export default Landing;
