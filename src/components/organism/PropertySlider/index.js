

import React from "react";
import Carousel from "react-multi-carousel";
import CustomDot from "../../atom/CustomDot";
import "react-multi-carousel/lib/styles.css";
import PropertyListing from "../../molecule/PropertyListing";
import rurblisthouse from "../../../../public/assets/rurblisthouse.png";
import rurblisthouse2 from "../../../../public/assets/rurblisthouse2.png";
import rurblistimg from "../../../../public/assets/rurblistimg.png";
import rurblisthbg from "../../../../public/assets/rurblist-h-bg.png";
import rurblisthome from "../../../../public/assets/rurblist-home.png";


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



  function PropertySlider({ photos }) {
  console.log(photos);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = [
      PropertyListing,
      PropertyListing,
      PropertyListing,
      PropertyListing,
      PropertyListing,
      PropertyListing,
    ];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "bg-rurb-green" : "bg-rurb-dark-green"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(PropertyListing)[index]}
      </button>
    );
  };
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-padding-bottom cursor-grab pb-[30px]"
        dotListClass="bottom-[-10px] relati z-[10000] gap-[30px]"
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* {photos.map((photo) => {
          <PropertyListing
            description={photo.description}
            title={photo.title}
            rurblistbg={photo.rurblistbg}
          />;
        })} */}
        <PropertyListing
          description="React Carousel with Server Side Rendering Support – Part 1"
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <PropertyListing
          description="React Carousel with Server Side Rendering Support – Part 1"
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <PropertyListing
          description="React Carousel with Server Side Rendering Support – Part 2"
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <PropertyListing
          description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <PropertyListing
          description="React Carousel with Server Side Rendering Support – Part 2"
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
        <PropertyListing
          description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
          title="w3js.com - web front-end studio"
          rurblistbg="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </Carousel>
    </>
  );
}




export default PropertySlider;
