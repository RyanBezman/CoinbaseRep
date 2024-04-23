import { UserNavButton } from "./usrnavbutton";
import "./usersidebar.css";
const houseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 64 64"
    id="home"
  >
    <defs>
      <clipPath id="a">
        <rect width="64" height="64"></rect>
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path d=" M 43.045 61.369 L 59.016 61.369 C 60.669 61.369 62.006 60.027 62 58.374 L 61.894 29.675 C 61.89 28.573 61.214 27.088 60.387 26.361 L 34.314 3.452 C 33.072 2.361 31.053 2.357 29.806 3.443 L 3.498 26.367 C 2.667 27.091 1.996 28.573 2 29.675 L 2.106 58.374 C 2.112 60.027 3.459 61.369 5.112 61.369 L 21.084 61.369 C 22.737 61.369 24.078 60.027 24.078 58.374 L 24.078 45.397 C 24.078 44.295 24.973 43.401 26.075 43.401 L 38.054 43.401 C 39.155 43.401 40.05 44.295 40.05 45.397 L 40.05 58.374 C 40.05 60.027 41.392 61.369 43.045 61.369 Z "></path>
    </g>
  </svg>
);

const stockArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
      clipRule="evenodd"
      strokeWidth="1.5"
      stroke="currentColor"
    />
  </svg>
);

const pieChart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
      clipRule="evenodd"
    />
  </svg>
);

const chartBar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
  </svg>
);

const perecentageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    id="percentage"
  >
    <path d="M7.75781,10.75781a3,3,0,1,0-3-3A3.00328,3.00328,0,0,0,7.75781,10.75781Zm0-4a1,1,0,1,1-1,1A1.00067,1.00067,0,0,1,7.75781,6.75781Zm8.48438,6.48438a3,3,0,1,0,3,3A3.00328,3.00328,0,0,0,16.24219,13.24219Zm0,4a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,16.24219,17.24219ZM19.707,4.293a.99962.99962,0,0,0-1.41406,0l-14,14A.99989.99989,0,1,0,5.707,19.707l14-14A.99962.99962,0,0,0,19.707,4.293Z"></path>
  </svg>
);

const rewardsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="badge">
    <circle cx="12" cy="8.667" r="2"></circle>
    <path d="M18.93,11.924a7.667,7.667,0,1,0-13.86,0L1.244,16.346a1,1,0,0,0,.632,1.646l3.672.46.46,3.672A1,1,0,0,0,7.8,22.6L12,17l4.2,5.6a1,1,0,0,0,1.792-.476l.46-3.672,3.672-.46a1,1,0,0,0,.632-1.646ZM7.685,19.42l-.248-1.988a1,1,0,0,0-.869-.869L3.98,16.24,6.2,13.671c.006.008.014.013.02.02a7.684,7.684,0,0,0,3.884,2.4c.021.006.041.016.062.021ZM12,14.333a5.667,5.667,0,1,1,5.667-5.666A5.692,5.692,0,0,1,12,14.333Zm5.432,2.23a1,1,0,0,0-.869.869l-.248,1.988-2.484-3.312c.021,0,.041-.015.062-.021a7.72,7.72,0,0,0,3.9-2.416L20.02,16.24Z"></path>
  </svg>
);

const planet = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="planet">
    <rect width="256" height="256" fill="none"></rect>
    <circle
      cx="128"
      cy="128"
      r="84"
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    ></circle>
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      d="M179.45516,61.6015c30.106-8.94046,52.92047-8.81761,59.39609,2.3985C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.47514-11.21527,4.82354-31.03251,27.61578-52.63295"
    ></path>
  </svg>
);

const cardIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="card">
    <path d="M27,6H5A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9A3,3,0,0,0,27,6ZM5,8H27a1,1,0,0,1,1,1v2H4V9A1,1,0,0,1,5,8ZM27,24H5a1,1,0,0,1-1-1V15H28v8A1,1,0,0,1,27,24Z"></path>
    <rect width="9" height="2" x="16" y="21"></rect>
  </svg>
);

const moreIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="more">
    <g data-name="Layer 2">
      <g data-name="more-vertical">
        <rect
          width="24"
          height="24"
          opacity="0"
          transform="rotate(-90 12 12)"
        ></rect>
        <circle cx="12" cy="12" r="2"></circle>
        <circle cx="12" cy="5" r="2"></circle>
        <circle cx="12" cy="19" r="2"></circle>
      </g>
    </g>
  </svg>
);

const navButtonList = [
  {
    img: houseIcon,
    title: "Home",
  },
  {
    img: pieChart,
    title: "My assets",
  },
  {
    img: stockArrow,
    title: "Trade",
  },
  {
    img: chartBar,
    title: "Futures",
  },
  {
    img: perecentageIcon,
    title: "Earn",
  },
  {
    img: rewardsIcon,
    title: "Learning rewards",
  },
  {
    img: planet,
    title: "Web3",
  },
  {
    img: cardIcon,
    title: "Card",
  },
  {
    img: moreIcon,
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
