import { createSlice } from '@reduxjs/toolkit';

export const experienceToggleSlice = createSlice({
  name: 'experienceToggle',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value; // eslint-disable-line
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = experienceToggleSlice.actions;

export default experienceToggleSlice.reducer;
