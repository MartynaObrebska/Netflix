import React, { useState } from "react";
import "./AddBtn.scss";
import { Add, TickCircle } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";
import { BasicTooltip } from "@/global-components/Tooltips/BasicToolitp/BasicTooltip";

interface AddBtnProps {
  className: "white" | "grey" | "transparent";
}

export const AddBtn = ({ className }: AddBtnProps) => {
  const [active, setActive] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const mainClassName = `add-btn ${active ? "active" : ""}`;

  const handleOnClick = () => setActive(!active);
  return (
    <div
      className={mainClassName}
      onMouseEnter={() => setOpenInfo(true)}
      onMouseLeave={() => setOpenInfo(false)}
    >
      <Button
        className={className}
        content=""
        onClick={handleOnClick}
        icon={
          active ? <TickCircle size="32" variant="Bold" /> : <Add size="20" />
        }
        circle={true}
      />
      <BasicTooltip open={openInfo} content="Dodaj do Mojej Listy" />
    </div>
  );
};
