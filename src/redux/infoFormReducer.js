import { createSlice } from "@reduxjs/toolkit";

const infoFormSlice = createSlice({
  name: "infoForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    github: "",
    personalSite: "",
    summary: "",
  },
  reducers: {
    inputInfo(state, action) {
      const {
        firstName,
        lastName,
        email,
        phone,
        github,
        personalSite,
        summary,
      } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        email,
        phone,
        github,
        personalSite,
        summary,
      };
    },
  },
});

export const { inputInfo } = infoFormSlice.actions;

export default infoFormSlice.reducer;
