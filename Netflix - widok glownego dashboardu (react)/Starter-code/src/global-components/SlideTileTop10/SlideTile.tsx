import React from "react";
import "./SlideTile.scss";

type SlideTileProps = {
  image: string;
};

export const SlideTile = ({ image }: SlideTileProps) => {
  return (
    <div className="slide-tile">
      <img className="slide-tile-image" src={image} />
    </div>
  );
};
