import React, { useState } from "react";
import "./LikeBtn.scss";
import { Dislike, Heart, Like1 } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";
import { LikeTooltip } from "@/global-components/Tooltips/LikeTooltip/LikeTooltip";
import { BasicTooltip } from "@/global-components/Tooltips/BasicToolitp/BasicTooltip";

interface LikeBtnProps {
  className: "white" | "grey" | "transparent";
}

export const LikeBtn = ({ className }: LikeBtnProps) => {
  const btnNames = [
    { name: "dislike", info: "To nie dla mnie" },
    { name: "like", info: "Podoba mi się" },
    { name: "love", info: "Uwielbiam to" },
  ] as const;
  type IBtnNames = (typeof btnNames)[number]["name"];
  const [display, setDisplay] = useState<IBtnNames>("like");
  const [active, setActive] = useState<IBtnNames | null>(null);
  const [open, setOpen] = useState(false);
  const handleOnClick = (name: IBtnNames) => {
    display === name ? setDisplay("like") : setDisplay(name);
    active === name ? setActive(null) : setActive(name);
  };

  const generateBtnClassName = (name: IBtnNames) =>
    `btn ${name}${active === name ? " active" : ""}${
      display === name ? " display" : ""
    }`;

  const buttons = btnNames.map((btnName, index) => {
    const [openInfo, setOpenInfo] = useState(false);
    const { name, info } = btnName;
    const variant = active === name ? "Bold" : "Linear";
    return (
      <div
        key={index}
        className={generateBtnClassName(name)}
        onMouseEnter={() => setOpenInfo(true)}
        onMouseLeave={() => setOpenInfo(false)}
      >
        <Button
          className={className}
          content=""
          onClick={() => handleOnClick(name)}
          icon={
            (name === "dislike" && <Dislike size="14" variant={variant} />) ||
            (name === "like" && <Like1 size="14" variant={variant} />) || (
              <Heart size="14" variant={variant} />
            )
          }
          circle={true}
        />
        <BasicTooltip open={openInfo} content={info} />
      </div>
    );
  });

  return (
    <div
      className="btn-container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {buttons}
      <LikeTooltip open={open} buttons={buttons} />
    </div>
  );
};
