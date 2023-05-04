import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VideoState = {
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
};

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
  },
});

export const { setActiveVideo, setIsPlaying, setActiveProperties, setTime } =
  videoSlice.actions;
export default videoSlice.reducer;
