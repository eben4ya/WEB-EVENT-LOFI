import Events from "./events";
import classNames from "classnames";

export default function Dropdown({classname}) {
  return (
    <>
      <ul className={classNames("gap-3", classname)}>
        <Events>Tetipendece</Events>
        <Events>Troposphere</Events>
        <Events>Enforian</Events>
        <Events>Spectrum</Events>
      </ul>
    </>
  );
}
