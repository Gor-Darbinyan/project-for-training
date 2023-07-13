import { configureStore } from '@reduxjs/toolkit';
import lastnewsSlice from './lastnewsSlice';
import userSlice from './userSlice';
export const store = configureStore({
  reducer: {
    lastNews:lastnewsSlice,
    user: userSlice
  },
});
