import { configureStore } from "@reduxjs/toolkit";
import { MealsSlice } from "./meals/mealsSlice";
import { BasketSlice } from "./basket/basketSlice";

export const store = configureStore({
  reducer: {
    [MealsSlice.name]: MealsSlice.reducer,
    [BasketSlice.name]: BasketSlice.reducer,
  },
});
