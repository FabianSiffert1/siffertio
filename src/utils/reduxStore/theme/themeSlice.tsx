import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'darkTheme',
  },
  reducers: {
    changeToTheme: (state, action) => {
      state.value = action.payload; // eslint-disable-line
    },
  },
});

export const { changeToTheme } = themeSlice.actions;

export default themeSlice.reducer;
