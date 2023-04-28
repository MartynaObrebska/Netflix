import React, { useState } from "react";
import "./AddBtn.scss";
import { Add, TickCircle } from "iconsax-react";
import { Button } from "@/global-components/Buttons/Button/Button";

type AddBtnProps = {
  className: "white" | "grey" | "transparent";
};

export const AddBtn = ({ className }: AddBtnProps) => {
  const [active, setActive] = useState(false);
  const handleOnClick = () => setActive(!active);
  const mainClassName = `add-btn ${active ? "active" : ""}`;
  return (
    <div className={mainClassName}>
      <Button
        className={className}
        content=""
        onClick={handleOnClick}
        icon={
          active ? <TickCircle size="32" variant="Bold" /> : <Add size="20" />
        }
        circle={true}
      />
    </div>
  );
};
