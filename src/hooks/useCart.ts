import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  addToCart,
  removeFromCart,
  addItemQuantity,
  reduceItemQuantity,
  checkout,
  selectCart
} from "../features/cart/cartSlice";
import { cartProducts } from "../types/cartProducts";
export const useCart = () => {
  const { cartStatus, cart, cartCheckout, cartError } = useAppSelector(
    selectCart
  );
  const cartDispatch = useAppDispatch();

  const cartHandlers = React.useMemo(
    () => ({
      addProductToCart: (payload: cartProducts) =>
        cartDispatch(addToCart(payload)),
      removeProductFromCart: (payload: cartProducts) => {
        cartDispatch(removeFromCart(payload));
      },
      addCartQuantity: (payload: cartProducts) =>
        cartDispatch(addItemQuantity(payload)),
      subtractCartQuantity: (payload: cartProducts) =>
        cartDispatch(reduceItemQuantity(payload)),
      continueToCheckout: (payload: cartProducts[]) =>
        cartDispatch(checkout(payload))
    }),
    [cartDispatch]
  );

  return [
    cartStatus,
    cart,
    cartError,
    cartCheckout,
    cartHandlers,
    cartDispatch
  ] as const;
};
