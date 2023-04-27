import React, { ReactElement } from "react";
import "./Button.scss";
import { IconProps } from "iconsax-react";

type ButtonProps = {
  icon: ReactElement<IconProps>;
  className: "white" | "grey" | "transparent";
  content: string;
  onClick: () => void;
  circle?: boolean;
};

export const Button = ({
  className,
  content,
  onClick,
  icon,
  circle,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className} ${circle ? "circle" : ""}`}
      onClick={onClick}
    >
      {icon}
      {content}
    </button>
  );
};
