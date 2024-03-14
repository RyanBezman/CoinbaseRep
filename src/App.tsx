import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";

function App() {
  const [dropdownSection, setDropddownSection] = useState("");

  return (
    <>
      <div className="home-wrapper">
        <Home />
      </div>
    </>
  );
}

export default App;
