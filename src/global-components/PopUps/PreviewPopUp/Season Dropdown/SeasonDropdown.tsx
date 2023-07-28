import React, { useState } from "react";
import "./SeasonDropdown.scss";
import { Button } from "@/global-components/Buttons/Button/Button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { ArrowDown2 } from "iconsax-react";
import { setSelectedSeason } from "@/app/Stores/reducers/Preview/previewSlice";

export const SeasonDropdown = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const selectedSeason = useAppSelector(
    (state) => state.preview.selectedSeason
  );
  const btnContent = `${
    selectedSeason === 0 ? "Wszystkie odcinki" : `Sezon ${selectedSeason}`
  }`;
  const arrowClassName = `arrow ${open ? "open" : ""}`;

  const menuClassName = `season-dropdown-menu ${open ? "open" : ""}`;

  const seasons = useAppSelector((state) => state.preview.content.seasons);

  const seasonBtns = seasons.map((season, index) => {
    const handleOnClick = () => {
      dispatch(setSelectedSeason(season.number));
      setOpen(false);
    };
    return (
      <button
        key={index}
        className="season-dropdown-menu-item"
        onClick={handleOnClick}
      >
        <p>
          Sezon {season.number}
          <span>{`(${season.episodes.length} ${
            season.episodes.length > 4
              ? "odcinków"
              : season.episodes.length > 1
              ? "odcinki"
              : "odcinek"
          })`}</span>
        </p>
      </button>
    );
  });

  const handleAllSeasonsOnClick = () => {
    dispatch(setSelectedSeason(0));
    setOpen(false);
  };

  return (
    <div className="season-dropdown">
      <Button
        className="transparent"
        content={btnContent}
        onClick={() => setOpen(!open)}
        icon={<ArrowDown2 className={arrowClassName} size={16} />}
        contentFirst
      />
      <div className={menuClassName}>
        {seasonBtns}
        <div className="season-dropdown-menu-separator" />
        <button
          className="season-dropdown-menu-item all"
          onClick={handleAllSeasonsOnClick}
        >
          <p>Zobacz wszystkie</p>
        </button>
      </div>
    </div>
  );
};
