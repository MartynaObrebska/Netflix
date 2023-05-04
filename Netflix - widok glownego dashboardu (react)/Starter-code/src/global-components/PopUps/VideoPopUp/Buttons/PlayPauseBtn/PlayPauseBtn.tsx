import React from "react";
import "./PlayPauseBtn.scss";
import { Pause, Play } from "iconsax-react";
import { useAppSelector } from "@/app/hooks";

type PlayPauseBtnProps = {
  togglePlay: (state: "play" | "pause" | "toggle") => void;
};

export const PlayPauseBtn = ({ togglePlay }: PlayPauseBtnProps) => {
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
      onClick={() => togglePlay("toggle")}
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
