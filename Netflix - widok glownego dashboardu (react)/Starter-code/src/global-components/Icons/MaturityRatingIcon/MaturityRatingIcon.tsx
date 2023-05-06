import React from "react";
import "./MaturityRatingIcon.scss";

type MaturityRatingIconProps = {
  number: number;
};

export const MaturityRatingIcon = ({ number }: MaturityRatingIconProps) => {
  const content = `${number === 0 ? "ALL" : String(number) + "+"}`;
  return <div className="maturity-rating-icon">{content}</div>;
};
