import React, { useState } from "react";
import "./VideoProperties.scss";
import {
  ArrowLeft,
  Flag,
  I3Square,
  Maximize2,
  MessageText1,
  Next,
  Speedometer,
} from "iconsax-react";
import { useAppDispatch } from "@/app/hooks";
import { setActiveVideo } from "@/app/Stores/reducers/Video/videoSlice";
import { PlayPauseBtn } from "../Buttons/PlayPauseBtn/PlayPauseBtn";
import { VolumeBtn } from "../Buttons/VolumeBtn/VolumeBtn";
import { ForwardBackBtns } from "../Buttons/ForwardBackBtns/ForwardBackBtns";

type VideoPropertiesProps = {
  active: boolean;
};

export const VideoProperties = ({ active }: VideoPropertiesProps) => {
  const [time, setTime] = useState(3984);
  const dispatch = useAppDispatch();

  const maxTime = 3987;

  const videoPropertiesClassName = `video-properties ${active ? "active" : ""}`;
  const sliderPercentage = `${((time + 1) / maxTime) * 100}%`;
  const seriesName = "Breaking Bad";
  const episodeNumber = "E1";
  const episodeName = "Pilot";

  const generateClockPart = (part: number) =>
    part >= 10 ? part : part > 0 ? `0${part}` : "00";

  const generateClock = (time: number) => {
    const hours = time > 3600 ? Math.floor(time / 3600) : 0;
    const min = time > 60 ? Math.floor((time - hours * 3600) / 60) : 0;
    const sec = time - min * 60 - hours * 3600;
    return `${generateClockPart(hours)}:${generateClockPart(
      min
    )}:${generateClockPart(sec)}`;
  };

  const handleReturnOnClick = () => {
    dispatch(setActiveVideo(false));
  };

  return (
    <div className={videoPropertiesClassName}>
      <div className="top-section">
        <div className="icons back-btn" onClick={handleReturnOnClick}>
          <ArrowLeft size="50" />
        </div>
        <div className="icons flag-btn">
          <Flag size="50" />
        </div>
      </div>
      <div className="low-section">
        <div className="low-section-time-section">
          <div className="low-section-time-section-bar">
            <input
              type="range"
              min="0"
              max={`${maxTime}`}
              value={time}
              className="slider"
            />
            <div className="color" style={{ width: sliderPercentage }} />
          </div>
          <p className="low-section-time-section-time">{generateClock(time)}</p>
        </div>
        <div className="low-section-icons">
          <div className="low-section-icons-left">
            <PlayPauseBtn />
            <ForwardBackBtns time={time} setTime={setTime} maxTime={maxTime} />
            <VolumeBtn />
          </div>
          <div className="low-section-icons-middle">
            <p className="series-name">{seriesName}</p>
            <p className="episode-number">{episodeNumber}</p>
            <p className="episode-name">{episodeName}</p>
          </div>
          <div className="low-section-icons-right">
            <div className="icons next-btn">
              <Next size="50" />
            </div>
            <div className="icons episodes-btn">
              <I3Square size="45" />
            </div>
            <div className="icons subtitles-btn">
              <MessageText1 size="45" />
            </div>
            <div className="icons speed-btn">
              <Speedometer size="45" />
            </div>
            <div className="icons fullscreen-btn">
              <Maximize2 size="45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
