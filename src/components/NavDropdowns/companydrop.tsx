import { useContext } from "react";
import "./companydrop.css";
import { Context } from "../../App";
export function CompanyDrop() {
  const [, setNavbarHover] = useContext(Context);

  return (
    <div
      className="company-wrapper"
      onMouseEnter={() => {
        setNavbarHover("company");
      }}
      onMouseLeave={() => {
        setNavbarHover("");
      }}
    >
      <div className="left-learn">
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">About</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Affiliates</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Blog</div>
        </div>
      </div>
      <div className="middle-learn">
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Careers</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Support</div>
        </div>
        <div className="list-item-wrapper">
          <div className="learnarrow">&gt;</div>
          <div className="learn-list">Security</div>
        </div>
      </div>
      <div className="right-learn">
        <div className="right-title">Learn all about Coinbase</div>
        <div className="right-body">
          We're building an open financial system for the world
        </div>
      </div>
    </div>
  );
}
