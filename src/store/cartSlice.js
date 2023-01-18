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
      console.log("addItem", action.payload);
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
