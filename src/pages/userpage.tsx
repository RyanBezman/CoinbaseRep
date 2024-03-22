import { UserSidebar } from "../components/UserHome/usersidebar";
import { UserTopBar } from "../components/UserHome/usertopbar";
import "./userpage.css";

export function UserPage() {
  return (
    <div className="userpage-wrapper">
      <UserSidebar />
      <UserTopBar />
    </div>
  );
}
