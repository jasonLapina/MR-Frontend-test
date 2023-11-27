import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem) {
        const existingIndex = state.indexOf(existingItem);
        state[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + action.payload.quantity,
        };
      } else state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart } = cartSlice.actions;

export default store;
