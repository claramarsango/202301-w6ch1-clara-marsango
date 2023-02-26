import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import getUuid from "./uuidAPI";

export interface RandomNumberState {
  value: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: RandomNumberState = {
  value: [],
  status: "idle",
};

export const getOneUuidAsync = createAsyncThunk("uuid/getUuid", async () => {
  const response = await getUuid();

  return response;
});

export const getCounterAmountUuid = createAsyncThunk(
  "uuid/getUuid",
  async (amount?: number) => {
    const response = await getUuid(amount);

    return response;
  }
);

const uuidSlice = createSlice({
  name: "uuid",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getOneUuidAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getOneUuidAsync.fulfilled,
        (state, action: PayloadAction<number[]>) => {
          state.status = "idle";
          state.value = action.payload;
        }
      )
      .addCase(getOneUuidAsync.rejected, (state) => {
        state.status = "failed";
      });
    /* .addCase(getCounterAmountUuid.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      }); */
  },
});

export const selectUuid = (state: RootState) => state.uuid.value;

export default uuidSlice.reducer;
