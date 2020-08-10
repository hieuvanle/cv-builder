import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from "../services/cookies";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuth: !!getAuthToken(),
    token: null,
  },
  reducers: {
    setToken(state, action) {
      setAuthToken(action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    },
    checkAuth(state, action) {
      return {
        ...state,
        isAuth: action.payload,
        token: getAuthToken(),
      };
    },
    register(state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    failedRegister(state, action) {
      return {
        ...state,
        isLoading: false,
      };
    },
    successfulRegister(state, action) {
      return {
        ...state,
        isLoading: false,
      };
    },
    logout(state, action) {
      removeAuthToken();
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    },
  },
});
export default authSlice.reducer;
