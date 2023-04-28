import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import videoReducer from "./reducers/Video/videoSlice";
import previewReducer from "./reducers/Preview/previewSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    preview: previewReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
