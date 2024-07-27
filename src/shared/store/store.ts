import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./user-store/user-slice";
import callReducer from "../../features/customer-service/customer-service-store/customer-service.slice";
// ...

export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    calls: callReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const dispatch = store.dispatch;
console.log("🚀 ~ store:", store.getState());
