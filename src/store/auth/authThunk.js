import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "../../lib/axios";

export const signIn = createAsyncThunk(
  "auth/signin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signInRequest(payload);
      localStorage.setItem("AUTH", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signUpRequest(payload);
      localStorage.setItem("AUTH", JSON.stringify(responce.data));
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
