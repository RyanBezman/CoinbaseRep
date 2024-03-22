import "./usertopbar.css";

export function UserTopBar() {
  return (
    <div className="top-bar-wrapper">
      <div className="top-bar-left">Home</div>
      <div className="top-bar-right">
        <input type="text" placeholder="Search for an asset"></input>
      </div>
    </div>
  );
}
