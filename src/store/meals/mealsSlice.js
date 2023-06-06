import { createSlice } from "@reduxjs/toolkit";
import { getFoods } from "./MealsThunk";

const initialState = {
  meals: [],
  modal: false,
};

export const MealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: {
    [getFoods.fulfilled]: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const MealsActions = MealsSlice.actions;
