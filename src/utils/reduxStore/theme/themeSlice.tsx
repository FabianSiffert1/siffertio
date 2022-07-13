import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: "lightTheme",
    },
    reducers:{
        changeToDarkTheme: (state) => {
            state.value = "darkTheme";
        },
        changeToLightTheme: (state) => {
            state.value = "lightTheme";
        },
        changeToTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeToDarkTheme, changeToLightTheme, changeToTheme } = themeSlice.actions

export default themeSlice.reducer
