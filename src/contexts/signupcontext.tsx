import React, { ReactNode, createContext, useState } from "react";

type SignupForm = {
  first: string;
  last: string;
  email: string;
  password: string;
};

export type SignUpContextType = {
  signupData: SignupForm;
  setSignUpData: (p: SignupForm) => void;
  initialSignupData: SignupForm;
};
export const SignupContext = createContext<SignUpContextType | null>(null);
const initialSignupData: SignupForm = {
  first: "",
  last: "",
  email: "",
  password: "",
};

type SignupContextProviderProps = {
  children: ReactNode;
};
export default function SignupContextProvider({
  children,
}: SignupContextProviderProps) {
  const [signupData, setSignUpData] = useState(initialSignupData);

  return (
    <SignupContext.Provider
      value={{ signupData, setSignUpData, initialSignupData }}
    >
      {children}
    </SignupContext.Provider>
  );
}
