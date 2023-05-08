import React, { useState } from "react";
import "./SeasonDropdown.scss";
import { Button } from "@/global-components/Buttons/Button/Button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

export const SeasonDropdown = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const selectedSeason = useAppSelector(
    (state) => state.preview.selectedSeason
  );

  const content = `Sezon ${selectedSeason}`;

  return (
    <div className="season-dropdown">
      <Button
        className="grey"
        content={content}
        onClick={() => setOpen(!open)}
        icon={open ? <ArrowUp2 size={16} /> : <ArrowDown2 size={16} />}
        contentFirst
      />
    </div>
  );
};
