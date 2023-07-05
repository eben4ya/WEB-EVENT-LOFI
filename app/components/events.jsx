import Link from "next/link";

export default function Events({ children }) {
  return (
    <>
      <li><Link href="/" className="text-white text-lg font-semibold">{children}</Link></li>
    </>
  );
}
