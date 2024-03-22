import { Link } from "react-router-dom";
import "./signin.css";
import { ChangeEvent, useContext, useState } from "react";
import { SignInContext } from "../contexts/signincontext";
import { SignInEmail } from "../components/SignInForm/signinemail";
import { SignInPassword } from "../components/SignInForm/signingpasword";
export function SignIn() {
  const { signInData, setSignInData, user, setUser } =
    useContext(SignInContext);

  const [emailEntered, setEmailEntered] = useState(false);

  const handleSignIn = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignInData({ ...signInData, [name]: value });
  };

  const handleEmailContinue = (e) => {
    e.preventDefault();
    setEmailEntered(true);
  };
  console.log(signInData);
  return (
    <div className="signin-wrapper">
      <div className="signin-box">
        <div className="coinbase-logo-wrap">
          <img
            src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
            className="coinbase-logo-signinpage"
          />
        </div>
        <div className="signin-header-wrapper">
          <div className="signin-toptext">Sign in to Coinbase</div>
          <div className="signin-bottomtext">
            Not your device? Use a private or incognito window to sign in.
          </div>
        </div>
        {emailEntered ? (
          <SignInPassword
            signInData={signInData}
            handleSignIn={handleSignIn}
            user={user}
            setUser={setUser}
          />
        ) : (
          <SignInEmail
            signInData={signInData}
            handleSignIn={handleSignIn}
            handleEmailContinue={handleEmailContinue}
          />
        )}
      </div>
    </div>
  );
}
