import React from "react";
import "./PlayBtn.scss";
import { Play } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";

type PlayBtnProps = {
  className: "white" | "grey" | "transparent";
};

export const PlayBtn = ({ className }: PlayBtnProps) => {
  return (
    <div className="play-btn">
      <Button
        className={className}
        content=""
        onClick={() => console.log("play")}
        icon={<Play size="14" variant="Bold" />}
        circle={true}
      />
    </div>
  );
};
