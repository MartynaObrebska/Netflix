import React from "react";
import "./CarouselSection.scss";
import { ArrowRight2 } from "iconsax-react";
import { Carousel } from "./Carousel/Carousel";

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
  return (
    <div className="carousel-section">
      <div className="carousel-section-header">
        <h1 className="title">{title}</h1>
        <button className="see-all">
          <p>Zobacz wszystkie</p>
          <ArrowRight2
            className="arrow small"
            size="14"
            color="$color-primary-white"
          />
          <ArrowRight2
            className="arrow big"
            size="16"
            color="$color-primary-white"
          />
        </button>
      </div>
      <Carousel slides={slides} top10={top10} />
    </div>
  );
};
