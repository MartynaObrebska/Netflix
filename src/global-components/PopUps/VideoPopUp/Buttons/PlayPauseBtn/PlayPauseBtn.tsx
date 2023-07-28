import React from "react";
import "./PlayPauseBtn.scss";
import { Pause, Play } from "iconsax-react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { togglePlay } from "@/app/Stores/reducers/Video/videoSlice";

export const PlayPauseBtn = () => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.video.isPlaying);
  const generatePlayClassName = (name: "play" | "pause") =>
    `play-btn ${name} ${
      (name === "play" && !isPlaying) || (name === "pause" && isPlaying)
        ? "active"
        : ""
    }`;

  return (
    <div
      className="icons play-btn-container"
      onClick={() => dispatch(togglePlay("toggle"))}
    >
      <div className={generatePlayClassName("play")}>
        <Play size="50" />
      </div>
      <div className={generatePlayClassName("pause")}>
        <Pause size="50" />
      </div>
    </div>
  );
};
