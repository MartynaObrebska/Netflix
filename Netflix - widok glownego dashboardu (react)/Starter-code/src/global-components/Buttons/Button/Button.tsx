import React, { ReactElement } from "react";
import "./Button.scss";
import { IconProps } from "iconsax-react";

type ButtonProps = {
  icon: ReactElement<IconProps>;
  className: "white" | "grey" | "transparent";
  content: string;
  onClick: () => void;
  circle?: boolean;
  contentFirst?: boolean;
};

export const Button = ({
  className,
  content,
  onClick,
  icon,
  circle,
  contentFirst,
}: ButtonProps) => {
  return (
    <div
      className={`button ${className} ${circle ? "circle" : ""}`}
      onClick={onClick}
    >
      {contentFirst && content}
      {icon}
      {!contentFirst && content}
    </div>
  );
};
