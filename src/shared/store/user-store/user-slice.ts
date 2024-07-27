import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "../../interfaces/shared.interface";

const initialState: UserDetails = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    saveUserDetails: (state, action: PayloadAction<UserDetails>) => {
      return { ...action.payload, isLoggedIn: true };
    },
    clearUserDetails: () => initialState,
  },
});

export const { saveUserDetails, clearUserDetails } = loginSlice.actions;

export default loginSlice.reducer;
