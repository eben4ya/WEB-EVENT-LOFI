import Link from "next/link";

export default function Events({ children }) {
  return (
    <>
      <li><Link href="/" className="text-white text-lg font-semibold hover:text-opacity-60">{children}</Link></li>
    </>
  );
}
