import { ChangeEvent, FormEvent, useState } from "react";
import "./signinpassword.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type SignInPasswordProps = {
  signInData: { email: string; password: string };
  handleSignIn: (e: ChangeEvent<HTMLInputElement>) => void;
  user: User | null;
  setUser: (p: User) => void;
};

export function SignInPassword({
  signInData,
  handleSignIn,
  setUser,
}: SignInPasswordProps) {
  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!signInData.password) {
      setError("Please enter your password.");
      return;
    }
    Axios.get("http://localhost:3001/signin", {
      params: {
        email: signInData.email,
        password: signInData.password,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("name", res.data.user.firstName);
        setError(null);
        setUser(res.data.user);
        navigate("/user");
      })
      .catch((error) => {
        // console.log(error.response.data.error);
        if (error) {
          setError(error.response.data.error);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <div className="email-display-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="-5.0 -10.0 110.0 135.0"
            className="profile-icon"
          >
            <path d="m50 16.137c4.4648 0 8.5117 1.8125 11.434 4.7344 2.9258 2.9258 4.7344 6.9688 4.7344 11.434 0 4.4531-1.8125 8.4922-4.7422 11.43-2.9453 2.9375-6.9805 4.7422-11.43 4.7422-4.4492 0-8.4922-1.8125-11.43-4.7422-2.9375-2.9453-4.7422-6.9805-4.7422-11.43 0-4.4648 1.8125-8.5117 4.7344-11.434 2.9258-2.9258 6.9688-4.7344 11.434-4.7344zm0-13.633c13.113 0 24.992 5.3164 33.586 13.914 8.5938 8.5938 13.914 20.473 13.914 33.586 0 13.113-5.3164 24.992-13.914 33.586-8.5938 8.5938-20.473 13.914-33.586 13.914s-24.992-5.3164-33.586-13.914c-8.5938-8.5938-13.914-20.473-13.914-33.586 0-13.113 5.3164-24.992 13.914-33.586 8.5938-8.5938 20.473-13.914 33.586-13.914zm29.344 18.156c-7.5078-7.5078-17.887-12.156-29.344-12.156-11.461 0-21.836 4.6445-29.344 12.156-7.5078 7.5078-12.156 17.887-12.156 29.344 0 11.461 4.6445 21.836 12.156 29.344 7.5078 7.5078 17.887 12.156 29.344 12.156 11.461 0 21.836-4.6445 29.344-12.156 7.5078-7.5078 12.156-17.887 12.156-29.344 0-11.461-4.6445-21.836-12.156-29.344zm-1.9414 55.008h-54.805c-0.33594 0-0.67578-0.058594-1.0078-0.17578-1.5586-0.55469-2.3711-2.2734-1.8164-3.832 2.2812-6.3828 6.4492-11.707 11.742-15.441 5.293-3.7305 11.707-5.8633 18.484-5.8633 6.7734 0 13.191 2.1328 18.484 5.8633 5.2617 3.707 9.4102 8.9922 11.699 15.32 0.14062 0.34766 0.21875 0.72656 0.21875 1.125 0 1.6562-1.3438 3-3 3z" />
          </svg>
          <div className="email-text-display">{signInData.email}</div>
        </div>
        <div className="signin-inputtop">Password</div>
        <input
          type="password"
          name="password"
          value={signInData.password || ""}
          className="signin-email-input"
          onChange={handleSignIn}
          autoFocus
        />
        <div className="error-on-signin">{error}</div>
        <div className="forgot-password blue">Forgot password?</div>
        <div className="continuebuttonwrapper">
          <button className="continue-button" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
