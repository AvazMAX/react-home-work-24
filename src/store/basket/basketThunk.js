import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteBasketFoodsRequest,
  getBasketFoodsRequest,
  minusBasketFoodsRequest,
  plusBasketFoodsRequest,
} from "../../lib/axios";

export const getBasket = createAsyncThunk(
  "items/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getBasketFoodsRequest();
      console.log(data);
      return data.data.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const plusBasketFoods = createAsyncThunk(
  "items/plus",
  async (el, { rejectWithValue, dispatch }) => {
    try {
      plusBasketFoodsRequest(el);
      return dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const minusBasketFoods = createAsyncThunk(
  "items/minus",
  async (el, { rejectWithValue, dispatch }) => {
    try {
      minusBasketFoodsRequest(el);
      return dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBasketFoods = createAsyncThunk(
  "items/delete",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      deleteBasketFoodsRequest(id);
      return dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
