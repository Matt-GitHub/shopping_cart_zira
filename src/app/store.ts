import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/products/productsSlice";
import createReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    cart: createReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
