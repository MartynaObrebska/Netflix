import React, { ReactElement } from "react";
import "./LittlePopUp.scss";
import { Button } from "../Button/Button";
import { Add, ArrowDown2, IconProps, Like1, Play } from "iconsax-react";

type LittlePopUpProps = {
  image: string;
  top10?: boolean;
  rank?: number;
  active: boolean;
};

export const LittlePopUp = ({ image, active }: LittlePopUpProps) => {
  const popUpClassName = `little-pop-up ${active ? "active" : ""}`;
  const handlePlayClick = () => {
    console.log();
  };

  const buttonsProps: {
    className: "white" | "grey" | "transparent";
    content: string;
    onClick: () => void;
    icon: ReactElement<IconProps>;
  }[] = [
    {
      className: "white",
      content: "",
      onClick: handlePlayClick,
      icon: <Play size="14" variant="Bold" />,
    },
    {
      className: "transparent",
      content: "",
      onClick: handlePlayClick,
      icon: <Add size="16" />,
    },
    {
      className: "transparent",
      content: "",
      onClick: handlePlayClick,
      icon: <Like1 size="14" />,
    },
  ];
  const buttons = buttonsProps.map((button, index) => (
    <Button
      key={index}
      className={button.className}
      content={button.content}
      onClick={button.onClick}
      icon={button.icon}
      circle={true}
    />
  ));

  return (
    <div className={popUpClassName}>
      <img className="little-pop-up-image" src={image} />
      <div className="little-pop-up-text">
        <div className="little-pop-up-text-buttons">
          <div className="little-pop-up-text-buttons-group">{buttons}</div>
          <Button
            className="transparent"
            content=""
            onClick={handlePlayClick}
            icon={<ArrowDown2 size="14" />}
            circle={true}
          />
        </div>
        <div className="little-pop-up-text-slider-section">
          <div className="slider-section-header">
            <p className="episode">W róg</p>
            <p className="time">24 z 58 min</p>
          </div>
          <div className="slider-section-slider">
            <div className="slider-container">
              <div
                className="slider-bar"
                style={{ transform: "translateX( 41% )" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
