import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVideoState {
  activeVideo: boolean;
}

const initialState: IVideoState = {
  activeVideo: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setActiveVideo: (state, action: PayloadAction<boolean>) => {
      state.activeVideo = action.payload;
    },
  },
});

export const { setActiveVideo } = videoSlice.actions;
export default videoSlice.reducer;
