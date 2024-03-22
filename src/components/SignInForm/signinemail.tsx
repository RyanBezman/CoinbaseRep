import { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
type SignInEmailProps = {
  signInData: { email: string; password: string };
  handleSignIn: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailContinue: (e: FormEvent<HTMLFormElement>) => void;
};

export function SignInEmail({
  signInData,
  handleSignIn,
  handleEmailContinue,
}: SignInEmailProps) {
  return (
    <>
      <form action="" onSubmit={handleEmailContinue}>
        <div className="signin-inputtop">Email</div>
        <input
          type="email"
          name="email"
          value={signInData.email || ""}
          placeholder="Your email address"
          className="signin-email-input"
          onChange={handleSignIn}
          required
        />
        <div className="continuebuttonwrapper">
          <button className="continue-button" type="submit">
            Continue
          </button>
        </div>
        <div className="or">OR</div>
        <div className="alternate-signins-wrapper">
          <div className="google-signin">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="google-logo"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
            <div className="google-text">Sign In with Google</div>
          </div>
          <div className="apple-signin">
            <div className="apple-text">Sign in with Apple</div>
            <svg
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.934 5.60494C9.85362 5.60494 11.0064 4.96413 11.6928 4.10971C12.3146 3.33539 12.7679 2.25402 12.7679 1.17265C12.7679 1.02579 12.7549 0.878942 12.729 0.758789C11.7058 0.79884 10.4753 1.46635 9.73705 2.36082C9.15419 3.04169 8.62315 4.10971 8.62315 5.20443C8.62315 5.36464 8.64905 5.52484 8.66201 5.57824C8.72677 5.59159 8.83039 5.60494 8.934 5.60494ZM5.69593 21.7588C6.9523 21.7588 7.50925 20.891 9.07648 20.891C10.6696 20.891 11.0193 21.7321 12.4182 21.7321C13.7911 21.7321 14.7107 20.4238 15.5785 19.1421C16.55 17.6736 16.9515 16.2318 16.9774 16.165C16.8867 16.1383 14.2574 15.0302 14.2574 11.9196C14.2574 9.22287 16.3298 8.00799 16.4463 7.91454C15.0734 5.8853 12.9881 5.8319 12.4182 5.8319C10.8769 5.8319 9.62048 6.79312 8.83039 6.79312C7.97553 6.79312 6.84868 5.8853 5.5146 5.8853C2.97595 5.8853 0.398438 8.04804 0.398438 12.1332C0.398438 14.6698 1.35691 17.3532 2.53557 19.0887C3.54585 20.5573 4.4266 21.7588 5.69593 21.7588Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <div className="apple-signin">
            <div className="apple-text">Sign in with Passkey</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              fill="none"
              viewBox="0 0 16 17"
            >
              <path
                fill="black"
                d="M5.373.219C4.025.506 2.899 1.637 2.556 3.04c-.119.487-.119 1.298 0 1.784.347 1.423 1.465 2.53 2.848 2.822.225.048.447.06.897.048.506-.02.64-.036.928-.133.798-.264 1.391-.686 1.857-1.326.297-.402.478-.77.62-1.237.1-.328.107-.41.107-1.066 0-.657-.008-.738-.106-1.066C9.33 1.617 8.458.713 7.229.304 6.93.202 6.826.19 6.261.178c-.422-.008-.715.004-.888.04zM12.563 4.84a2.81 2.81 0 00-1.481.856c-.783.823-1.02 2.075-.593 3.15.217.551.707 1.127 1.197 1.41l.241.142.004 2.27v2.271l.605.616.604.62 1.023-1.054 1.027-1.054-.612-.628-.612-.628.604-.62c.328-.341.6-.637.6-.657 0-.02-.216-.264-.481-.536-.265-.271-.474-.502-.466-.51.011-.008.162-.094.335-.195a2.972 2.972 0 001.363-1.804c.095-.381.107-1.09.02-1.456A2.952 2.952 0 0013.9 4.881c-.305-.085-1.024-.106-1.336-.04zm1.04 1.346c.193.138.383.483.383.702 0 .206-.166.543-.328.668-.182.142-.51.211-.72.155a.89.89 0 01-.612-.811c-.004-.673.743-1.09 1.276-.714zM4.168 9.065C2.343 9.352.81 10.69.233 12.499c-.197.624-.233.94-.233 2.14v1.09h10.667v-4.621l-.316-.308a4.4 4.4 0 01-.838-1.111l-.134-.264-.435-.15C8.237 9.032 7.901 9 6.1 9.004c-1.126.004-1.68.02-1.932.06z"
              ></path>
            </svg>
          </div>
          <div className="footernotes-wrapper">
            <p className="signin-footernotes">
              Don't have an account?{" "}
              <Link to="/pickyouraccount" style={{ textDecoration: "none" }}>
                <span className="blue">Sign up</span>
              </Link>
            </p>
            <p className="signin-footernotes blue">
              Sign in to a business account
            </p>
            <p className="signin-footernotes blue">Privacy policy</p>
          </div>
        </div>
      </form>
    </>
  );
}
