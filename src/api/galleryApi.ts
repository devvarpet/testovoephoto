import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiResponse } from "../types/types.ts";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getImage: builder.query<ApiResponse, { query: string; page?: number }>({
      query: ({ query, page }) => ({
        url: "search/photos?client_id=75hyzgi5imxqNRMLnH04tJqK5RcNC2sCgCgyuXGw6l8",
        params: {
          query,
          page,
          limit: 10,
        },
      }),
    }),
  }),
});

export const { useGetImageQuery } = galleryApi;
