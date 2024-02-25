import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    changeUniversal: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {changeUniversal, change} = counterSlice.actions;

export default counterSlice.reducer;
