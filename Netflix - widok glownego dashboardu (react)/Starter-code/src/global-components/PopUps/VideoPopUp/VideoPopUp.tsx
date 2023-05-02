import React, { useEffect, useState } from "react";
import "./VideoPopUp.scss";
import { useAppSelector } from "@/app/hooks";
import netflixBgc from "@/assets/images/netflix-background.jpg";
import { VideoProperties } from "./VideoProperties/VideoProperties";

export const VideoPopUp = () => {
  const active = useAppSelector((state) => state.video.activeVideo);
  const [activeProperties, setActiveProperties] = useState(false);

  const videoPopUpClassName = `video-pop-up ${active ? "active" : ""}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveProperties(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeProperties]);

  return (
    <div
      className={videoPopUpClassName}
      onMouseMove={() => setActiveProperties(true)}
    >
      <div className="video-pop-up-video">
        <img className="video" src={netflixBgc} />
      </div>
      <VideoProperties active={activeProperties} />
    </div>
  );
};
