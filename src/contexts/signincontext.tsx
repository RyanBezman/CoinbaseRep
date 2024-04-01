import React, { ReactNode, createContext, useState } from "react";

type SignInForm = {
  email: string;
  password: string;
};
export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SignInContextType = {
  signInData: SignInForm;
  setSignInData: (p: SignInForm) => void;
  user: User | null;
  setUser: (p: User | null) => void;
};
export const SignInContext = createContext<SignInContextType | null>(null);
const initialSignInData = {
  email: "",
  password: "",
};
type SignInContextProviderProps = {
  children: ReactNode;
};
export default function SignInContextProvider({
  children,
}: SignInContextProviderProps) {
  const [signInData, setSignInData] = useState(initialSignInData);
  const [user, setUser] = useState<User | null>(null);

  return (
    <SignInContext.Provider
      value={{
        signInData,
        setSignInData,
        user,
        setUser,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}
