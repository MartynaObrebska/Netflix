import React from "react";
import "./LittlePopUp.scss";
import { Button } from "../../Buttons/Button/Button";
import { ArrowDown2 } from "iconsax-react";
import { LikeBtn } from "@/global-components/Buttons/LikeBtn/LikeBtn";
import { AddBtn } from "@/global-components/Buttons/AddBtn/AddBtn";
import { PlayBtn } from "@/global-components/Buttons/PlayBtn/PlayBtn";

type LittlePopUpProps = {
  image: string;
  top10?: boolean;
  rank?: number;
  active: boolean;
};

export const LittlePopUp = ({ image, active }: LittlePopUpProps) => {
  const popUpClassName = `little-pop-up ${active ? "active" : ""}`;
  const handlePlayClick = () => {
    console.log("click");
  };
  const handleLikeClick = () => {
    console.log("like");
  };

  const buttonsClassName = "transparent";

  return (
    <div className={popUpClassName}>
      <img className="little-pop-up-image" src={image} />
      <div className="little-pop-up-text">
        <div className="little-pop-up-text-buttons">
          <div className="little-pop-up-text-buttons-group">
            <PlayBtn className="white" />
            <AddBtn className={buttonsClassName} />
            <LikeBtn
              handleOnClick={handleLikeClick}
              className={buttonsClassName}
            />
          </div>
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
