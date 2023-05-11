import React from "react";
import "./PlayBtn.scss";
import { Play } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";
import {
  setActiveVideo,
  togglePlay,
} from "@/app/Stores/reducers/Video/videoSlice";
import { useAppDispatch } from "@/app/hooks";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";

interface PlayBtnProps {
  className: "white" | "grey" | "transparent";
  content: string;
}

export const PlayBtn = ({ className, content }: PlayBtnProps) => {
  const dispatch = useAppDispatch();
  const handlePlayClick = () => {
    dispatch(setActiveVideo(true));
    dispatch(togglePlay("play"));
    dispatch(setPreviewActive(false));
  };
  return (
    <div className="play-btn">
      <Button
        className={className}
        content={content}
        onClick={handlePlayClick}
        icon={<Play size="14" variant="Bold" />}
        circle={true}
      />
    </div>
  );
};
