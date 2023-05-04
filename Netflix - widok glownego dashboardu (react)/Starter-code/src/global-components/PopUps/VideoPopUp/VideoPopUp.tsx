import React, { useEffect, useRef } from "react";
import "./VideoPopUp.scss";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { VideoProperties } from "./VideoProperties/VideoProperties";
import {
  setActiveProperties,
  setIsPlaying,
} from "@/app/Stores/reducers/Video/videoSlice";

export const VideoPopUp = () => {
  const dispatch = useAppDispatch();
  const { activeVideo, isPlaying, time, video } = useAppSelector(
    (state) => state.video
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoPopUpClassName = `video-pop-up ${activeVideo ? "active" : ""}`;

  const togglePlay = () => {
    isPlaying ? videoRef.current?.pause() : videoRef.current?.play();
    dispatch(setIsPlaying(!isPlaying));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setActiveProperties(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (videoRef.current != undefined) {
      videoRef.current.currentTime = time;
    }
  }, [time]);

  return (
    <div
      className={videoPopUpClassName}
      onMouseMove={() => dispatch(setActiveProperties(true))}
    >
      <div className="video-pop-up-video">
        <video ref={videoRef} className="video">
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <VideoProperties togglePlay={togglePlay} />
    </div>
  );
};
