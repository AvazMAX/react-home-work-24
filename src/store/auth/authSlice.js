import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn } from "./authThunk";
import { STORAGE_KEY, USERS_ROLE } from "../../constants/index";

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEY.AUTH);

  if (json) {
    const userData = JSON.parse(json);

    return {
      isAuthorization: true,
      token: userData.token,

      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",
    user: {
      name: "",
      email: "",
      role: USERS_ROLE.GUEST,
    },
  };
};

const initialState = getInitialState();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthorization = false;
      state.token = "";

      state.user = {
        name: "",
        email: "",
        password: "",
        role: USERS_ROLE.GUEST,
        id: "",
      };
      return localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.payload.token;

        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role,
        };
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.payload.token;

        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role,
        };
      })
      .addCase(signIn.pending, (state) => {
        state.isAuthorization = false;
      });
  },
});

export const authActions = authSlice.actions;
