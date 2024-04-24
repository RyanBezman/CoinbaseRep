import { useContext } from "react";
import { SignInContext, SignInContextType } from "../../contexts/signincontext";
import "./profiledrop.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const profileSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const sunSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height={24}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

const paperSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={24}
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
    />
  </svg>
);
const percentSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={24}
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);
const helpSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={24}
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
    />
  </svg>
);
const profileList = [
  {
    svg: profileSvg,
    title: `Manage account`,
  },
  {
    svg: sunSvg,
    title: `My preferences`,
  },
  {
    svg: paperSvg,
    title: `Statements`,
  },
  {
    svg: percentSvg,
    title: `Taxes`,
  },
  {
    svg: helpSvg,
    title: `Help`,
  },
];

type ProfileOptionsProps = {
  svg: React.ReactNode;
  title: string;
};

function ProfileOptions({ svg, title }: ProfileOptionsProps) {
  return (
    <div className="profile-options">
      <div className="options-logo">{svg}</div>
      <div className="options-word">{title}</div>
    </div>
  );
}

export function ProfileDropdown() {
  const { user, setUser }: SignInContextType = useContext(
    SignInContext
  ) as SignInContextType;

  const navigate = useNavigate();
  const handleSignOut = () => {
    Axios.post("http://localhost:3001/deleteactive", {
      password: window.localStorage.getItem("token"),
    }).then(() => {
      navigate("/");
      setUser(null);
      window.localStorage.removeItem("token");
    });
  };

  return (
    <div className="profile-drop-wrapper">
      <div className="drop-top">
        <div className="profile-button">
          <span>{user?.firstName[0].toUpperCase()}</span>
        </div>
        <div className="name-email-wrapper">
          <div className="fullname-drop">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="email-drop">{user?.email}</div>
        </div>
      </div>
      <div className="advanced-wrapper">
        <div className="left-advanced">
          <div className="leftadvanced-top">
            <img
              src="https://assets.coinbase.com/assets/simple-mode-icon.7465d49b57ec9dcae059f7cd45d0d1ea.svg"
              height="56"
              width="56"
              data-element="Image"
              aria-label="undefined "
              className="advancedpics"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              height={20}
              width={20}
              color="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="checkmark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="leftadvanced-title">Coinbase</div>
          <div className="leftadvanced-body">
            The simple way to buy and use crypto
          </div>
        </div>
        <div className="right-advanced">
          <div className="leftadvanced-top">
            <img
              src="https://assets.coinbase.com/assets/advanced-mode-icon.df6f31ad91a275308fdc9b2f853b62af.svg"
              height="56"
              width="56"
              data-element="Image"
              aria-label="undefined "
              className="advancedpics"
            />
            <div className="new">NEW</div>
          </div>
          <div className="leftadvanced-title">Advanced</div>
          <div className="leftadvanced-body">
            Professional-grade tools for trading
          </div>
        </div>
      </div>
      {profileList.map((obj) => {
        return (
          <ProfileOptions svg={obj.svg} title={obj.title} key={obj.title} />
        );
      })}
      <div className="profile-options">
        <div className="options-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className="options-word red" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
    </div>
  );
}
