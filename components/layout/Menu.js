"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [set, setState] = useState(false);

  const isActive = (path) => (pathname === path ? "current" : "");
  const isParentActive = (paths) =>
    paths.some((path) => pathname.startsWith(path)) ? "current" : "";

  return (
    <ul className="nav-list">
      <li className={`item ${isActive("/")}`}>
        <Link href="/">
          <span>Home</span>
        </Link>
      </li>
      <li className={`item ${isActive("/about-us")}`}>
        <Link href="/about-us">
          <span>About</span>
        </Link>
      </li>
      <li className={`item ${isActive("/our-service")}`}>
        <Link href="/our-service">
          <span>Services</span>
        </Link>
      </li>
      <li className={`item ${isActive("/insights")}`}>
        <Link href="/insights">
          <span>Insights</span>
        </Link>
      </li>
      <li className={`item ${isActive("/contact")}`}>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
}
