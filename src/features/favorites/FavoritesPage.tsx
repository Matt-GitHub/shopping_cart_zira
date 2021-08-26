import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { Products } from "../../types/products";
import ProductCard from "../../features/products/ProductCard";
import { useSearchContext } from "../../context/SearchContent";
const FavoritesPage = () => {
  const [
    status,
    products,
    favorites,
    { getProducts, addFavorite }
  ] = useProducts();
  const { search } = useSearchContext();
  return (
    <div>
      {search.length > 0
        ? favorites.map((data: Products) => {
            if (data.title.toLowerCase().includes(search.toLowerCase())) {
              return <ProductCard key={data.id} product={data} />;
            }
          })
        : favorites.map((data: Products) => {
            return <ProductCard key={data.id} product={data} />;
          })}
    </div>
  );
};

export default FavoritesPage;
