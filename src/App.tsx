import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import React from "react";

export const Context = React.createContext();

function App() {
  const [navbarHover, setNavbarHover] = useState("");
  return (
    <>
      <Context.Provider value={[navbarHover, setNavbarHover]}>
        <div className="home-wrapper">
          <Home />
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
