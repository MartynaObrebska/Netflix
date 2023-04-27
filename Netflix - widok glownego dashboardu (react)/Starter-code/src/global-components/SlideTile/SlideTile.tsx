import React, { useState } from "react";
import "./SlideTile.scss";
import { LittlePopUp } from "../LittlePopUp/LitlePopUp";

type SlideTileProps = {
  image: string;
  top10?: boolean;
  rank?: number;
};

export const SlideTile = ({ image, top10, rank }: SlideTileProps) => {
  const [active, setActive] = useState(false);
  const containerClassName = `slide-tile-container${top10 ? " top10" : ""}`;
  const slideClassName = `slide-tile${top10 ? " top10" : ""}`;

  return (
    <div
      className="container"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className={containerClassName}>
        {top10 && <p className={`slide-tile-rank rank${rank}`}>{rank}</p>}
        <div className={slideClassName}>
          <img className="slide-tile-image" src={image} />
        </div>
      </div>
      <LittlePopUp image={image} active={active} />
    </div>
  );
};
