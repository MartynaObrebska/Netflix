import React, { ReactElement } from "react";
import "./NavCarouselBtn.scss";
import { IconProps } from "iconsax-react";
import { Button } from "@/global-components/Button/Button";

type NavCarouselBtnProps = {
  back?: boolean;
  top10?: boolean;
  handleOnClick: () => void;
  icon: ReactElement<IconProps>;
};

export const NavCarouselBtn = ({
  back,
  top10,
  handleOnClick,
  icon,
}: NavCarouselBtnProps) => {
  const shadowClassName = `nav-carousel-button-shadow ${back ? "back" : ""} ${
    top10 ? "top10" : ""
  }`;

  return (
    <div className={shadowClassName}>
      <Button
        className="grey"
        content=""
        onClick={handleOnClick}
        icon={icon}
        circle={true}
      />
    </div>
  );
};
