import {
  Action,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  createAction
} from "@reduxjs/toolkit";
import { Products } from "../../types/products";
import { RootState } from "../../app/store";
import { fetchProducts } from "./productsAPI";
import { productInitialState } from "./productInitialState";
export interface ProductState {
  products: Products[];
  favorites: Products[];
  product_search_query_list: Products[];
  status: "idle" | "loading" | "failed";
  errorMessage: string | null;
}

const initialState: ProductState = {
  products: productInitialState,
  favorites: [],
  product_search_query_list: [],
  status: "idle",
  errorMessage: null
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (state: Products[]): Promise<Products[]> => {
    const { data } = await fetchProducts(state);
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push({ ...action.payload, is_favorite: true });
      let productState = state.products.map(item =>
        item.id === action.payload.id ? { ...item, is_favorite: true } : item
      );
      state.products = productState;
    },
    removeFromFavorites: (state, action: PayloadAction<Products>) => {
      let favoriteState = state.favorites.filter(
        item => item.id !== action.payload.id
      );
      let productState = state.products.map(item =>
        item.id === action.payload.id ? { ...item, is_favorite: false } : item
      );
      state.favorites = favoriteState;
      state.products = productState;
    },
    searchProductCatalog: (state, action: PayloadAction<string>) => {
      let matchingQueryState = state.products.filter(
        item => item.title !== action.payload
      );

      state.favorites = matchingQueryState;
    }
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.status = "loading";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = "Failed";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "idle";
      state.products = action.payload;
    });
  }
});

export const {
  addToFavorites,
  removeFromFavorites,
  searchProductCatalog
} = productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
