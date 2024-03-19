import "./signin.css";
export function SignIn() {
  return (
    <div className="signin-wrapper">
      <div className="signin-box">
        <div className="coinbase-logo-wrapper">
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
        <div className="signin-inputtop">Email</div>
        <input
          type="email"
          placeholder="Your email address"
          className="signin-email-input"
        />
        <div className="continuebuttonwrapper">
          <button className="continue-button">Continue</button>
        </div>
        <div>OR</div>
      </div>
    </div>
  );
}
