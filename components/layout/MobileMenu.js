'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [
		{
			title: "Home",
			subMenu: [
				{ title: "Home Consulting", path: "/" },
				{ title: "Corporate Consulting", path: "/home-2" },
				{ title: "Financial Advisor", path: "/home-3" },
				{ title: "Marketing Consulting", path: "/home-4" }
			]
		},
		{
			title: "Page",
			subMenu: [
				{ title: "Team Member", path: "/team-member" },
				{ title: "Team Details", path: "/team-details" },
				{ title: "Pricing Table", path: "/pricing-table" },
				{ title: "Career", path: "/career" },
				{ title: "Awards", path: "/awards" },
				{ title: "Mission Vision", path: "/mission-vision" },
				{ title: "FAQs", path: "/faqs" },
				{ title: "404", path: "/404" }
			]
		},
		{ title: "About", path: "/about-us" },
		{
			title: "Services",
			subMenu: [
				{ title: "Our Service", path: "/our-service" },
				{ title: "Our Service 02", path: "/our-service-02" },
				{ title: "Service Details", path: "/service-details" }
			]
		},
		{
			title: "Case",
			subMenu: [
				{ title: "Case Study 01", path: "/case-study-01" },
				{ title: "Case Study 02", path: "/case-study-02" },
				{ title: "Case Details", path: "/case-details" }
			]
		},
		{
			title: "Blog",
			subMenu: [
				{ title: "Blog Standard", path: "/blog-standard" },
				{ title: "Blog Details", path: "/blog-details" }
			]
		},
		{ title: "Contact", path: "/contact" }
	]

	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item menu-item-has-children-mobile  ${item.subMenu ? "menu-item-has-children-mobile" : ""} ${parentActiveClass}`}>
						<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"}>
							{item.title}
							{item.subMenu && (
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} onClick={() => toggleAccordion(index)} />
							)}
						</Link>
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
