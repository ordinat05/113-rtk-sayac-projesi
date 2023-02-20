import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  // initialState = initialState,
  // Javascriptte ikisinin adlandırılması aynı ise tek bir isim yazmanız yeterli.
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      // Yukarıdakinin aynısı alttaki
      //   state.value = +1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    incrementByInput: (state, action) => {
      state.value = state.value + action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementByInput,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;
