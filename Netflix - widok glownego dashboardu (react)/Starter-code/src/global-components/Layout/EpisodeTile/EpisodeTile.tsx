import React, { useState } from "react";
import "./EpisodeTile.scss";
import { PlayBtn } from "../../Buttons/PlayBtn/PlayBtn";
import { setPreviewActive } from "@/app/Stores/reducers/Preview/previewSlice";
import {
  setActiveVideo,
  togglePlay,
} from "@/app/Stores/reducers/Video/videoSlice";
import { useAppDispatch } from "@/app/hooks";

interface EpisodeTileProps {
  episode: {
    number: number;
    title: string;
    description: string;
    duration: number;
    img: string;
  };
}

export const EpisodeTile = ({ episode }: EpisodeTileProps) => {
  const dispatch = useAppDispatch();
  const { number, title, description, duration, img } = episode;
  const [visiblePlayBtn, setVisiblePlayBtn] = useState(false);
  const handlePlayClick = () => {
    dispatch(setActiveVideo(true));
    dispatch(togglePlay("play"));
    dispatch(setPreviewActive(false));
  };
  return (
    <div
      className="episode-tile"
      onMouseEnter={() => setVisiblePlayBtn(true)}
      onMouseLeave={() => setVisiblePlayBtn(false)}
      onClick={handlePlayClick}
    >
      <div className="episode-tile-number">{number}</div>
      <div className="episode-tile-picture">
        <img width="100%" src={img} alt={`Episode ${number}`} />
        {visiblePlayBtn && (
          <div className="playBtn-backdrop">
            <PlayBtn className="white" content="" />
          </div>
        )}
      </div>
      <div className="episode-tile-desc-section">
        <div className="top-section">
          <p className="title">{title}</p>
          <p className="time">{`${duration} min`}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
