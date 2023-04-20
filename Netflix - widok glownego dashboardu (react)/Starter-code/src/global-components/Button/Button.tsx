import React, { ReactElement } from "react";
import "./Button.scss";
import { IconProps } from "iconsax-react";

type ButtonProps = {
  icon: ReactElement<IconProps>;
  className: "white" | "grey" | "transparent";
  content: string;
  onClick: () => void;
};

export const Button = ({ className, content, onClick, icon }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
};
