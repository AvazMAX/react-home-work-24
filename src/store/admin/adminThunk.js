import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteAdminFoodsRequest,
  editAdminFoodsRequest,
  postNewFoodsAdminRequest,
} from "../../lib/axios";
import { getFoods } from "../meals/MealsThunk";

export const postNewFoodsAdmin = createAsyncThunk(
  "admin/postAdminMeals",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await postNewFoodsAdminRequest(payload);
      dispatch(getFoods());
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const delelteNewFoodsAdmin = createAsyncThunk(
  "foods/delete",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await deleteAdminFoodsRequest(data);
      return dispatch(getFoods());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editAdminFoods = createAsyncThunk(
  "foods/edit",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await editAdminFoodsRequest(data);
      dispatch(getFoods());
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
