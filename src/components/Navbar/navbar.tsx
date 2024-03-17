import { SignIn } from "../Buttons/signin";
import { SignUp } from "../Buttons/signup";
import { Banner } from "./banner";
import "./navbar.css";
import { Context } from "../../App";
import { useContext } from "react";

export function Navbar() {
  const [navbarHover, setNavbarHover] = useContext(Context);

  return (
    <div className="navbar-header">
      <Banner />
      <div className="navbar-wrapper">
        <div className="coinbase-logo-wrapper">
          <img
            src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
            className="coinbase-logo"
          />
        </div>
        <div className="nav-main">
          <div
            className="navlinks explore"
            onMouseEnter={() => {
              setNavbarHover("explore");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Explore</span>
          </div>
          <div
            className="navlinks learn"
            onMouseEnter={() => {
              setNavbarHover("learn");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Learn</span>
          </div>
          <div
            className="navlinks individuals"
            onMouseEnter={() => {
              setNavbarHover("individuals");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Individuals</span>
          </div>
          <div
            className="navlinks businesses"
            onMouseEnter={() => {
              setNavbarHover("businesses");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Businesses</span>
          </div>
          <div
            className="navlinks developers"
            onMouseEnter={() => {
              setNavbarHover("developers");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Developers</span>
          </div>
          <div
            className="navlinks Company"
            onMouseEnter={() => {
              setNavbarHover("company");
            }}
            onMouseLeave={() => {
              setNavbarHover("");
            }}
          >
            <span>Company</span>
          </div>
        </div>
        <div className="nav-buttons-wrapper">
          <div className="nav-buttons">
            <div className="globe-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="globe"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <SignIn />
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
