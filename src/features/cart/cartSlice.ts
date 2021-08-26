import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartProducts } from "../../types/cartProducts";
import { RootState } from "../../app/store";

interface Checkout {
  accountId?: number;
  items?: { id: number; is_favorite: boolean }[];
  totalPrice?: number;
}

export interface cartState {
  cart: cartProducts[];
  cartCheckout: Checkout;
  cartStatus: "idle" | "loading" | "failed";
  cartError: string | null;
}

const initialState: cartState = {
  cart: [],
  cartCheckout: {},
  cartStatus: "idle",
  cartError: null
};

export const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartProducts>) => {
      let isInCart = false;
      state.cart.filter(item =>
        item.id === action.payload.id ? (isInCart = true) : null
      );
      if (!isInCart) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<cartProducts>) => {
      let cartState = state.cart.filter(item => item.id !== action.payload.id);
      state.cart = cartState;
    },
    addItemQuantity: (state, action: PayloadAction<cartProducts>) => {
      let cartState = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...action.payload, quantity: action.payload.quantity + 1 }
          : item
      );
      state.cart = cartState;
    },
    reduceItemQuantity: (state, action: PayloadAction<cartProducts>) => {
      let cartState = state.cart.map(item =>
        item.id === action.payload.id && action.payload.quantity > 1
          ? { ...action.payload, quantity: action.payload.quantity - 1 }
          : item
      );
      state.cart = cartState;
    },
    checkout: (state, action: PayloadAction<cartProducts[]>) => {
      let accountId = 1;
      let totalPrice = 0;
      let itemOverview: { id: number; is_favorite: boolean }[] = [];
      console.log("action payload", action.payload);
      action.payload.forEach(data => {
        totalPrice += data.quantity * data.price;
        itemOverview.push({ id: data.id, is_favorite: data.is_favorite });
      });
      let checkoutState = {
        accountId: accountId,
        items: itemOverview,
        totalPrice: Number(totalPrice.toFixed(2))
      };

      state.cartCheckout = checkoutState;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  reduceItemQuantity,
  checkout
} = cartState.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartState.reducer;
