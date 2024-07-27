// Selector to get the auth state
export const selectCallsState = (state) => state.calls;
export const selectCallsValuesArrayState = (state) =>
  Object.values(state.calls);
