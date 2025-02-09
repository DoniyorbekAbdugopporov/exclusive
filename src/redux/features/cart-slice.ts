import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/index";

export interface ICartProduct extends IProduct {
  amount: number;
}

export interface CartState {
  value: ICartProduct[];
}

const cartStore = localStorage.getItem("cart");
const initialState: CartState = {
  value: cartStore ? JSON.parse(cartStore) : [],
};

// LocalStorage'ni yangilovchi funksiya
const localStorageSync = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state.value));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<IProduct>) {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push({ ...action.payload, amount: 1 });
      } else {
        state.value[index].amount += 1; // Mahsulot avval bor bo‘lsa, miqdorni oshirish
      }
      localStorageSync(state);
    },

    deleteCart(state, action: PayloadAction<number>) {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorageSync(state);
    },

    incrementAmountCart(state, action: PayloadAction<number>) {
      state.value = state.value.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      localStorageSync(state);
    },

    decrementAmountCart(state, action: PayloadAction<number>) {
      state.value = state.value.map((item) =>
        item.id === action.payload && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      localStorageSync(state);
    },

    clearCart(state) {
      state.value = [];
      localStorage.removeItem("cart");
    },
  },
});

// 🛒 Savat umumiy narxini hisoblash selector'i
export const selectTotalPrice = (state: { cart: CartState }) =>
  state.cart.value.reduce((total, item) => total + item.price * item.amount, 0);

export const {
  addCart,
  incrementAmountCart,
  clearCart,
  decrementAmountCart,
  deleteCart,
} = cartSlice.actions;

export default cartSlice.reducer;
