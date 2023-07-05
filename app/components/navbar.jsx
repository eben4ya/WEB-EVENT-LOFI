import Nav from "./nav";
import Logo from "./logo";
import Button from "./button";

export default function Navbar () {
  return (
    <>
      <div className="flex items-center w-11/12 mx-auto">
        <div className="w-3/12">
          <Logo className="hover:scale-110"/>
        </div>
        <div className="w-6/12">
          <Nav />
        </div>
        <div className="w-3/12 text-right">
          <Button variant="outline-yellow">OPEN DONASI</Button>
        </div>
      </div>
    </>
  );
}
