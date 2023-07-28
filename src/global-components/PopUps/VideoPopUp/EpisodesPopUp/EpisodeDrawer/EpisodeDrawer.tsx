import React, { useState } from "react";
import "./EpisodeDrawer.scss";
import { PlayBtn } from "@/global-components/Buttons/PlayBtn/PlayBtn";

interface EpisodeDrawerProps {
  id: number;
  episode: {
    number: number;
    title: string;
    description: string;
    duration: number;
    img: string;
  };
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
}

export const EpisodeDrawer = ({
  id,
  episode,
  open,
  setOpen,
}: EpisodeDrawerProps) => {
  const [visiblePlayBtn, setVisiblePlayBtn] = useState(false);

  const { title, description, img, number } = episode;

  const mainClassName = `episode-drawer ${open ? "open" : ""}`;
  const drawerClassName = `episode-drawer-drawer ${open ? "open" : ""}`;
  return (
    <div
      className={mainClassName}
      onMouseEnter={() => setVisiblePlayBtn(true)}
      onMouseLeave={() => setVisiblePlayBtn(false)}
      onClick={() => {
        setOpen(id);
      }}
    >
      <div className="episode-drawer-header">
        <p className="episode-number">{number}</p>
        <p className="episode-name">{title}</p>
        <div />
      </div>
      <div className={drawerClassName}>
        <div className="picture">
          <img height="100%" src={img} alt={`Episode ${number}`} />
          {visiblePlayBtn && (
            <div className="playBtn-backdrop">
              <PlayBtn className="white" content="" />
            </div>
          )}
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
