import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: "lightTheme",
    },
    reducers:{
        changeToTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeToTheme } = themeSlice.actions

export default themeSlice.reducer
