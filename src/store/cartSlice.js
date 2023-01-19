import { createSlice } from "@reduxjs/toolkit";

const getStateFromLocalStorage = () => {
  const dataJson = localStorage.getItem("cart");
  const data = dataJson ? JSON.parse(dataJson) : [];

  return data;
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: getStateFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      if (!state.some((x) => x.product.name === action.payload.product.name)) {
        state.push({
          product: action.payload.product,
          quantity: 1,
        });
      } else {
        const foundItem = state.filter(
          (x) => x.product.name === action.payload.product.name
        )[0];
        foundItem.quantity += 1;
      }
      saveStateToLocalStorage(state);
    },
    removeItem: (state, action) => {
      console.log("removeItem", action.payload);
      saveStateToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
