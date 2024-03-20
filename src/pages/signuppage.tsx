import { SignUpNav } from "../components/Navbar/signupnav";
import { CreateAccount } from "../components/SignUpForm/createaccount";
import "./singuppage.css";
export function SignUpPage() {
  return (
    <div className="signup-page-wrapper">
      <SignUpNav />
      <div className="signup-page-bottomhalf">
        <div className="signup-main">
          <div className="signup-left">
            <div className="signup-arrow-wrapper">
              <button className="left-arrow-button">
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                </svg>
              </button>
            </div>
            <div className="left-main-wrapper">
              <div className="createaccount-title">Create an account</div>
              <div className="createaccount-body">
                Be sure to enter your legal name as it appears on your
                government-issued ID.
              </div>
              <div className="createaccount-footer">
                Required fields have an asterisk: *
              </div>
              <CreateAccount />
              <div className="signupfor-business">
                <span className="blue"> Sign up</span> for a business account
              </div>
              <div className="us-disclosures-data">
                For information on how we use your data see.{" "}
                <span className="blue">US Disclosures</span>
              </div>
            </div>
          </div>
          <div className="signup-right">
            <div className="right-signup-header">
              Get up to $200 for getting started
            </div>
            <div className="see-terms">
              Earn free crypto after making your first purchase.
              <span className="blue"> See terms</span>
            </div>
            <div className="dollarsign-image-wrapper">
              <img
                src="https://static-assets.coinbase.com/ui-infra/illustration/v1/heroSquare/svg/light/earnMore-2.svg"
                className="dollarsign-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
