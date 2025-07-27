
'use client'
import { sliderService2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section4() {
	return (
		<>

			<section className="s-service-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title justify-center text-white">
									<i className="icon-angles-right moveLeftToRight" />
									financial services
								</p>
								<p className="s-title text-white text-center text-anime-style-2">
									Expert Guidance for Every Stage of <br />
									Your Financial
									<span>
										Journey
									</span>
								</p>
							</div>
							<div className="slider-wrap">
								<Swiper {...sliderService2} className="swiper-container slider-service-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-service">
												<div className="content">
													<div className="icon">
														<i className="flaticon-compensation" />
													</div>
													<h3 className="mb-40">
														<Link href="/#" className="title">
															Investment Portfolio Management
														</Link>
													</h3>
													<p className="text mb-25">
														Development and management of seen diversified investment
														portfolio.
													</p>
													<Link href="/service-details" className="btn-view style-3 has-text">
														<span className="plus"> + </span>
														<span className="read font-main-2">View More</span>
													</Link>
												</div>
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/service.jpg" data-src="/images/section/service.jpg" alt="" className="lazyload" />
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-service">
												<div className="content">
													<div className="icon">
														<i className="flaticon-compensation" />
													</div>
													<h3 className="mb-40">
														<Link href="/#" className="title">
															Investment Portfolio Management
														</Link>
													</h3>
													<p className="text mb-25">
														Development and management of seen diversified investment
														portfolio.
													</p>
													<Link href="/service-details" className="btn-view style-3 has-text">
														<span className="plus"> + </span>
														<span className="read font-main-2">View More</span>
													</Link>
												</div>
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/service.jpg" data-src="/images/section/service.jpg" alt="" className="lazyload" />
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
								<div className="direc-group">
									<div className="btn-slide slide-prev btn-service-2">
										<i className="icon-arrow-top" />
									</div>
									<div className="swiper-pagination tf-pagination style-4">
									</div>
									<div className="btn-slide slide-next btn-service-2">
										<i className="icon-arrow-top1" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<span className="item s1" />
				<span className="item s2" />
			</section>

		</>
	)
}
