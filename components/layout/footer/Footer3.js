'use client'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer3() {
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

			<footer className="tf-footer style-4 style-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-top">
								<p className="s-title text-white text-anime-wave">
									Contact Us Today Get a Free
									<span>
										Consultations?
									</span>
								</p>
								<Link href="/our-service" className="tf-btn style-15 text-anime-style-1 type-2">
									Get Free Consultation
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="footer-inner">
								<div className="footer-inner-wrap">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												id="logo_footer" data-retina="./images/logo/logo-3@2x.png" src="/images/logo/logo-3.png" alt="" />
										</Link>
									</div>
									<p className="text mb-70">
										Consulting agency serves strategic businesses looking
										overcome.
									</p>
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
								<div className="footer-inner-wrap s1">
									<div className={`wrap footer-col-block  ${isAccordion1 === 1 ? 'open' : ''}`}>
										<h5 className="footer-title footer-title-desktop">Address Business</h5>
										<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion1(1)}>Address Business</h5>
										<p className="text tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
											55 East 10th Street, New York, NY 10003, United States
										</p>
									</div>
									<div className={`wrap footer-col-block  ${isAccordion2 === 1 ? 'open' : ''}`}>
										<h5 className="footer-title footer-title-desktop">Contact Us</h5>
										<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion2(1)}>Contact Us</h5>
										<p className="text tf-collapse-content" style={{ display: getDisplayStyle2(1) }}>
											themesflat@gmail.com <br />
											+000 (123) 456 88
										</p>
									</div>
								</div>
								<div className={`footer-inner-wrap footer-col-block ${isAccordion3 === 1 ? 'open' : ''}`}>
									<h5 className="footer-title footer-title-desktop">Services</h5>
									<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion3(1)}>Services</h5>
									<ul className="list tf-collapse-content" style={{ display: getDisplayStyle3(1) }}>
										<li>
											<Link href="/service-details">Financial Analysis</Link>
										</li>
										<li>
											<Link href="/service-details">Market Research</Link>
										</li>
										<li>
											<Link href="/service-details">Competitive Analysis</Link>
										</li>
										<li>
											<Link href="/service-details">HR Management</Link>
										</li>
										<li>
											<Link href="/service-details">Business Consulting</Link>
										</li>
									</ul>
								</div>
								<div className="footer-inner-wrap form-wrap">
									<h5 className="footer-title">Newsletter</h5>
									<p className="text mb-30">
										Stay us subscribing to our newsletter
									</p>
									<form action="#" id="form-sub" className="form-sub style-5">
										<fieldset className="mb-20">
											<input type="text" placeholder="Email Address" required />
										</fieldset>
										<button type="submit" className="tf-btn style-12">
											<i className="icon-envelope color-white" />
										</button>
										<div className="checkbox-item mb-30 style-2">
											<label>
												<span className="text">Proacted your privacy</span>
												<input type="checkbox" className="checkbox-item" defaultChecked />
												<span className="btn-checkbox" />
											</label>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="footer-bottom relative">
								<Link href="/#" className="footer-go-top">
									<i className="icon-arrow-top fs-8" />
								</Link>
								<p className="no-copy style-2">
									Copyright © {new Date().getFullYear()} <span> Saylo </span> by
									<Link href="https://themeforest.net/user/themesflat" target="_blank">
										Themesflat
									</Link>
									, All Rights Reserved.
								</p>
								<div className="policy-list">
									<ul className="list">
										<li>
											<Link href="/faqs"> Privacy Policy </Link>
										</li>
										<li>
											<Link href="/faqs"> Terms and Conditions </Link>
										</li>
										<li>
											<Link href="/faqs"> Support </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
