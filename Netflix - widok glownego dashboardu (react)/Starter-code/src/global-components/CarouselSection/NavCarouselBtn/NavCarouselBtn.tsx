import React from "react";
import "./NavCarouselBtn.scss";
import { ArrowRight2 } from "iconsax-react";

type NavCarouselBtnProps = {
  back?: boolean;
  top10?: boolean;
  handleOnClick?: () => void;
};

export const NavCarouselBtn = ({
  back,
  top10,
  handleOnClick,
}: NavCarouselBtnProps) => {
  const btnClassName = `nav-carousel-button ${back ? "back" : ""}`;
  const shadowClassName = `nav-carousel-button-shadow ${back ? "back" : ""} ${
    top10 ? "top10" : ""
  }`;

  return (
    <div className={shadowClassName}>
      <div className={btnClassName} onClick={handleOnClick}>
        <ArrowRight2 size="16" />
      </div>
    </div>
  );
};
