import { configureStore } from '@reduxjs/toolkit';
import lastnewsSlice from './lastnewsSlice';

export const store = configureStore({
  reducer: {
    lastNews:lastnewsSlice
  },
});
