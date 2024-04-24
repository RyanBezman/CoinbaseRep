import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignInContext, SignInContextType } from "../../contexts/signincontext";
type SignupForm = {
  first: string;
  last: string;
  email: string;
  password: string;
};
const initialSignupData: SignupForm = {
  first: "",
  last: "",
  email: "",
  password: "",
};

export function CreateAccount({ email }: { email: string }) {
  const [signupData, setSignUpData] = useState({
    ...initialSignupData,
    email: email,
  });

  const [showPassword, setShowPassword] = useState(false);
  const { setUser }: SignInContextType = useContext(
    SignInContext
  ) as SignInContextType;

  const handleSignUpForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };

  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const closedEye = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="toggle-hidden-button"
    >
      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
      <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
      <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
    </svg>
  );
  const openEye = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="toggle-hidden-button"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const handleAccountCreated = () => {
    Axios.get("http://localhost:3001/signin", {
      params: {
        email: signupData.email,
        password: signupData.password,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("name", res.data.user.firstName);
        setUser(res.data.user);
        navigate("/user");
      })
      .catch((error) => {
        // console.log(error.response.data.error);
        if (error) {
          console.log(error);
        }
      });
  };

  const addUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/signup", {
      firstName: signupData.first,
      lastName: signupData.last,
      email: signupData.email,
      password: signupData.password,
    })
      .then(() => {
        console.log("Signed up a new user");
        setSignUpData(initialSignupData);
      })
      .then(() => {
        handleAccountCreated();
      });
  };
  return (
    <form onSubmit={addUser}>
      <div className="firstandlastwrapper">
        <div className="legalfirst-wrapper">
          <div className="legal-first-name">Legal first name*</div>
          <input
            type="text"
            placeholder="Legal first name"
            className="legalname-input"
            name="first"
            value={signupData.first}
            onChange={handleSignUpForm}
            required
          />
        </div>
        <div className="legalfirst-wrapper">
          <div className="legal-first-name">Legal last name*</div>

          <input
            type="text"
            placeholder="Legal last name"
            className="legalname-input"
            name="last"
            value={signupData.last}
            onChange={handleSignUpForm}
            required
          />
        </div>
      </div>
      <div className="legalemailandpasswordwrapper">
        <div className="legailemail-wrapper">
          <div className="legalemail-text">Email*</div>
          <input
            type="email"
            placeholder="Email"
            className="legalemail-input"
            name="email"
            value={signupData.email || email}
            onChange={handleSignUpForm}
            required
          />
        </div>
        <div className="legailemail-wrapper">
          <div className="legalemail-text">Password*</div>
          <div className="login-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              className="legalemail-input"
              name="password"
              minLength={8}
              value={signupData.password}
              onChange={handleSignUpForm}
              required
            />
            <div className="eye-icon" onClick={handleTogglePassword}>
              {showPassword ? closedEye : openEye}
            </div>
          </div>
        </div>
      </div>
      <div className="useragreement-wrapper">
        <div className="checkbox-wrapper">
          <input type="checkbox" className="agreement-checkbox" required />
        </div>
        <div className="agreement-body">
          I certify that I am 18 years of age or older, I agree to the
          <span className="blue"> User Agreement</span>, and I have read the
          <span className="blue"> Privacy Policy</span> and
          <span className="blue"> Financial Privacy Notice</span>.
        </div>
      </div>
      <button className="freeaccount-button" type="submit">
        Create free account
      </button>
    </form>
  );
}
