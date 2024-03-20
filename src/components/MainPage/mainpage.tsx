import "./mainpage.css";
import "../../fonts/transfonter.org-20240315-030107/stylesheet.css";
import { ChangeEvent, useContext } from "react";
import { SignupContext } from "../../contexts/signupcontext";
import { Link } from "react-router-dom";

export function MainPage() {
  const { signupData, setSignUpData } = useContext(SignupContext);

  const handleSignUpForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupData, [name]: value });
  };
  console.log(signupData);
  return (
    <div className="main-wrapper">
      <div className="main-centered">
        <div className="phonescreen-wrapper">
          <img
            className="phone-pic"
            src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/5164ee267cc2942f22b8cff329f933fb/hero_3x.png?fl=progressive&q=100&w=1180"
          />
        </div>
        <div className="main-signup">
          <div className="main-signup-p-wrapper">
            <div className="signup-header">The future of money is here</div>
            <div className="signup-body">
              We're the most trusted place for people and businesses to buy,
              sell, and manage crypto
            </div>
          </div>

          <p className="p-email">Email address</p>
          <div className="main-input-form">
            <input
              type="email"
              name="email"
              value={signupData.email}
              placeholder="satoshi@nakamoto.com"
              className="main-input"
              onChange={handleSignUpForm}
            />
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="main-signup-button">Sign up</button>
            </Link>
          </div>
          <p className="signup-reward">Sign up and get up to $200 in crypto¹</p>
        </div>
      </div>
    </div>
  );
}
