import { createSlice } from '@reduxjs/toolkit';
import {Themes} from "../../../components/ThemeMenu/ThemeMenu";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: Themes.LIGHT,
  },
  reducers: {
    changeToTheme: (state, action) => {
      state.value = action.payload; // eslint-disable-line
    },
  },
});

export const { changeToTheme } = themeSlice.actions;

export default themeSlice.reducer;
