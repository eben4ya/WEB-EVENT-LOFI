import Link from "next/link";
import classNames from "classnames";

export default function Button({ children, className, variant, href }) {

  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 font-semibold hover:text-black hover:bg-yellow-500`,
    yellow: `text-black bg-yellow-300 hover:bg-yellow-600`,
  };
  const pickedVariant = variants[variant];
  const pickedHref = href ? `${href}` : "";
  return (
    <>
      <Link
        href={pickedHref}
        className={classNames(
          "transition py-3 px-10 text-lg rounded-full inline-block",
          className,
          pickedVariant
        )}
      >
        {children}
      </Link>
    </>
  );
}
