import React from "react";
import "./PlayBtn.scss";
import { Play } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";
import { setActiveVideo } from "@/app/Stores/reducers/Video/videoSlice";
import { useAppDispatch } from "@/app/hooks";

type PlayBtnProps = {
  className: "white" | "grey" | "transparent";
};

export const PlayBtn = ({ className }: PlayBtnProps) => {
  const dispatch = useAppDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveVideo(true));
  };
  return (
    <div className="play-btn">
      <Button
        className={className}
        content=""
        onClick={handlePlayClick}
        icon={<Play size="14" variant="Bold" />}
        circle={true}
      />
    </div>
  );
};
