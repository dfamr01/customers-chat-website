import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Call,
  Message,
} from "../customer-service-types/customer-service.types";

type CallState = Record<string, Call>;

const initialState: CallState = {};

const callSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<Record<string, Call>>) => {
      return action.payload;
    },
    addCall: (state, action: PayloadAction<Call>) => {
      console.log("🚀 ~ action:", action.payload);

      if (!state[action.payload.email]) {
        state[action.payload.email] = { ...action.payload };
      } else {
        state[action.payload.email].messages.concat(action.payload.messages);
      }
    },
    removeCall: (state, action: PayloadAction<string>) => {
      if (state[action.payload]) {
        const { [action.payload]: _, ...rest } = state;
        state = rest;
      }
      // state = state.filter((call) => call.id !== action.payload);
    },
    addMessage: (
      state,
      action: PayloadAction<{ callId: string; message: Message }>
    ) => {
      if (state[action.payload.callId]) {
        state[action.payload.callId].messages.push(action.payload.message);
      }
    },
  },
});

export const { addCall, setCalls, removeCall, addMessage } = callSlice.actions;
export default callSlice.reducer;
