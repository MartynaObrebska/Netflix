import React, { useEffect, useRef, useState } from "react";
import "./VideoPopUp.scss";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { VideoProperties } from "./VideoProperties/VideoProperties";
import {
  setActiveProperties,
  setTime,
  setVideoRef,
  togglePlay,
} from "@/app/Stores/reducers/Video/videoSlice";
import { EpisodesPopUp } from "./EpisodesPopUp/EpisodesPopUp";

export const VideoPopUp = () => {
  // const [activeNextEpisodePopUp, setActiveNextEpisodePopUp] = useState(false);
  const [activeEpisodesPopUp, setActiveEpisodesPopUp] = useState(false);
  // const [activeLanguagesPopUp, setActiveLanguagesPopUp] = useState(false);
  // const [activeVideoSpeedPopUp, setActiveVideoSpeedPopUp] = useState(false);
  // const [activeProblemsPopUp, setActiveProblemsPopUp] = useState(false);
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
      <div className="video-pop-up-video" onClick={() => togglePlay("toggle")}>
        <video
          onTimeUpdate={handleOnTimeUpdate}
          ref={videoRef}
          className="video"
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <VideoProperties setActiveEpisodesPopUp={setActiveEpisodesPopUp} />
      <EpisodesPopUp
        active={activeEpisodesPopUp}
        setActive={setActiveEpisodesPopUp}
      />
    </div>
  );
};
