import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPreviewState {
  active: boolean;
}

const initialState: IPreviewState = {
  active: false,
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setPreviewActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { setPreviewActive } = previewSlice.actions;
export default previewSlice.reducer;
