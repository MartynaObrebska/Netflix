import React, { useState } from "react";
import "./LittlePopUp.scss";
import { Button } from "../../Buttons/Button/Button";
import { ArrowDown2 } from "iconsax-react";
import { LikeBtn } from "@/global-components/Buttons/LikeBtn/LikeBtn";
import { AddBtn } from "@/global-components/Buttons/AddBtn/AddBtn";
import { PlayBtn } from "@/global-components/Buttons/PlayBtn/PlayBtn";
import { useAppDispatch } from "@/app/hooks";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";
import { BasicTooltip } from "@/global-components/Tooltips/BasicToolitp/BasicTooltip";
import {
  setActiveVideo,
  togglePlay,
} from "@/app/Stores/reducers/Video/videoSlice";

type LittlePopUpProps = {
  image: string;
  top10?: boolean;
  rank?: number;
  active: boolean;
};

export const LittlePopUp = ({ image, active }: LittlePopUpProps) => {
  const [openInfo, setOpenInfo] = useState(false);
  const dispatch = useAppDispatch();

  const handlePreviewClick = () => {
    dispatch(setPreviewActive(true));
  };

  const handleImageClick = () => {
    dispatch(setActiveVideo(true));
    dispatch(togglePlay("play"));
  };

  const popUpClassName = `little-pop-up ${active ? "active" : ""}`;

  const buttonsClassName = "transparent";

  return (
    <div className={popUpClassName}>
      <img
        className="little-pop-up-image"
        src={image}
        onClick={handleImageClick}
      />
      <div className="little-pop-up-text">
        <div className="little-pop-up-text-buttons">
          <div className="little-pop-up-text-buttons-group">
            <PlayBtn className="white" content="" />
            <AddBtn className={buttonsClassName} />
            <LikeBtn className={buttonsClassName} />
          </div>
          <div
            className="more-info-btn"
            onMouseEnter={() => setOpenInfo(true)}
            onMouseLeave={() => setOpenInfo(false)}
          >
            <Button
              className="transparent"
              content=""
              onClick={handlePreviewClick}
              icon={<ArrowDown2 size="14" />}
              circle={true}
            />
            <BasicTooltip open={openInfo} content="Więcej" />
          </div>
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
