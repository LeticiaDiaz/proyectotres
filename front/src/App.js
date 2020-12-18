import "./App.css";
import Search from "./Search";
import Delete from "./Delete"
import Inicio from "./Inicio";

import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/nombre")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/inicio">
          <Inicio />
        </Route>
        <Route exact path="/delete">
          <Delete />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
