import React, { useState } from "react";
import "./VolumeBtn.scss";
import { VolumeCross, VolumeHigh, VolumeLow1 } from "iconsax-react";

export const VolumeBtn = () => {
  const [activeVolume, setActiveVolume] = useState<"high" | "low" | "cross">(
    "high"
  );
  const generateVolumeClassName = (name: "high" | "low" | "cross") =>
    `volume-btn ${name} ${activeVolume === name ? "active" : ""}`;

  const handleVolumeClick = () =>
    setActiveVolume(
      activeVolume === "high"
        ? "low"
        : activeVolume === "low"
        ? "cross"
        : "high"
    );
  return (
    <div className="icons volume-btn-container" onClick={handleVolumeClick}>
      <div className={generateVolumeClassName("high")}>
        <VolumeHigh size="50" />
      </div>
      <div className={generateVolumeClassName("low")}>
        <VolumeLow1 size="50" />
      </div>
      <div className={generateVolumeClassName("cross")}>
        <VolumeCross size="50" />
      </div>
    </div>
  );
};
