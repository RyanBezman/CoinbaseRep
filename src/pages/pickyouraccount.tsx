import { useState } from "react";
import { IndividualButton } from "../components/Buttons/individualbutton";
import { PickAccountNav } from "../components/Navbar/pickaccountnav";
import "./pickyouraccount.css";
import { AccountInfo } from "../components/AccountInfo/accountinfo";
import { Link } from "react-router-dom";

type boxInfo = {
  title: string;
  bottom: string;
  img: string;
};
const businessAccountInfo = [
  {
    top: "Set up your organization",
    bottom: "Create a single account to manage all of your business entities",
  },
  {
    top: "Invite and manage your team",
    bottom:
      "Provide your whole team with permissioned acces to your organization's account.",
  },
  {
    top: "Safe & secure",
    bottom: "Offline cold storage provides maximum security.",
  },
];
const individualAccountInfo = [
  {
    top: "Access to hundreds of cryptocurrencies",
    bottom: "Buy, sell, and track your crypto all in the one place.",
  },
  {
    top: "Safe & secure",
    bottom: "Industry best practices are used to keep your crypto safe",
  },
  {
    top: "Anytime, anywhere",
    bottom:
      "Stay on top of the markets with the Coinbase app for Android or iOS",
  },
];
const buttonsInfo: boxInfo[] = [
  {
    title: "Individual",
    bottom:
      "For individuals who want to trade, send and receive crypto, get price alerts, and more",
    img: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/delegate-2.svg",
  },
  {
    title: "Business",
    bottom:
      "For businesses and high net worth individuals who want to accept, custody, trade crypto and more",
    img: "https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/institutions-2.svg",
  },
];
export function PickYourAccount() {
  const [accountType, setAccountType] = useState("Individual");
  console.log(accountType);

  return (
    <div className="pickyouraccountwrapper">
      <PickAccountNav />
      <div className="bottompickaccount">
        <div className="welcome-wrapper">
          <div>
            <h1 className="welcometext">Welcome to Coinbase</h1>
            <div className="signup-optionone">
              <button className="button-numbered">1</button>
              <div className="textsignupone-wrapper">
                <div className="textsignupone">
                  <h2 className="textsignuptitle">
                    Which trading platform is right for you?
                  </h2>
                  <p className="textsignupbottom">
                    Learn about the benefits of each
                  </p>
                </div>
                <button className="explorebutton">Explore</button>
              </div>
            </div>
            <div className="signup-optiontwo">
              <button className="button-numberedtwo">2</button>
              <div className="textsignuptwo-wrapper">
                <div className="textsignupone">
                  <h2 className="textsignuptitletwo">
                    Choose your Account Type
                  </h2>
                  {buttonsInfo.map((info) => {
                    return (
                      <IndividualButton
                        title={info.title}
                        bottom={info.bottom}
                        img={info.img}
                        accountType={setAccountType}
                        isSelected={accountType === info.title}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="getstarted-button">Get Started</button>
            </Link>
          </div>
          {accountType === "Individual" ? (
            <div className="pickaccount-righthalf">
              <div className="accountsidebar">
                <h3 className="sidebartitle">
                  An individual account is the best way to manage your personal
                  crypto portfolio
                </h3>
                <div className="sidebarinfo">
                  {individualAccountInfo.map((info) => {
                    return <AccountInfo top={info.top} bottom={info.bottom} />;
                  })}
                </div>
              </div>
            </div>
          ) : null}
          {accountType === "Business" ? (
            <div className="pickaccount-righthalf">
              <div className="accountsidebar">
                <h3 className="sidebartitle">
                  A business account offers companies, institutions, and high
                  net worth clients access to our suite of professional
                  investment tools.
                </h3>
                <div className="sidebarinfo">
                  {businessAccountInfo.map((info) => {
                    return <AccountInfo top={info.top} bottom={info.bottom} />;
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
