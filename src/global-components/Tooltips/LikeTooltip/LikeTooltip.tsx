import React from "react";
import "./LikeTooltip.scss";

interface LikeTooltipProps {
  open: boolean;
  buttons: JSX.Element[];
}

export const LikeTooltip = ({ open, buttons }: LikeTooltipProps) => {
  const tooltipClassName = `like-tooltip ${open ? "open" : ""}`;
  return <div className={tooltipClassName}>{buttons}</div>;
};
