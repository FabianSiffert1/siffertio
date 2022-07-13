import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import themeReducer from './theme/themeSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    },
})
