'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer4() {
	const [isAccordion1, setIsAccordion1] = useState(0)
	const [isAccordion2, setIsAccordion2] = useState(0)
	const [isAccordion3, setIsAccordion3] = useState(0)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		handleResize() // Run on initial load
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleAccordion1 = (key) => {
		if (!isDesktop) {
			setIsAccordion1((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion2 = (key) => {
		if (!isDesktop) {
			setIsAccordion2((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion3 = (key) => {
		if (!isDesktop) {
			setIsAccordion3((prev) => (prev === key ? null : key))
		}
	}

	const getDisplayStyle1 = (key) => {
		return isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none'
	}
	const getDisplayStyle2 = (key) => {
		return isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none'
	}
	const getDisplayStyle3 = (key) => {
		return isDesktop ? 'block' : isAccordion3 === key ? 'block' : 'none'
	}
	return (
		<>

			<footer className="tf-footer">
				<div className="footer-top">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<div className="content">
									<p className="title font-main-2 text-anime-wave">
										Let's Grow your
										<span> Business Strategy </span>
									</p>
									<p className="text">
										A well-crafted business strategy is the foundation of any
										successful enterprise. It serves as a <br /> guiding framework for how a company
										reaches its goals and achieves sustainable growth
									</p>
									<Link href="/contact" className="tf-btn text-anime-style-1">Get
										Consultation <i className="icon-chevron-right" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-inner">
					<div className="inner-top">
						<div className="tf-container">
							{/* <div className="row">
								<div className="col-lg-4">
									<div className="flex item-center h-100">
										<p className="title font-main-2 fw-7">
											Newsletter
											<span className="fw-3"> Subscribe </span>
										</p>
									</div>
								</div>
								<div className="col-lg-7 offset-lg-1">
									<div className="subscribe-wrap">
										<form action="#" id="form-sub" className="form-sub style-2">
											<fieldset>
												<input type="text" placeholder="Email Address" required />
											</fieldset>
										</form>
										<button form="form-sub" type="submit" className="tf-btn style-2">
											Subscribe
											<i className="icon-chevron-right" />
										</button>
									</div>
								</div>
							</div> */}
						</div>
					</div>
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="inner-center">
									<div className="footer-inner-wrap s1">
										<div className="wrap">
											<h5 className="footer-title">Company</h5>
											<p className="text">
												Professional business consulting services to help you achieve your goals and overcome challenges.
											</p>
										</div>
										<div className="logo-site">
											<Link href="/">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													id="logo_footer" data-retina="./images/logo/logo@2x.png" src="/images/logo/logo.png" alt="" />
											</Link>
										</div>
									</div>
									<div className="footer-inner-wrap s1">
										<div className={`wrap footer-col-block  ${isAccordion1 === 1 ? 'open' : ''}`}>
											<h5 className="footer-title footer-title-desktop">Office Address</h5>
											<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion1(1)}>Office Address</h5>
											<p className="text tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
												1st Floor Ogun House, <br />
												Ralph Shodeinde Street, <br />
												Central Business District, Abuja
											</p>
										</div>
										<div className={`wrap footer-col-block  ${isAccordion2 === 1 ? 'open' : ''}`}>
											<h5 className="footer-title footer-title-desktop">Contact Us</h5>
											<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion2(1)}>Contact Us</h5>
											<p className="text tf-collapse-content" style={{ display: getDisplayStyle2(1) }}>
												info@bbwml.com <br />
												09163465130 <br />
												08188890240 <br />
												www.bbwml.com
											</p>
										</div>
									</div>
									<div className={`footer-inner-wrap footer-col-block ${isAccordion3 === 1 ? 'open' : ''}`}>
										<h5 className="footer-title footer-title-desktop">Services</h5>
										<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion3(1)}>Services</h5>
										<ul className="list tf-collapse-content" style={{ display: getDisplayStyle3(1) }}>
											<li>
												<Link href="/our-service">Business Consulting</Link>
											</li>
											<li>
												<Link href="/our-service">Strategic Planning</Link>
											</li>
											<li>
												<Link href="/our-service">Financial Analysis</Link>
											</li>
											<li>
												<Link href="/our-service">Market Research</Link>
											</li>
											<li>
												<Link href="/our-service">Management Consulting</Link>
											</li>
										</ul>
									</div>
									<div className="footer-inner-wrap footer-col-block">
										<h5 className="footer-title footer-title-desktop">Quick Link</h5>
										<h5 className="footer-title footer-title-mobile">Quick Link</h5>
										<ul className="list tf-collapse-content">
											<li>
												<Link href="/about">About Company</Link>
											</li>
											<li>
												<Link href="/our-service">Our Services</Link>
											</li>
											<li><Link href="/contact">Contact Us</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="inner-bottom">
									<Link href="/#" className="footer-go-top">
										<i className="icon-arrow-top fs-8"> </i>
									</Link>
									<div className="policy-list">
										<ul className="list">
											<li>
												<Link href="/privacy"> Privacy Policy </Link>
											</li>
											<li>
												<Link href="/terms"> Terms and Conditions </Link>
											</li>
											<li>
												<Link href="/contact"> Support </Link>
											</li>
										</ul>
									</div>
									<div className="social">
										<p>Follow Us</p>
										<div className="icon">
											<i className="icon-Arrow-3" />
										</div>
										<ul className="social-list">
											<li>
												<Link href="/#">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-linkedin" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-youtube" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<p className="no-copy">
									Copyright © {new Date().getFullYear()} <span> BBWML </span> 
									, All Rights Reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="f-item item-1 ">
					<div className="rellax" data-rellax-speed="0.2">
						<i className="icon-arrow-top-right" />
					</div>
				</div>
			</footer>

		</>
	)
}