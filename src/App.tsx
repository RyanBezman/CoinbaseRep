import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PickYourAccount } from "./pages/pickyouraccount";
import { SignIn } from "./pages/signin";
import { SignUpPage } from "./pages/signuppage";
import SignupContextProvider from "./contexts/signupcontext";
import SignInContextProvider from "./contexts/signincontext";
import Axios from "axios";

type ContextValueType = [string, React.Dispatch<React.SetStateAction<string>>];

export const Context = React.createContext<ContextValueType>(["", () => {}]);

function App() {
  const [navbarHover, setNavbarHover] = useState("");

  const addUser = () => {
    Axios.post("localhost:3001/signup", {});
  };

  return (
    <>
      <Context.Provider value={[navbarHover, setNavbarHover]}>
        <SignupContextProvider>
          <SignInContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pickyouraccount" element={<PickYourAccount />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Routes>
            </Router>
          </SignInContextProvider>
        </SignupContextProvider>
      </Context.Provider>
    </>
  );
}

export default App;
