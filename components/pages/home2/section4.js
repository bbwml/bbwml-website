'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Section4() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="s-why-choose tf-spacing-1">
				<div className="mb-100">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										Why choose us
									</p>
									<p className="s-title text-main-green-3 mb-30 text-anime-wave">
										Unrivaled Expertise, Tailored
										<span>
											Solutions
										</span>
									</p>
									<p className="text mb-40">
										We provide lasting value that drives real business transformation. Our <br /> team
										of
										seasoned experts brings years of industry experience and a <br /> deep
										understanding of
										market dynamics to every project.
									</p>
									<ul className="list">
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Expertise Across Industries
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Customized Strategies
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Proven Track Record
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Innovative Problem-Solving
											</p>
										</li>
									</ul>
									<Link href="/about-us" className="tf-btn style-6 text-anime-style-1">
										Learn More Feratures
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="video-wrap style-2 ">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/why-choose.jpg" data-src="/images/section/why-choose.jpg" alt="" className="lazyload tf-animate-2" />
									<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
										<i className="icon-play" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-4">
							<div className="box-icon style-2 tf-hover-icon  wow fadeInUp" data-wow-delay="0s">
								<div className="icon style-circle">
									<i className="flaticon-rocket-1 hover-icon-2" />
								</div>
								<Link href="/mission-vision" className="title fw-7">
									Startup investment
								</Link>
								<p className="text text-clamp-3">
									Startup investment refers to the process
									of providing financial support.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="box-icon style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon style-circle">
									<i className="flaticon-efficiency hover-icon-2" />
								</div>
								<Link href="/mission-vision" className="title fw-7">
									Business development
								</Link>
								<p className="text text-clamp-3">
									Business development refers to strategic initiatives, processes, and activities.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="box-icon style-2 tf-hover-icon last wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon style-circle">
									<i className="flaticon-pie-chart hover-icon-2" />
								</div>
								<Link href="/mission-vision" className="title fw-7">
									Market Compliance
								</Link>
								<p className="text text-clamp-3">
									Market compliance refers to the process of ensuring that a business adheres.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-overlay" />
			</section>

			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
