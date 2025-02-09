import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { cartSlice } from "./features/cart-slice";
import tokenSlice from "./features/token-slice";
import wishlist from "./features/wishlist-slice";
import authReducer from "./features/auth-slice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    cart: cartSlice.reducer,
    wishlist,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
