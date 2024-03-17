import { ExploreDrop } from "../components/NavDropdowns/exploredrop";
import { Navbar } from "../components/Navbar/navbar";
import { Context } from "../App";
import { useContext } from "react";
import { LearnDrop } from "../components/NavDropdowns/learndrop";
import { IndividualsDrop } from "../components/NavDropdowns/individuals";
import { BusinessesDrop } from "../components/NavDropdowns/businesses";
import { DevelopersDrop } from "../components/NavDropdowns/developersdrop";
import { CompanyDrop } from "../components/NavDropdowns/companydrop";
import { MainPage } from "../components/MainPage/mainpage";

export function Home() {
  const [navbarHover] = useContext(Context);

  return (
    <>
      <Navbar />

      {navbarHover === "explore" ? <ExploreDrop /> : null}
      {navbarHover === "learn" ? <LearnDrop /> : null}
      {navbarHover === "individuals" ? <IndividualsDrop /> : null}
      {navbarHover === "businesses" ? <BusinessesDrop /> : null}
      {navbarHover === "developers" ? <DevelopersDrop /> : null}
      {navbarHover === "company" ? <CompanyDrop /> : null}
      <MainPage />
    </>
  );
}
