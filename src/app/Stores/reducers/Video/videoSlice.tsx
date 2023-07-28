import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MutableRefObject } from "react";

interface VideoState {
  activeVideo: boolean;
  isPlaying: boolean;
  activeProperties: boolean;
  time: number;
  video: {
    seriesName: string;
    season: number;
    episode: {
      number: number;
      name: string;
    };
    length: number;
    src: string;
  };
  videoStateRef: MutableRefObject<HTMLVideoElement | null> | null;
}

const initialState: VideoState = {
  activeVideo: false,
  isPlaying: false,
  activeProperties: false,
  time: 0,
  video: {
    seriesName: "Breaking Bad",
    season: 1,
    episode: { number: 1, name: "Pilot" },
    length: 596,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  videoStateRef: null,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setActiveVideo: (state, action: PayloadAction<boolean>) => {
      state.activeVideo = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setActiveProperties: (state, action: PayloadAction<boolean>) => {
      state.activeProperties = action.payload;
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    setVideoRef: (state, action) => {
      state.videoStateRef = action.payload;
    },
    togglePlay: (state, action: PayloadAction<"play" | "pause" | "toggle">) => {
      if (action?.payload === "play") {
        state.videoStateRef?.current?.play();
        state.isPlaying = true;
        return;
      } else if (action?.payload === "pause") {
        state.videoStateRef?.current?.pause();
        state.isPlaying = false;
        return;
      }
      state.isPlaying
        ? state.videoStateRef?.current?.pause()
        : state.videoStateRef?.current?.play();
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  setActiveVideo,
  setIsPlaying,
  setActiveProperties,
  setTime,
  setVideoRef,
  togglePlay,
} = videoSlice.actions;
export default videoSlice.reducer;
