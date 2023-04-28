import React, { useState } from "react";
import "./Carousel.scss";
import ReactSimplyCarousel from "react-simply-carousel";
import { NavCarouselBtn } from "../NavCarouselBtn/NavCarouselBtn";
import {
  screenXs,
  screenSm,
  screenMd,
  screenLg,
  screenXl,
} from "@/utility/breakpoints";
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";

type CarouselProps = {
  slides: JSX.Element[];
  top10?: boolean;
};

export const Carousel = ({ slides, top10 }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const handleOnClick = () => setIsCarouselActive(true);
  const carouselClassName = `carousel ${isCarouselActive ? "active" : ""} ${
    top10 ? "top10" : ""
  }`;

  return (
    <div className={carouselClassName}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        infinite={!top10}
        speed={600}
        easing="ease-out"
        disableNavIfEdgeActive
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
            position: "relative",
          },
        }}
        forwardBtnProps={{
          children: (
            <NavCarouselBtn
              handleOnClick={handleOnClick}
              top10={top10}
              icon={<ArrowRight2 />}
            />
          ),
          style: {
            zIndex: 3,
            position: "absolute",
            top: 0,
            right: 0,
            background: "none",
            border: "none",
          },
        }}
        backwardBtnProps={{
          children:
            activeSlideIndex === 0 && !isCarouselActive ? (
              <div className="back-nav-hidden" />
            ) : (
              <NavCarouselBtn
                back={true}
                top10={top10}
                icon={<ArrowLeft2 />}
                handleOnClick={() => {
                  console.log("back");
                }}
              />
            ),
          style: {
            zIndex: 3,
            position: "absolute",
            left: 0,
            top: 0,
            background: "none",
            border: "none",
          },
        }}
        responsiveProps={
          top10
            ? []
            : [
                { minWidth: screenXs, itemsToScroll: 2 },
                { minWidth: screenSm, itemsToScroll: 3 },
                { minWidth: screenMd, itemsToScroll: 4 },
                { minWidth: screenLg, itemsToScroll: 5 },
                { minWidth: screenXl, itemsToScroll: 6 },
              ]
        }
      >
        {slides}
      </ReactSimplyCarousel>
    </div>
  );
};
