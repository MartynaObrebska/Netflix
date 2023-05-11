import React from "react";
import "./BasicTooltip.scss";

interface basicTooltipProps {
  open: boolean;
  content: string;
}

export const BasicTooltip = ({ open, content }: basicTooltipProps) => {
  const tooltipClassName = `basic-tooltip ${open ? "open" : ""}`;
  return (
    <div className={tooltipClassName}>
      <p className="basic-tooltip-content">{content}</p>
    </div>
  );
};
