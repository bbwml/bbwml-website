'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"
import { ImTarget } from "react-icons/im";

export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
		)

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					}
				})
			},
			{
				root: null, // viewport
				threshold: isSmallScreen ? 0.2 : 0.3, // Adjust based on screen size
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])
	return (
		<>
			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="wg-company">
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#">
												Company Mission
											</Link>
										</div>
										<p className="text">
											To help individuals and businesses grow, preserve, and transfer wealth 
											through disciplined investing, personalized advice, and transparent stewardship. 
											We are committed to delivering exceptional service that helps our clients succeed.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<ImTarget style={{ fontSize: "24px" }} />
											</div>
											<Link href="/#">
												Company Vision &amp; Goals
											</Link>
										</div>
										<p className="text">
											To be the most trusted wealth partner in Africa—known for data-driven strategies, 
											human-centered guidance, and long-term performance. We strive to set the standard 
											for excellence in wealth management and financial advisory services.
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image tf-hover">
								<div className="hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/widget/card-service-6.jpg" data-src="/images/section/why.jpg" alt="" className="lazyload tf-animate-2" />
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="content">
								<div className="content-left">
									<p className="s-sub-title ">
										<i className="icon-angles-right moveLeftToRight" />
										Why choose us
									</p>
									<p className="s-title  mb-30 text-anime-wave">
										Professional Expertise and{" "}
										<span>
											Investment Excellence
										</span>
									</p>
									<p className="text ">
										Our commitment to transparency, disciplined investing, and client-focused 
										approach drives us to deliver institutional-grade solutions tailored to your unique goals
									</p>
								</div>
								<div className="content-right">
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p className='text-black'>
												Portfolio Management
											</p>
											<p className="percent text-black">
												95%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }} />
										</div>
									</div>
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p className='text-black'>
												Investment Advisory
											</p>
											<p className="percent text-black">
												92%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{ width: '92%' }} />
										</div>
									</div>
									<div className="wg-skill ">
										<div className="name">
											<p className='text-black'>
												Wealth Planning
											</p>
											<p className="percent text-black">
												88%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{ width: '88%' }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}