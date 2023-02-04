import { configureStore } from "@reduxjs/toolkit";
import experienceToggleReducer from "./experienceToggle/experienceToggleSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    experienceToggle: experienceToggleReducer,
    theme: themeReducer,
  },
});

//export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
