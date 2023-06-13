// import { createSlice } from "@reduxjs/toolkit";
// import { getBasketFoods } from "./basketThunk";

import { getBasket } from "./basketThunk";
import { createSlice } from "@reduxjs/toolkit";
import { postFoods } from "../meals/MealsThunk";

// const initialState = {
//   items: [],
// };

// export const BasketSlice = createSlice({
//   name: "items",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getBasketFoods.fulfilled, (state, action) => {
//       console.log("action", action.payload);
//       state.items = action.payload;
//     });
//   },
// });

// export const Basketactions = BasketSlice.actions;

const initialState = {
  items: [],
  isLoading: false,
  isError: "",
};

export const basketSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(getBasket.pending, (state) => {
        state.items = [];
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.items = [];
        state.isLoading = true;
        state.isError = action.payload;
      })
      .addCase(postFoods.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(postFoods.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(postFoods.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
