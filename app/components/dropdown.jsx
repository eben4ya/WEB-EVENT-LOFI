import Events from "./events";
import classNames from "classnames";

export default function Dropdown({classname}) {
  return (
    <>
      <ul className={classNames("gap-3", classname)}>
        <Events href="/tetipendence">Tetipendece</Events>
        <Events href="/troposphere">Troposphere</Events>
        <Events href="/enforian">Enforian</Events>
        <Events href="/spectrum">Spectrum</Events>
      </ul>
    </>
  );
}
