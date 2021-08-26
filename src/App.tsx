import "./App.css";
import Navigation from "./components/Navigation";
import RouterRoutes from "./routes/RouterRoutes";
import { SearchContent } from "./context/SearchContent";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="App">
      <SearchContent.Provider value={{ search, setSearch }}>
        <Navigation />
        <RouterRoutes />
      </SearchContent.Provider>
    </div>
  );
}

export default App;
