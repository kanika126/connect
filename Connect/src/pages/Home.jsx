import React, { useRef } from "react";
import LandingPage from "../components/HomePage/LandingPage";
import SlideshowComponent from "../components/HomePage/SlideShow";
import useScrollSnap from "react-use-scroll-snap";
const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 15, delay: 7 });
  return (
    <>
     <LandingPage />
    <div className="" ref={scrollRef}>
     
      <SlideshowComponent type="clgexp" />

      <SlideshowComponent type="workexp" />
    </div>
    </>
  );
};

export default Home;
