import { Link } from "react-router-dom";
import "./pickaccountnav.css";
export function PickAccountNav() {
  return (
    <div className="pickaccount-nav-wrapper">
      <nav className="pickaccountnav">
        <img
          src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
          className="coinbase-logo-two"
        />
        <div className="alreadyhave-wrapper">
          <p className="alreadyhave">Already have an account?</p>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button className="signin-square">Sign In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
