import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      // Use filter to create a new array without the item to be removed
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;

export default cardSlice.reducer;
// createSLice methods create action and reducer both for us, we dont need to create action and reducer seprately like we did in normal redux
