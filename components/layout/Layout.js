
'use client'
import DataBg from "@/utils/DataBg"
import animateBoxVideo from "@/utils/animateBoxVideo"
import animateImgItem from "@/utils/animateImgItem"
import animateText from "@/utils/animateText"
import { useCircularTextEffect } from "@/utils/applyCircularText "
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import Hero1 from "../pages/home1/hero1"
import Hero2 from "../pages/home2/hero2"
import Hero3 from "../pages/home3/hero3"
import Hero4 from "../pages/home4/hero4"
import BoxWelcome from "./BoxWelcome"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
// import { hoverTextAnimate } from "@/utils/hoverTextAnimate"
// import { hoverTextAnimate } from "@/utils/hoverTextAnimate"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, mainCls, breadcrumbAlt, hero }) {
	const [scroll, setScroll] = useState(0)
	// MobilleMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}
	// WelcomeBox
	const [isWelcomeBox, setWelcomeBox] = useState(false)
	const handleWelcomeBox = () => {
		setWelcomeBox(!isWelcomeBox)
		!isWelcomeBox ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])
	animateImgItem()
	animateBoxVideo()
	animateText()
	DataBg()
	// hoverTextAnimate()
	useCircularTextEffect()
	return (
		<><div id="top" />
			<AddClassBody />
			<div id="wrapper">
				{!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />}
				{headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				{headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} /> : null}
				<BoxWelcome isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />
				{hero == 1 && <Hero1 />}
				{hero == 2 && <Hero2 />}
				{hero == 3 && <Hero3 />}
				{hero == 4 && <Hero4 />}
				<Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbAlt={breadcrumbAlt} />
				<div className={`main-content ${mainCls ? mainCls : ""}`}>

					{children}
				</div>

				{!footerStyle && < Footer4 />}
				{footerStyle == 1 ? < Footer1 /> : null}
				{footerStyle == 2 ? < Footer2 /> : null}
				{footerStyle == 3 ? < Footer3 /> : null}
				{footerStyle == 4 ? < Footer4 /> : null}

				<BackToTop target="#top" />
			</div>
		</>
	)
}
