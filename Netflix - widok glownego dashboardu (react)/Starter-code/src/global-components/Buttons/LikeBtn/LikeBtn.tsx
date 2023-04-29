import React, { useState } from "react";
import "./LikeBtn.scss";
import { Dislike, Heart, Like1 } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";
import { LikeTooltip } from "@/global-components/Tooltips/LikeTooltip/LikeTooltip";

type LikeBtnProps = {
  className: "white" | "grey" | "transparent";
};

export const LikeBtn = ({ className }: LikeBtnProps) => {
  const btnNames = ["dislike", "like", "love"] as const;
  type IBtnNames = (typeof btnNames)[number];
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

  const buttons = btnNames.map((name, index) => {
    const variant = active === name ? "Bold" : "Linear";
    return (
      <div key={index} className={generateBtnClassName(name)}>
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
