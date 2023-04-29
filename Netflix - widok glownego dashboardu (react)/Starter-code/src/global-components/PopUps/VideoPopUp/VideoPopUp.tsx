import React from "react";
import "./VideoPopUp.scss";
import { ArrowLeft } from "iconsax-react";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setActiveVideo } from "@/app/Stores/reducers/Video/videoSlice";

export const VideoPopUp = () => {
  const active = useAppSelector((state) => state.video.activeVideo);
  const dispatch = useAppDispatch();

  const handleReturnOnClick = () => {
    dispatch(setActiveVideo(false));
  };

  const videoPopUpClassName = `video-pop-up ${active ? "active" : ""}`;
  return (
    <div className={videoPopUpClassName}>
      <div className="video-pop-up-back-btn" onClick={handleReturnOnClick}>
        <ArrowLeft size="50" />
      </div>
    </div>
  );
};