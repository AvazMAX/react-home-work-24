import { createSlice } from "@reduxjs/toolkit";
import { getBasketFoods } from "./basketThunk";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [getBasketFoods.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});
