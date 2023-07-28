import React from "react";
import "./ForwardBackBtns.scss";
import { Backward10Seconds, Forward10Seconds } from "iconsax-react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setTime } from "@/app/Stores/reducers/Video/videoSlice";

export const ForwardBackBtns = () => {
  const dispatch = useAppDispatch();
  const { time, video, videoStateRef } = useAppSelector((state) => state.video);
  const maxTime = video.length;
  const handleClick = (forward: boolean) => {
    const newTime = forward
      ? time >= maxTime - 10
        ? maxTime
        : time + 10
      : time < 10
      ? 0
      : time - 10;
    dispatch(setTime(newTime));
    if (videoStateRef?.current)
      videoStateRef.current.currentTime = Number(newTime);
  };
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
