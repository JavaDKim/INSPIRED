import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { GOODS_URL } from "../const";

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (gender) => {
    const response = await fetch(`${GOODS_URL}?gender=${gender}`);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    status: "",
    goodsList: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
