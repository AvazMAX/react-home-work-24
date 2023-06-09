import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteBasketFoodsRequest,
  getBasketFoodsRequest,
  minusBasketFoodsRequest,
  plusBasketFoodsRequest,
} from "../../lib/axios";

export const getBasketFoods = createAsyncThunk(
  "/basket",
  async (_, { rejectWithValue }) => {
    try {
      const data = getBasketFoodsRequest();
      console.log(data);
      return data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const plusBasketFoods = createAsyncThunk(
  "/basketItem/plus",
  async (el, { rejectWithValue, dispatch }) => {
    try {
      plusBasketFoodsRequest(el);
      return dispatch(getBasketFoods());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const minusBasketFoods = createAsyncThunk(
  "/basketItem/minus",
  async (el, { rejectWithValue, dispatch }) => {
    try {
      minusBasketFoodsRequest(el);
      return dispatch(getBasketFoods());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBasketFoods = createAsyncThunk(
  "/basketItem/delete",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      deleteBasketFoodsRequest(id);
      return dispatch(getBasketFoods());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
