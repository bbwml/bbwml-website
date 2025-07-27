'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const isActive = (path) => pathname === path ? "current" : ""
	const isParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current" : ""

	return (
		<ul className="nav-list">
			<li className={`item has-child ${isParentActive(["/home-2", "/home-3", "/home-4"])}`}>
				<Link href="#"><span>Home</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/")}>
						<Link href="/"><span> Home Consulting </span></Link>
					</li>
					<li className={isActive("/home-2")}>
						<Link href="/home-2"><span> Corporate Consulting </span></Link>
					</li>
					<li className={isActive("/home-3")}>
						<Link href="/home-3"><span> Financial Advisor </span></Link>
					</li>
					<li className={isActive("/home-4")}>
						<Link href="/home-4"><span> Marketing Consulting </span></Link>
					</li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/team-member", "/team-details", "/pricing-table", "/career", "/awards", "/mission-vision", "/faqs", "/404"])}`}>
				<Link href="#"><span>Pages</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/team-member")}><Link href="/team-member"><span> Team Member </span></Link></li>
					<li className={isActive("/team-details")}><Link href="/team-details"><span> Team Details </span></Link></li>
					<li className={isActive("/pricing-table")}><Link href="/pricing-table"><span> Pricing Table </span></Link></li>
					<li className={isActive("/career")}><Link href="/career"><span> Career </span></Link></li>
					<li className={isActive("/awards")}><Link href="/awards"><span> Awards </span></Link></li>
					<li className={isActive("/mission-vision")}><Link href="/mission-vision"><span> Mission Vision </span></Link></li>
					<li className={isActive("/faqs")}><Link href="/faqs"><span> FAQs </span></Link></li>
					<li className={isActive("/404")}><Link href="/404"><span> 404 </span></Link></li>
				</ul>
			</li>
			<li className={`item ${isActive("/about-us")}`}><Link href="/about-us"><span>About</span></Link></li>
			<li className={`item has-child ${isParentActive(["/our-service", "/our-service-02", "/service-details"])}`}>
				<Link href="#"><span>Services</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/our-service")}><Link href="/our-service"><span> Our Service </span></Link></li>
					<li className={isActive("/our-service-02")}><Link href="/our-service-02"><span> Our Service 02 </span></Link></li>
					<li className={isActive("/service-details")}><Link href="/service-details"><span> Service Details </span></Link></li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/case-study-01", "/case-study-02", "/case-details"])}`}>
				<Link href="#"><span>Case</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/case-study-01")}><Link href="/case-study-01"><span> Case Study 01 </span></Link></li>
					<li className={isActive("/case-study-02")}><Link href="/case-study-02"><span> Case Study 02 </span></Link></li>
					<li className={isActive("/case-details")}><Link href="/case-details"><span> Case Details </span></Link></li>
				</ul>
			</li>
			<li className={`item has-child ${isParentActive(["/blog-standard", "/blog-details"])}`}>
				<Link href="#"><span>Blog</span></Link>
				<ul className="sub-nav">
					<li className={isActive("/blog-standard")}><Link href="/blog-standard"><span> Blog Standard </span></Link></li>
					<li className={isActive("/blog-details")}><Link href="/blog-details"><span> Blog Details </span></Link></li>
				</ul>
			</li>
			<li className={`item ${isActive("/contact")}`}><Link href="/contact"><span>Contact</span></Link></li>
		</ul>
	)
}
