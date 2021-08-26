import { useRef, useEffect } from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import { useSearchContext } from "../context/SearchContent";
const Navigation = () => {
  const { search, setSearch } = useSearchContext();

  useEffect(() => {
    console.log("search", search, search.length);
  }, [search]);
  return (
    <div>
      <div className="navigation">
        <Link to="/">HOME</Link>
        <Link to="/favorites">MY FAVORITES</Link>
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <Link to="/cart">CHECKOUT</Link>
      </div>
    </div>
  );
};

export default Navigation;
