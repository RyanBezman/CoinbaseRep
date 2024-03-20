import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PickYourAccount } from "./pages/pickyouraccount";
import { SignIn } from "./pages/signin";
import { SignUpPage } from "./pages/signuppage";

type ContextValueType = [string, React.Dispatch<React.SetStateAction<string>>];

export const Context = React.createContext<ContextValueType>(["", () => {}]);

function App() {
  const [navbarHover, setNavbarHover] = useState("");

  return (
    <>
      <Context.Provider value={[navbarHover, setNavbarHover]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pickyouraccount" element={<PickYourAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
