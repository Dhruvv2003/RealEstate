import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js';

export const store = configureStore({
    reduccer: {user : userReducer},
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
});