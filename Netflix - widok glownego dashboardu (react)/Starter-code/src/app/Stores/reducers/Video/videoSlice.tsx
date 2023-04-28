import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IVideoState {
  active: boolean;
}

const initialState: IVideoState = {
  active: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = videoSlice.actions;
export default videoSlice.reducer;
