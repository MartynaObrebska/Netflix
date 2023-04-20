import React, { useState } from "react";
import "./CarouselSection.scss";
import { ArrowRight2 } from "iconsax-react";
import ReactSimplyCarousel from "react-simply-carousel";

type CarouselSectionProps = {
  title: string;
  slides: JSX.Element[];
};

export const CarouselSection = ({ title, slides }: CarouselSectionProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="carousel-section">
      <div className="carousel-section-header">
        <h1 className="title">{title}</h1>
        <button className="see-all">
          <p>Zobacz wszystkie</p>
          <ArrowRight2 size="20" color="#fff" />
        </button>
      </div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        infinite
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
            position: "relative",
          },
        }}
      >
        {slides}
      </ReactSimplyCarousel>
    </div>
  );
};
