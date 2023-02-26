import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import randomNumberReducer from "../features/random/randomNumberSlice";
import uuidReducer from "../features/uuid/uuidSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    randomNumber: randomNumberReducer,
    uuid: uuidReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
