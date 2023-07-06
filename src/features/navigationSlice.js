import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CATEGORY_URL, COLORS_URL } from "../const";

export const fetchNavigation = createAsyncThunk(
  "navigation/fetchNavigation",
  async () => {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    return data;
  }
);

export const fetchColors = createAsyncThunk("colors/fetchColors", async () => {
  const response = await fetch(COLORS_URL);
  const data = await response.json();
  return data;
});
const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    activeGender: "women",
    status: "loading",
    categories: {},
    genderList: [],
    categoryList: [],
    error: null,
    colorsList: [],
  },

  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNavigation.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
        state.genderList = Object.keys(action.payload);
        state.categoryList = Object.entries(action.payload);
      })
      .addCase(fetchNavigation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = "success";
        state.colorsList = action.payload;
      });
  },
});
export const { setActiveGender } = navigationSlice.actions;
export default navigationSlice.reducer;
