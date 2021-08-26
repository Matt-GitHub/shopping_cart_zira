import React, { useEffect } from "react";
import { Products } from "../../types/products";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";
interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [
    status,
    products,
    favorites,
    { getProducts, addFavorite, removeFavorite },
    dispatch
  ] = useProducts();
  const [
    cartStatus,
    cart,
    cartError,
    cartCheckout,
    { addProductToCart },
    cartDispatch
  ] = useCart();
  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <img style={{ width: "100px" }} src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      {product.is_favorite == true ? (
        <button onClick={() => removeFavorite(product)}>UnFavorite</button>
      ) : (
        <button onClick={() => addFavorite(product)}>Favorite</button>
      )}
      <button onClick={() => addProductToCart({ ...product, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
