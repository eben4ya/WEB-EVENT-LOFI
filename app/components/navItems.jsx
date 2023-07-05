import Link from "next/link";

export default function NavItems({ children, href }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white text-lg text-opacity-60 font-semibold "
      >
        {children}
      </Link>
    </li>
  );
}
