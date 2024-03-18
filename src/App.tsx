import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import React from "react";

type ContextValueType = [string, React.Dispatch<React.SetStateAction<string>>];

export const Context = React.createContext<ContextValueType>(["", () => {}]);

function App() {
  const [navbarHover, setNavbarHover] = useState("");
  // const [email, setEmail] = useState('');

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
