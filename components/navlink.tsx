"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${
        path === href && "font-semibold"
      } text-base hover:underline px-3 py-2`}
    >
      {children}
    </Link>
  );
}
