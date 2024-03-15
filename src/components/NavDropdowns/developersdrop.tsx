import { DropdownButton } from "../Buttons/dropdownbutton";
import "./developersdrop.css";
type DropdownButtonProps = {
  img: string;
  top: string;
  bottom: string;
};
const developerLeftColumn: DropdownButtonProps[] = [
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/6xvB0yE6s3SBLlUw0TVQgV/b5d1936d738e25e43a484a0615bb4c0c/cloud-icon.svg",
    top: "Cloud",
    bottom: "Developer Tools and APIs",
  },
  {
    img: "https://static-assets.coinbase.com/coinbase/globalnav/waas/Frame.png",
    top: "Wallet as a Service",
    bottom: "Onboard your users to web3",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/1gONxIto9cBDgURkFnHDwI/3b6162d9707fbbe38fe7cc523dce1ef2/CommerceSDK.svg",
    top: "Commerce API",
    bottom: "Accept crypto payments form customers",
  },
  {
    img: "https://static-assets.coinbase.com/coinbase/globalnav/base/Base_Symbol.svg",
    top: "Base",
    bottom: "An Ethereum L2 to build dapps ",
  },
];

const developerRightColumn: DropdownButtonProps[] = [
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/1gvNK5eS7b2XF2URxTotha/5406957e6d27cc51ccdd28c2e8954645/PaySDK.svg",
    top: "Pay SDK",
    bottom: "A secure fiat-to-crypto solution",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/6bosrgZH2jBWBZQah4JXga/2e8f64c268809143dc4302e1c3e4d932/WalletSDK.svg",
    top: "Wallet SDK",
    bottom: "Link dapps to Coibase Wallet",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/gJjdcPXrDOa4BoiVQqPEO/b69c9c50d171dfa7464a3b1e09767662/Delegate.svg",
    top: "Delegate",
    bottom: "Stake tokens to earn rewards",
  },
];

export function DevelopersDrop() {
  return (
    <div className="developers-wrapper">
      <div className="left-explore">
        {developerLeftColumn.map((info) => {
          return (
            <DropdownButton
              img={info.img}
              top={info.top}
              bottom={info.bottom}
            />
          );
        })}
      </div>
      <div className="right-explore">
        {developerRightColumn.map((info) => {
          return (
            <DropdownButton
              img={info.img}
              top={info.top}
              bottom={info.bottom}
            />
          );
        })}
      </div>
      <div className="right-learn">
        <div className="right-title">Build with Coinbase Cloud</div>
        <div className="right-body">
          Tools and APIs for developers building with crypto
        </div>
        <div className="right-footer">See all products</div>
      </div>
    </div>
  );
}
