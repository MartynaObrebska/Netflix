import React, { useState } from "react";
import "./EpisodesPopUp.scss";
import { ArrowLeft } from "iconsax-react";
import { useAppSelector } from "@/app/hooks";
import { EpisodeDrawer } from "./EpisodeDrawer/EpisodeDrawer";

interface EpisodesPopUpProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EpisodesPopUp = ({ active, setActive }: EpisodesPopUpProps) => {
  const [openEpisodeDrawer, setOpenEpisodeDrawer] = useState<number>(0);
  const episodesPopUpClassName = `episodes-pop-up ${active ? "active" : ""}`;
  const selectedSeason = useAppSelector(
    (state) => state.preview.selectedSeason
  );
  const { number, episodes } = useAppSelector(
    (state) => state.preview.content.seasons[selectedSeason - 1]
  );
  const episodesDrawers = episodes.map((episode, index) => (
    <EpisodeDrawer
      key={index}
      id={index}
      episode={episode}
      open={openEpisodeDrawer === index}
      setOpen={setOpenEpisodeDrawer}
    />
  ));
  return (
    <div
      className={episodesPopUpClassName}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="episodes-pop-up-header">
        <ArrowLeft size="32" />
        <h2 className="season">Sezon {number}</h2>
      </div>
      <div className="episodes-pop-up-drawers">{episodesDrawers}</div>
    </div>
  );
};
