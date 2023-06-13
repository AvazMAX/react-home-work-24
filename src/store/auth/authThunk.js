import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "../../lib/axios";
import { STORAGE_KEY } from "../../constants";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signUpRequest(payload);

      localStorage.setItem(
        STORAGE_KEY.AUTH,
        JSON.stringify(responce.data.data)
      );

      return responce.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signInRequest(payload);

      localStorage.setItem(
        STORAGE_KEY.AUTH,
        JSON.stringify(responce.data.data)
      );

      return responce.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
