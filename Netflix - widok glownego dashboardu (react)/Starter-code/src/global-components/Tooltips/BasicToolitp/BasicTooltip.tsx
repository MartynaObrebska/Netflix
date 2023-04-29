import React from "react";
import "./BasicTooltip.scss";

export const BasicTooltip = (active: boolean) => {
  const tooltipClassName = `basic-tooltip ${active ? "active" : ""}`;
  return <div className={tooltipClassName}></div>;
};
