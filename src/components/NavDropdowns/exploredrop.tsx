import { useContext } from "react";
import "./exploredrop.css";
import { Context } from "../../App";
export function ExploreDrop() {
  const [, setNavbarHover] = useContext(Context);

  return (
    <div
      className="explore-wrapper"
      onMouseEnter={() => {
        setNavbarHover("explore");
      }}
      onMouseLeave={() => {
        setNavbarHover("");
      }}
    >
      <div className="left-explore">
        <div className="graph-image-wrapper">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/2jaq2lDZhtxo16FOlRvRbu/fce2cf12493d2b8146a09df10dedd901/chart-0.svg"
            alt=""
            className="graph-logo"
          />
          <div className="logo-references-wrapper">
            <div className="top-reference">Crypto</div>
            <div className="bottom-reference">
              View crypto prices and charts
            </div>
          </div>
        </div>
        <div className="graph-image-wrapper">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/5XwrIBojndyEzw0ib7nwUA/015a7e25ccf31d9a882dda4f5895e9f8/nftLibrary__1_.svg"
            alt=""
            className="graph-logo"
          />
          <div className="logo-references-wrapper">
            <div className="top-reference">Web3</div>
            <div className="bottom-reference">Dive into the world of dapps</div>
          </div>
        </div>
      </div>
      <div className="right-explore">
        <div className="graph-image-wrapper">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/4oZULOcKHY1JHPxHf1b8EC/ef5c707eef45d2c4d86e20d9ab217edd/decentralizedIdentity-0.svg"
            alt=""
            className="graph-logo"
          />
          <div className="logo-references-wrapper">
            <div className="top-reference">ENS Profiles</div>
            <div className="bottom-reference">
              Build your web3 experience today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
