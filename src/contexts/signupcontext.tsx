import React, { createContext, useState } from "react";

type SignupForm = {
  first: string;
  last: string;
  email: string;
  password: string;
};

type SignUpContextType = {
  signupData: SignupForm;
  setSignUpData: (p: SignupForm) => void;
};
export const SignupContext = createContext<SignUpContextType | null>(null);
const initialSignupData = {
  first: "",
  last: "",
  email: "",
  password: "",
};
export default function SignupContextProvider({ children }) {
  const [signupData, setSignUpData] = useState(initialSignupData);

  return (
    <SignupContext.Provider value={{ signupData, setSignUpData }}>
      {children}
    </SignupContext.Provider>
  );
}
