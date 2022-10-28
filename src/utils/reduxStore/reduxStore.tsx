import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import themeReducer from "./theme/themeSlice"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
	},
})

//export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store