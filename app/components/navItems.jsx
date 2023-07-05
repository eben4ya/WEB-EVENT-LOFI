import Link from "next/link";

export default function NavItems({ children, href }) {
  return (
    <li>
      <Link
        href={href}
        className="transition text-white text-lg font-semibold hover:text-opacity-60 "
      >
        {children}
      </Link>
    </li>
  );
}
