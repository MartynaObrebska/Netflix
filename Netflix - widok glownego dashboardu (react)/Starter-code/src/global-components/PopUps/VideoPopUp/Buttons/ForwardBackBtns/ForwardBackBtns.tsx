import React from "react";
import "./ForwardBackBtns.scss";
import { Backward10Seconds, Forward10Seconds } from "iconsax-react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setTime } from "@/app/Stores/reducers/Video/videoSlice";

type ForwardBackBtnProps = {
  maxTime: number;
};

export const ForwardBackBtns = ({ maxTime }: ForwardBackBtnProps) => {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state) => state.video.time);
  const handleClick = (forward: boolean) =>
    dispatch(
      setTime(
        forward
          ? time >= maxTime - 10
            ? maxTime
            : time + 10
          : time < 10
          ? 0
          : time - 10
      )
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
