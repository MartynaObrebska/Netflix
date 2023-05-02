import React from "react";
import "./ForwardBackBtns.scss";
import { Backward10Seconds, Forward10Seconds } from "iconsax-react";

type ForwardBackBtnProps = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  maxTime: number;
};

export const ForwardBackBtns = ({
  time,
  setTime,
  maxTime,
}: ForwardBackBtnProps) => {
  const handleClick = (forward: boolean) =>
    setTime(
      forward
        ? time >= maxTime - 10
          ? maxTime
          : time + 10
        : time < 10
        ? 0
        : time - 10
    );

  return (
    <>
      <div
        className="icons backward10seconds-btn"
        onClick={() => handleClick(false)}
      >
        <Backward10Seconds size="50" />
      </div>
      <div
        className="icons forward10seconds-btn"
        onClick={() => handleClick(true)}
      >
        <Forward10Seconds size="50" />
      </div>
    </>
  );
};
