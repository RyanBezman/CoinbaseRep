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

  const { setUser }: SignInContextType = useContext(
    SignInContext
  ) as SignInContextType;

  const handleSignUpForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };

  const navigate = useNavigate();

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
          <input
            type="text"
            placeholder="Minimum 8 characters"
            className="legalemail-input"
            name="password"
            minLength={8}
            value={signupData.password}
            onChange={handleSignUpForm}
            required
          />
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
