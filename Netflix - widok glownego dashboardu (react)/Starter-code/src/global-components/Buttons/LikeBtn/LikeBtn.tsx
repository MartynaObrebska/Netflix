import React from "react";
import "./LikeBtn.scss";
import { Like1 } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";

type LikeBtnProps = {
  handleOnClick: () => void;
  className: "white" | "grey" | "transparent";
};

export const LikeBtn = ({ handleOnClick, className }: LikeBtnProps) => {
  return (
    <Button
      className={className}
      content=""
      onClick={handleOnClick}
      icon={<Like1 size="14" />}
      circle={true}
    />
  );
};
