import { useContext } from "react";
import { DropdownButton } from "../Buttons/dropdownbutton";
import "./businesses.css";
import { Context } from "../../App";

type DropdownButtonProps = {
  img: string;
  top: string;
  bottom: string;
};
const businessesLeftColumn: DropdownButtonProps[] = [
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/6rjjBsuUFcTNro1OviDdDC/fafc347876b5fede9d19d3dabc26fa0a/new-institutional-icon.svg",
    top: "Institutional",
    bottom: "Solutions for institutional investors",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/1FEdoR9yiNRC5hCCWsa5L2/61c31cd86e8a9e36f4282454b6e19cb9/new-commerce-icon.svg",
    top: "Commerce",
    bottom: "Accept crypto from anyone",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/VZpxxgYHNWXtyzq0tE2vt/a1f11b07a5bbfc256bcdd7a4506da4b4/new-exchange-icon.svg",
    top: "Exchange",
    bottom: "Direct access to our exchange",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/35hbaIVHJDfF54a3pQWJTA/70304a28d383a0d2dbc1fcf9a1a664f1/international_exchange.svg",
    top: "International Exchange",
    bottom: "Direct access to our international exchange",
  },
];
const businessesRightColumn: DropdownButtonProps[] = [
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/59sLic8xsGkkCUuHfqn4wc/7e46b201f78bcd4664333d19733fb5f8/new-prime-icon.svg",
    top: "Prime",
    bottom: "The prime brokerage platform",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/4sGoc9vBSbsR5hFqSixQsh/f0ef61797bb1d30ba32394b2816669be/new-assetHub-icon.svg",
    top: "Asset Hub",
    bottom: "List your asset on Coinbase",
  },
  {
    img: "https://images.ctfassets.net/c5bd0wqjc7v0/FkpxYKh8E3bCvOkM2buz3/7914de9d8ce7657ad72af6fb1af8fe92/derivativesNavigation__1_.svg",
    top: "Derivatives Exchange",
    bottom: "Trade an accesible futures market",
  },
];

export function BusinessesDrop() {
  const [, setNavbarHover] = useContext(Context);

  return (
    <div
      className="businesses-wrapper"
      onMouseEnter={() => {
        setNavbarHover("businesses");
      }}
      onMouseLeave={() => {
        setNavbarHover("");
      }}
    >
      <div className="left-explore">
        {businessesLeftColumn.map((info) => {
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
        {businessesRightColumn.map((info) => {
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
        <div className="right-title">Built for businesses and institutions</div>
        <div className="right-body">
          Crypto solutions for institutional investors, family offices, and
          businesses
        </div>
        <div className="right-footer">See all products</div>
      </div>
    </div>
  );
}
