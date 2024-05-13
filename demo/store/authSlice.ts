import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface Auth {
  isLoggedIn: boolean;
  token: string | null;
  userProperties: string[];
}

export type AuthState = {
  auth: Auth;
};

export const INITIAL_STATE: AuthState = {
  auth: {
    isLoggedIn: false,
    token: null,
    userProperties: [],
  },
};

export type articleSlice = {
  article: {};
};

export type selectAuth = {
  state: boolean;
};

export const authSlice: any = createSlice({
  name: "auth",
  reducers: {
    changeAuthState: (state: RootState, action: PayloadAction<String>) => {
      const newAuth = action.payload;
      state.auth = newAuth;
    },
  },
  initialState: INITIAL_STATE,
});

export default authSlice.reducer;
export const { changeAuthState } = authSlice.actions;

// add selctAuthState

export const selectAuthState = (state: RootState) => {
  return typeof state?.auth?.auth === "string"
    ? JSON.parse(state.auth?.auth).state
    : state?.auth?.auth.state;
};
