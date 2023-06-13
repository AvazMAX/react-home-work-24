import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFoodsRequest, postNewFoodsRequest } from "../../lib/axios";
import { getBasket, getBasketFoods } from "../basket/basketThunk";

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
  "basket/addItem",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await postNewFoodsRequest(data);
      dispatch(getBasket());
      return response.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
