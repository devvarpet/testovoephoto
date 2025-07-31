import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "../../api/gallerySlice.ts";
import { galleryApi } from "../../api/galleryApi.ts";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
