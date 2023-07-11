import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await fetch(`${GOODS_URL}/${id}`);
    return await response.json();
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    status: "loading",
    error: null,
    product: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = "success";
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
