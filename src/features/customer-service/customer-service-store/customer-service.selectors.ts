import { createSelector } from "@reduxjs/toolkit";

// Selector to get the auth state
export const selectCallsState = (state) => state.calls;
export const selectCallsValuesArrayState = (state) =>
  Object.values(state.calls);

// // Selector to check if the user is logged in
// export const selectIsUserLoggedIn = createSelector(
//   selectCallsState,
//   (callsState) => callsState.isLoggedIn
// );
