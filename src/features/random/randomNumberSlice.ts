import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import getRandomNumber from "./randomNumberAPI";

export interface NumberState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: NumberState = {
  value: 0,
  status: "idle",
};

export const showNumberAsync = createAsyncThunk(
  "randomNumber/getRandomNumber",
  async () => {
    const response = await getRandomNumber();
    console.log(response);

    return response;
  }
);

const randomNumberSlice = createSlice({
  name: "randomNumber",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showNumberAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(showNumberAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(showNumberAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectNumber = (state: RootState) => state.randomNumber.value;

export default randomNumberSlice.reducer;
