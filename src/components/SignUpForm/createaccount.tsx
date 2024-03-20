import { ChangeEvent, useContext } from "react";
import { SignupContext } from "../../contexts/signupcontext";

export function CreateAccount() {
  const { signupData, setSignUpData } = useContext(SignupContext);
  console.log(signupData);

  const handleSignUpForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };
  return (
    <form>
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
            type="text"
            placeholder="Email"
            className="legalemail-input"
            name="email"
            value={signupData.email}
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
      <button className="freeaccount-button">Create free account</button>
    </form>
  );
}
