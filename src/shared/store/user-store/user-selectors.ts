import { createSelector } from "@reduxjs/toolkit";

// Selector to get the auth state
export const selectUserDetailsState = (state) => state.userDetails;

// Selector to check if the user is logged in
export const selectIsUserLoggedIn = createSelector(
  selectUserDetailsState,
  (authState) => authState.isLoggedIn
);
