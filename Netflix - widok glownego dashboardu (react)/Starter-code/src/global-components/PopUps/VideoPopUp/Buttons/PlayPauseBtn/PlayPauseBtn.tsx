import React, { useState } from "react";
import "./PlayPauseBtn.scss";
import { Pause, Play } from "iconsax-react";

export const PlayPauseBtn = () => {
  const [activePlay, setActivePlay] = useState<"play" | "pause">("pause");
  const generatePlayClassName = (name: "play" | "pause") =>
    `play-btn ${name} ${activePlay === name ? "active" : ""}`;

  const handlePlayClick = () =>
    setActivePlay(activePlay === "play" ? "pause" : "play");

  return (
    <div className="icons play-btn-container" onClick={handlePlayClick}>
      <div className={generatePlayClassName("play")}>
        <Play size="50" />
      </div>
      <div className={generatePlayClassName("pause")}>
        <Pause size="50" />
      </div>
    </div>
  );
};
