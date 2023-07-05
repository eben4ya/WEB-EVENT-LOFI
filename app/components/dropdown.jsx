import Events from "./events";


export default function Dropdown({classname}) {
  const addClassname = classname ? `${classname}` : "";
  return (
    <>
      <ul className={`gap-3 ${addClassname}`}>
        <Events>Tetipendece</Events>
        <Events>Troposphere</Events>
        <Events>Enforian</Events>
        <Events>Spectrum</Events>
      </ul>
    </>
  );
}
