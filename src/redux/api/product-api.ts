// import { IGetProducts, IProduct, IProductQuery } from "@/types";
import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query: (params) => ({
        url: "products",
        method: "GET",
        params,
      }),
      providesTags: ["PRODUCT"],
    }),

    getProductById: build.query<any, { id: number }>({
      query: ({ id }) => ({
        url: `product/${id}`,
        method: "GET",
      }),
      providesTags: ({ id }) => [{ type: "PRODUCT", id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = extendedApi;
