import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["PRODUCT", "CUSTOMER", "WISHLIST", "CART"],
  endpoints: () => ({}),
});
