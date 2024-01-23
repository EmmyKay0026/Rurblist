

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




  function PropertySlider() {
  
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // const carouselItems = [
    //   PropertyListing,
    //   PropertyListing,
    //   PropertyListing,
    //   PropertyListing,
    //   PropertyListing,
    //   PropertyListing,
    // ];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "bg-rurb-green w-[15px] h-[15px] rounded-[100%]" : "bg-[#D9D9D9] w-[15px] h-[15px] rounded-[100%]"}
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
  arrows
  autoPlaySpeed={4000}
  centerMode={true}
  className=""
  customDot={<CustomDot />}
  containerClass="container-padding-bottom cursor-grab my-[70px] pb-[30px]"
  dotListClass="mt-[30px] relati z-[10000] gap-[30px]"
  draggable
  focusOnSelect={false}
  infinite
  itemClass="scroll-item"
  keyBoardControl
  // customTransition="all 1s linear"
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={true}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 1"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 2"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 2"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 1"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 2"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
  <PropertyListing
    description="React Carousel with Server Side Rendering Support – Part 2"
    title="w3js.com - web front-end studio"
    rurblistbg="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  />
</Carousel>
      {/* <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-padding-bottom cursor-grab my-[70px] pb-[30px]"
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
      </Carousel> */}
    </>
  );
}




export default PropertySlider;
