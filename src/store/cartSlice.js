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
      state = state.filter((item) => item.product.name !== action.payload.id);
      saveStateToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const foundItem = state.filter(
        (item) => item.product.name === action.payload.id
      )[0];

      foundItem.quantity = action.payload.quantity;

      saveStateToLocalStorage(state);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
