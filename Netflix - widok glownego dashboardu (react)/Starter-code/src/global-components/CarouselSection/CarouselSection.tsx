import React, { useState } from "react";
import "./CarouselSection.scss";
import { ArrowRight2 } from "iconsax-react";
import ReactSimplyCarousel from "react-simply-carousel";

type CarouselSectionProps = {
  title: string;
  slides: JSX.Element[];
  top10?: boolean;
};

export const CarouselSection = ({
  title,
  slides,
  top10,
}: CarouselSectionProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="carousel-section">
      <div className="carousel-section-header">
        <h1 className="title">{title}</h1>
        <button className="see-all">
          <p>Zobacz wszystkie</p>
          <ArrowRight2 className="arrow small" size="14" color="#fff" />
          <ArrowRight2 className="arrow big" size="16" color="#fff" />
        </button>
      </div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        infinite={!top10}
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
