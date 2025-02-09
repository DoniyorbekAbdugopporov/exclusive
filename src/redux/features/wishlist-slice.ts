import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

const STORAGE_KEY = "wishlist";

const getStoredWishlist = (): IProduct[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveWishlist = (wishlist: IProduct[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
};

interface WishlistState {
  value: IProduct[];
}

const initialState: WishlistState = {
  value: getStoredWishlist(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<IProduct>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.value.push(action.payload);
      } else {
        state.value.splice(index, 1);
      }
      saveWishlist(state.value);
    },
    clearWishlist: (state) => {
      state.value = [];
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { toggleLike, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
