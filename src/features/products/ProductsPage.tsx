import React, { useEffect } from "react";
import { Products } from "../../types/products";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ProductCard from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { useSearchContext } from "../../context/SearchContent";
const ProductsPage = () => {
  const [
    status,
    products,
    favorites,
    { getProducts },
    dispatch
  ] = useProducts();
  const { search } = useSearchContext();
  useEffect(() => {
    getProducts();
  }, [dispatch]);
  return (
    <div>
      {status === "loading" ? (
        <Loading />
      ) : status === "failed" ? (
        <Error />
      ) : search.length > 0 ? (
        products.map((data: Products) => {
          if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return <ProductCard key={data.id} product={data} />;
          }
        })
      ) : (
        products.map((data: Products) => {
          return <ProductCard key={data.id} product={data} />;
        })
      )}
    </div>
  );
};

export default ProductsPage;
