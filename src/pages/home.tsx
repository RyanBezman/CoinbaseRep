import { ExploreDrop } from "../components/NavDropdowns/exploredrop";
import { Navbar } from "../components/Navbar/navbar";
type HomeProps = {
  dropdownSection: string;
};
export function Home({ dropdownSection }: HomeProps) {
  return (
    <>
      <Navbar />
      <ExploreDrop />
    </>
  );
}
