import React, { useEffect } from "react";
import { cartProducts } from "../../types/cartProducts";
import { useCart } from "../../hooks/useCart";
interface CartListProps {
  cartData: cartProducts;
}

const CartList = ({ cartData }: CartListProps) => {
  const [
    cartStatus,
    cart,
    cartError,
    cartCheckout,
    { removeProductFromCart, addCartQuantity, subtractCartQuantity },
    cartDispatch
  ] = useCart();

  useEffect(() => {}, [cartDispatch]);
  return (
    <div>
      <div className="cartLeft">
        <img
          style={{ width: "100px" }}
          src={cartData.image}
          alt={cartData.title}
        />
        <p>{cartData.title}</p>
      </div>
      <div className="cartRight">
        <button onClick={() => subtractCartQuantity(cartData)}>-</button>
        <span>{cartData.quantity}</span>
        <button onClick={() => addCartQuantity(cartData)}>+</button>
      </div>
      <div className="cartBottom">
        <button onClick={() => removeProductFromCart(cartData)}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartList;
