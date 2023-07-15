import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { GOODS_URL } from "../const";

export const fetchGender = createAsyncThunk(
  "goods/fetchGender",
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append("gender", gender);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
export const fetchRandomGoods = createAsyncThunk(
  "goods/fetchRandomGoods",
  async (param) => {
    const response = await fetch(
      `${GOODS_URL}?count=${param.count}&gender=${param.gender}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchCategory = createAsyncThunk(
  "goods/fetchCategory",
  async (param) => {
    const url = new URL(GOODS_URL);
    for (const key in param) {
      url.searchParams.append(key, param[key]);
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    status: "",
    goodsList: [],
    goodsRandomList: [],
    error: null,
    page: 0,
    pages: 0,
    totalCount: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGoods.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomGoods.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsRandomList = action.payload;
      })
      .addCase(fetchRandomGoods.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchGender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload;
        state.pages = 0;
        state.totalCount = null;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.goodsList = action.payload.goods;
        //state.page = action.payload.page;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setPage } = goodsSlice.actions;

export default goodsSlice.reducer;
