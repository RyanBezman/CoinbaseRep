import { UserNavButton } from "./usrnavbutton";
import "./usersidebar.css";
const svgCode = `
<svg fill="black" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	className="house-logo" viewBox="0 0 486.196 486.196"  xml:space="preserve">
<g>
	<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1
		c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6
		c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2
		c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5
		C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9
		v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0
		s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>
</g>
</svg>
`;
const navButtonList = [
  {
    img: svgCode,
    title: "Home",
  },
  {
    img: svgCode,
    title: "My assets",
  },
  {
    img: svgCode,
    title: "Trade",
  },
  {
    img: svgCode,
    title: "Futures",
  },
  {
    img: svgCode,
    title: "Earn",
  },
  {
    img: svgCode,
    title: "Learning rewards",
  },
  {
    img: svgCode,
    title: "Web3",
  },
  {
    img: svgCode,
    title: "Card",
  },
  {
    img: svgCode,
    title: "More",
  },
];

export function UserSidebar() {
  return (
    <div className="user-sidebar-wrapper">
      <div className="small-cb-logo-wrapper">
        <svg
          aria-label="Coinbase logo"
          className="small-cb-logo"
          height="32"
          role="img"
          viewBox="0 0 48 48"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Coinbase logo</title>
          <path
            d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z"
            fill="#0052FF"
          ></path>
        </svg>
      </div>
      <ul className="navbtns-wrapper">
        {navButtonList.map((obj) => {
          return (
            <UserNavButton key={obj.title} img={obj.img} title={obj.title} />
          );
        })}
      </ul>
    </div>
  );
}
