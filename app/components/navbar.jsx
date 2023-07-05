"use client";
import Nav from "./nav";
import Logo from "./logo";
import Button from "./button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Dropdown from "./dropdown";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="flex items-center w-11/12 mx-auto">
        <div className="w-3/12">
          <Logo className="hover:scale-110" />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button
            variant="outline-yellow"
            href="https://forms.gle/ctmnMsgM7neB3wLp8"
          >
            OPEN DONASI
          </Button>
        </div>
        <div className="w-9/12 md:hidden pl-[200px]" onClick={() => setOpenMenu((prev) => !prev)}>
          <GiHamburgerMenu color="white" size={25} />
          {openMenu ? <Dropdown classname="absolute"/> : null}
        </div>
      </div>
    </>
  );
}
