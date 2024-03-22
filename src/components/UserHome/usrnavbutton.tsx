import "./usernavbutton.css";

export function UserNavButton({ img, title }) {
  return (
    <li className="user-navbutton-wrapper">
      <div
        className="houselogowrap"
        dangerouslySetInnerHTML={{ __html: img }}
      />
      <span className="usernavbutton-text">{title}</span>
    </li>
  );
}
