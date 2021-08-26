import React, { useEffect } from "react";
import { cartProducts } from "../../types/cartProducts";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useCart } from "../../hooks/useCart";
import CartList from "./CartList";

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
      ) : (
        cart.map((data: cartProducts) => {
          console.log("no match");
          return <CartList key={data.id} cartData={data} />;
          // console.log("data from cart", data);
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
