import { createContext, useContext } from "react";
export interface searchContent {
  search: string;
  setSearch: (c: string) => void;
}
export const SearchContent = createContext<searchContent>({
  search: "",
  setSearch: () => {}
});
export const useSearchContext = () => useContext(SearchContent);
