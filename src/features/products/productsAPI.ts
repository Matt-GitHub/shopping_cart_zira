import { Products } from "../../types/products";

export async function fetchProducts(seed: Products[]) {
  return new Promise<{ data: Products[] }>(resolve => resolve({ data: seed }));
}
