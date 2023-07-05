"use client";
import { useState } from "react";
import IconDropdown from "./iconDropdown";
import IconNotif from "./iconNotif";
import NavItems from "./navItems";
import Dropdown from "./dropdown";

export default function Nav() {
  const [openEvents, setOpenEvents] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  return (
    <>
      <ul className="flex justify-center space-x-10 ">
        <NavItems href="/"> Home </NavItems>
        <NavItems href="/"> About </NavItems>
        <div
          className="flex flex-col"
          onClick={() => setOpenEvents((prev) => !prev)}
        >
          <div className="flex flex-row">
            <NavItems href="/"> Event </NavItems>
            <IconDropdown />
          </div>

          {openEvents ? <Dropdown classname="border rounded-lg p-3 absolute mt-8" /> : null}
        </div>
        <NavItems href="/"> FAQ </NavItems>
        <div onClick={() => setOpenNotif((prev) => !prev)}>
          <IconNotif />
          {openNotif ? <Dropdown classname="border rounded-lg p-3 absolute"/> : null}
        </div>
      </ul>
    </>
  );
}
