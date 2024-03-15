import { DropdownButton } from "../Buttons/dropdownbutton";
import "./individuals.css";
type DropdownButtonProps = {
  img: string;
  top: string;
  bottom: string;
};
const individualsLeftColumn: DropdownButtonProps[] = [
  {
    img: "https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg",
    top: "Buy and sell",
    bottom: "Buy, sell and use crypto",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/3BD4LmMLr49DnQJBr8qFdw/ab5cbe4289ff12e7d610acc8baa3dd32/coinbase_wallet_logo_bg.svg",
    top: "Wallet",
    bottom: "The best self-hosted crypto wallet",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/2OUJoRinjmzcv3L4oEvD8C/68d9a0ea281708d0b859c6fd7d909a1a/new-card-icon.svg",
    top: "Card",
    bottom: "Spend crypto, earn crypto rewards",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/26W7tWrpDU6eLcgKiuL7U7/887617ce48666f87365d1f4fe0675cc3/new-borrow-icon.svg",
    top: "Borrow",
    bottom: "Borrow cash using Bitcoin as collateral",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/2R68T7CC9SMNPZ0qlBT27C/2b101f95e5b201bf99216dafe14c5d1a/new-earn-icon.svg",
    top: "Learning rewards",
    bottom: "Learn and earn crypto",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/PFIb0wMktAxwbH75ottHF/faa45fc58125a8a365c4403a4f38fd8e/cb1_new_logo_1.svg",
    top: "Coinbase One",
    bottom: "Get more out of crypto",
  },
];
const individualsRightColumn: DropdownButtonProps[] = [
  {
    img: "https://static-assets.coinbase.com/assethub/coinbase-advanced-trade-icon.png",
    top: "Advanced",
    bottom: "Buy, sell and use crypto",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/6p26wqrFCoNdZDIGyGzFKH/2387448b61bc821fc229800824bc93df/Earn-asset-logged-out.svg",
    top: "Earn",
    bottom: "Earn rewards on your crypto",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/1CmcG8xD5BPT3DYJnl0DXG/6135743862720cdd53a5a9077c64e0af/new-private-client-icon.svg",
    top: "Private Client",
    bottom: "For trusts, family offices, UHNWIs",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/4aimnFIF9r1DhebxFhYaEm/fe83638dae90ae49bf41e4a00f2372c6/new-rewards-icon.svg",
    top: "Rewards",
    bottom: "Earn crypto, win crypto",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/MnTi2c0sf1SMl2j4rQgew/e9bd7ce56171576923eac474a862fcd0/NFT.svg",
    top: "NFT",
    bottom: "Create, collect, connect",
  },
];

export function IndividualsDrop() {
  return (
    <div className="individuals-wrapper">
      <div className="left-explore">
        {individualsLeftColumn.map((info) => {
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
        {individualsRightColumn.map((info) => {
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
        <div className="right-title">Crypto tools for everyone</div>
        <div className="right-body">
          Buy, sell, and spend crypto on the world's most trusted crypto
          exchange
        </div>
        <div className="right-footer">See all products</div>
      </div>
    </div>
  );
}
