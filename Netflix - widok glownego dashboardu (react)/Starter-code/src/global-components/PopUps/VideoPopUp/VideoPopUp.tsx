import React, { useEffect, useRef } from "react";
import "./VideoPopUp.scss";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { VideoProperties } from "./VideoProperties/VideoProperties";
import {
  setActiveProperties,
  setTime,
  setVideoRef,
} from "@/app/Stores/reducers/Video/videoSlice";

export const VideoPopUp = () => {
  const dispatch = useAppDispatch();
  const { activeVideo, video, videoStateRef, activeProperties } =
    useAppSelector((state) => state.video);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoPopUpClassName = `video-pop-up ${activeVideo ? "active" : ""}`;

  const handleOnTimeUpdate = () => {
    if (videoStateRef?.current != undefined) {
      dispatch(setTime(videoStateRef.current.currentTime));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setActiveProperties(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeProperties]);

  useEffect(() => {
    dispatch(setVideoRef(videoRef));
  }, [videoRef]);

  return (
    <div
      className={videoPopUpClassName}
      onMouseMove={() => dispatch(setActiveProperties(true))}
    >
      <div className="video-pop-up-video">
        <video
          onTimeUpdate={handleOnTimeUpdate}
          ref={videoRef}
          className="video"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <VideoProperties />
    </div>
  );
};
