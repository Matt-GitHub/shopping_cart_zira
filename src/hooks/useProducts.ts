import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  addToFavorites,
  removeFromFavorites,
  searchProductCatalog
} from "../features/products/productsSlice";
import { Products } from "../types/products";
import {
  getProducts,
  selectProducts
} from "../features/products/productsSlice";
export const useProducts = () => {
  const { status, products, favorites } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const productHandlers = React.useMemo(
    () => ({
      getProducts: () => dispatch(getProducts(products)),
      addFavorite: (payload: Products) => dispatch(addToFavorites(payload)),
      removeFavorite: (payload: Products) => {
        dispatch(removeFromFavorites(payload));
      },
      searchCatalog: (payload: string) => {
        dispatch(searchProductCatalog(payload));
      }
    }),
    [dispatch, products]
  );

  return [status, products, favorites, productHandlers, dispatch] as const;
};
