import React, { useState } from "react";
import "./SlideTile.scss";
import { LittlePopUp } from "../../PopUps/LittlePopUp/LittlePopUp";

type SlideTileProps = {
  image: string;
  top10?: boolean;
  rank?: number;
};

export const SlideTile = ({ image, top10, rank }: SlideTileProps) => {
  const [active, setActive] = useState(false);
  const containerClassName = `container${top10 ? " top10" : ""}`;
  const slideTileContainerClassName = `slide-tile-container${
    top10 ? " top10" : ""
  }`;
  const slideClassName = `slide-tile${top10 ? " top10" : ""}`;

  return (
    <div
      className={containerClassName}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className={slideTileContainerClassName}>
        {top10 && <p className={`slide-tile-rank rank${rank}`}>{rank}</p>}
        <div className={slideClassName}>
          <img className="slide-tile-image" src={image} />
        </div>
      </div>
      <LittlePopUp image={image} active={active} />
    </div>
  );
};
