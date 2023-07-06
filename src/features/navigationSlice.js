import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activeGender: "woman",
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    },
  },
});
export const { setActiveGender } = navigationSlice.actions;
export default navigationSlice.reducer;
