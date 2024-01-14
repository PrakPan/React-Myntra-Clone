import { createSlice } from "@reduxjs/toolkit";
const BagItemSlice = createSlice({
  name: "BagItems",
  initialState: [],
  reducers: {
    addBagItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) => {
      let newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    },
  },
});

export const BagAction = BagItemSlice.actions;

export default BagItemSlice;
