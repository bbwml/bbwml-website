'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
  const pathname = usePathname()

  const isActive = (path) => (pathname === path ? "current" : "")

  // Mirror desktop header menu (components/layout/Menu.js)
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about-us" },
    { title: "Services", path: "/our-service" },
    { title: "Insights", path: "/insights" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <ul id="menu-mobile-menu" className="menu">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`menu-item menu-item-has-children-mobile ${isActive(item.path)}`}
        >
          <Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
