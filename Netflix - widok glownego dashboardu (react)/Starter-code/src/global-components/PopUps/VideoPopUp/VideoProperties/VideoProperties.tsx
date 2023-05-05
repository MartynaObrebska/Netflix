import React, { ChangeEvent } from "react";
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
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  setActiveVideo,
  setTime,
  togglePlay,
} from "@/app/Stores/reducers/Video/videoSlice";
import { PlayPauseBtn } from "../Buttons/PlayPauseBtn/PlayPauseBtn";
import { VolumeBtn } from "../Buttons/VolumeBtn/VolumeBtn";
import { ForwardBackBtns } from "../Buttons/ForwardBackBtns/ForwardBackBtns";

export const VideoProperties = () => {
  const dispatch = useAppDispatch();
  const { time, activeProperties, video, videoStateRef } = useAppSelector(
    (state) => state.video
  );

  const maxTime = video.length;

  const videoPropertiesClassName = `video-properties ${
    activeProperties ? "active" : ""
  }`;
  const sliderPercentage = `${((time + 1) / maxTime) * 100}%`;
  const seriesName = "Breaking Bad";
  const episodeNumber = "E1";
  const episodeName = "Pilot";

  const generateClockPart = (part: number) =>
    part >= 10 ? part : part > 0 ? `0${part}` : "00";

  const generateClock = (time: number, maxTime: number) => {
    const remTime = maxTime - Math.floor(time);
    const hours = remTime > 3600 ? Math.floor(remTime / 3600) : 0;
    const min = remTime > 60 ? Math.floor((remTime - hours * 3600) / 60) : 0;
    const sec = remTime - min * 60 - hours * 3600;
    return `${generateClockPart(hours)}:${generateClockPart(
      min
    )}:${generateClockPart(sec)}`;
  };

  const handleReturnOnClick = () => {
    dispatch(setActiveVideo(false));
    dispatch(togglePlay("pause"));
  };

  const handleTimeIndicator = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTime(Number(e.target.value)));
    if (videoStateRef?.current != undefined) {
      videoStateRef.current.currentTime = Number(e.target.value);
    }
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
              onChange={(e) => handleTimeIndicator(e)}
              className="slider"
            />
            <div className="color" style={{ width: sliderPercentage }} />
          </div>
          <p className="low-section-time-section-time">
            {generateClock(time, maxTime)}
          </p>
        </div>
        <div className="low-section-icons">
          <div className="low-section-icons-left">
            <PlayPauseBtn />
            <ForwardBackBtns />
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
