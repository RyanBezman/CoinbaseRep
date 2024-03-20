import React, { createContext, useState } from "react";

type SignInForm = {
  email: string;
  password: string;
};

type SignInContextType = {
  signInData: SignInForm;
  setSignInData: (p: SignInForm) => void;
};
export const SignInContext = createContext<SignInContextType | null>(null);
const initialSignInData = {
  email: "",
  password: "",
};
export default function SignInContextProvider({ children }) {
  const [signInData, setSignInData] = useState(initialSignInData);

  return (
    <SignInContext.Provider value={{ signInData, setSignInData }}>
      {children}
    </SignInContext.Provider>
  );
}
