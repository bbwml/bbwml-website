'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
import SlidingText from '../../slidingHub/SlidingText'

export default function Hero1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<div className="page-title-home-1">
				<div className="mb-50">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-6">
								<div className="content">
									<p className="s-sub-title text-dark ">
										<i className="icon-angles-right moveLeftToRight" />
										B&B Wealth Management
									</p>
									<p className="s-title text-dark mb-50 text-fs-70">
										Investment
										& <br /> Asset Management<br />
										<span className="animationtext clip">
											<TypeAnimation
												sequence={[
													' Solutions',
													1000,
													' Services',
													1000,
													' Strategies',
													1000,
												]}
												wrapper="span"
												speed={50}
												style={{ display: 'inline-block', color: 'var(--Main-yellow)', fontWeight: '500' }}
												repeat={Infinity}
												className="cd-words-wrapper">
											</TypeAnimation>
										</span>
									</p>
									<span className="line mb-50" />
									<p className="text font-main-2 fw-5 mb-40">
										We deliver sophisticated investment strategies and comprehensive <br /> asset management
										solutions
										to maximize your wealth potential.
									</p>
									<div className="bot">
										<Link href="/our-service" className="tf-btn">
											Explore Investment Solutions
											<i className="icon-chevron-right" />
										</Link>
										<div className="video-wrap">
											<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
												<span className="icon style-circle">
													<span className="bg" />
													<span className="wave-3" />
													<i className="icon-play fs-12" />
												</span>
												Watch Video
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="image-wrap">
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto", borderRadius: "20px" }}
											src="/images/section/hero-image.png" data-src="/images/section/hero-image.png" alt="" className="lazyload" />
									</div>
									<div className="wg-curve-text tf-animate__box animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SlidingText />
			</div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
