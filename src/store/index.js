import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basket/basketSlice";
import { MealsSlice } from "./meals/mealsSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [MealsSlice.name]: MealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
