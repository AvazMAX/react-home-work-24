import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFoodsRequest, postNewFoodsRequest } from "../../lib/axios";
import { getBasketFoods } from "../basket/basketThunk";

export const getFoods = createAsyncThunk(
  "foods/foods",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllFoodsRequest();
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postFoods = createAsyncThunk(
  "basket/addToBasket",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await postNewFoodsRequest(data);
      return dispatch(getBasketFoods());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
