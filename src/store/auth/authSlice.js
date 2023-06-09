import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./authThunk";

const getInitialState = () => {
  const getLocalStorageKeyInAuth = localStorage.getItem("AUTH");
  if (getLocalStorageKeyInAuth) {
    const userData = JSON.parse(getLocalStorageKeyInAuth);
    return {
      isAuthorization: true,
      token: userData.data.token,
      user: {
        name: userData.data.user.name,
        email: userData.data.user.email,
        role: userData.data.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",
    user: {
      email: "",
      name: "",
      role: "",
    },
  };
};

const initialState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthorization = false;
      state.token = "";
      state.user = {
        id: "",
        name: "",
        email: "",
        password: "",
      };
      return localStorage.clear();
    },
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.isAuthorization = true;
      state.token = action.token;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isAuthorization = true;
      state.token = action.token;
    },
    [signIn.pending]: (state, action) => {
      state.isAuthorization = false;
    },
  },
});
export const authActions = authSlice.actions;
