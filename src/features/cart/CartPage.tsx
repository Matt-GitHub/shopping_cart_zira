import React, { useEffect } from "react";
import { cartProducts } from "../../types/cartProducts";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useCart } from "../../hooks/useCart";
import CartList from "./CartList";
import EmptyCart from "../../components/EmptyCart";

const CartPage = () => {
  const [
    cartStatus,
    cart,
    cartError,
    cartCheckout,
    { continueToCheckout },
    cartDispatch
  ] = useCart();

  useEffect(() => {}, [cartDispatch]);
  return (
    <div>
      {cartStatus === "loading" ? (
        <Loading />
      ) : cartStatus === "failed" ? (
        <Error />
      ) : cart.length < 1 ? (
        <EmptyCart />
      ) : (
        cart.map((data: cartProducts) => {
          return <CartList key={data.id} cartData={data} />;
        })
      )}
      <button onClick={() => continueToCheckout(cart)}>Checkout</button>
      <br />
      <br />
      {cartCheckout?.items !== undefined && cartCheckout?.items?.length > 0
        ? JSON.stringify(cartCheckout)
        : null}
    </div>
  );
};

export default CartPage;
