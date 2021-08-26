import ProductsPage from "../features/products/ProductsPage";
import FavoritesPage from "../features/favorites/FavoritesPage";
import { Route } from "../types/routes";
import CartPage from "../features/cart/CartPage";

const routes: Route[] = [
  {
    path: "/",
    name: "HOME",
    component: ProductsPage,
    exact: true
  },
  {
    path: "/favorites",
    name: "MY FAVORITE",
    component: FavoritesPage,
    exact: true
  },
  {
    path: "/cart",
    name: "CART",
    component: CartPage,
    exact: true
  }
];

export default routes;
