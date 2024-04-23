import { ReactNode } from "react";
import "./usernavbutton.css";

type UserNavButtonProps = {
  img: ReactNode;
  title: string;
};

export function UserNavButton({ img, title }: UserNavButtonProps) {
  return (
    <li className="user-navbutton-wrapper">
      <div className="houselogowrap">{img}</div>
      <span className="usernavbutton-text">{title}</span>
    </li>
  );
}
