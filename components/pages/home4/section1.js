'use client'
import { sliderFeature } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section1() {
	return (
		<>

			<section className="s-feature-4">
				<div className="tf-container w-1860">
					<div className="row">
						<div className="col-lg-12">
							<Swiper {...sliderFeature} className="swiper-container slider-feature">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="box-icon style-4 tf-hover-icon">
											<Link href="/service-details">
												<div className="image-wrap">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "100%" }}
														src="/images/widget/box-icon-s3.jpg" data-src="/images/widget/box-icon-s3.jpg" alt="" className=" lazyload" />
													<div className="tf-overlay" />
												</div>
												<div className="z-5 relative">
													<div className="icon">
														<i className="flaticon-market-analysis hover-icon-2" />
													</div>
													<div className="title fw-7 fs-22">
														Marketing Strategies
													</div>
													<p className="text">
														We focus a developing personalized
														approaches that amplify
													</p>
												</div>
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-4 tf-hover-icon">
											<Link href="/service-details">
												<div className="image-wrap">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "100%" }}
														src="/images/widget/box-project-1.jpg" data-src="/images/widget/box-project-1.jpg" alt="" className=" lazyload" />
													<div className="tf-overlay" />
												</div>
												<div className="z-5 relative">
													<div className="icon">
														<i className="flaticon-awareness hover-icon-2" />
													</div>
													<div className="title fw-7 fs-22 hover-text-main-yellow">
														Brand Development
													</div>
													<p className="text">
														Building a strong, memorable brand standing competitive market.
													</p>
												</div>
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-4 tf-hover-icon">
											<Link href="/service-details">
												<div className="image-wrap">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "100%" }}
														src="/images/widget/box-project-2.jpg" data-src="/images/widget/box-project-2.jpg" alt="" className=" lazyload" />
													<div className="tf-overlay" />
												</div>
												<div className="z-5 relative">
													<div className="icon">
														<i className="flaticon-viral-marketing hover-icon-2" />
													</div>
													<div className="title fw-7 fs-22 hover-text-main-yellow">
														Multi-Channel Marketing
													</div>
													<p className="text">
														Our multi-channel marketing and consulting services designed
													</p>
												</div>
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-4 tf-hover-icon">
											<Link href="/service-details">
												<div className="image-wrap">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "100%" }}
														src="/images/widget/box-project-3.jpg" data-src="/images/widget/box-project-3.jpg" alt="" className=" lazyload" />
													<div className="tf-overlay" />
												</div>
												<div className="z-5 relative">
													<div className="icon">
														<i className="flaticon-goal hover-icon-2" />
													</div>
													<div className="title fw-7 fs-22 hover-text-main-yellow">
														Market Research Analysis
													</div>
													<p className="text">
														Understanding to market landscape making inform business
														decisions.
													</p>
												</div>
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-4 tf-hover-icon">
											<Link href="/service-details">
												<div className="image-wrap">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "100%" }}
														src="/images/widget/accordion-type-3.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className=" lazyload" />
													<div className="tf-overlay" />
												</div>
												<div className="z-5 relative">
													<div className="icon">
														<i className="flaticon-speed hover-icon-2" />
													</div>
													<div className="title fw-7 fs-22 hover-text-main-yellow">
														Performance Tracking
													</div>
													<p className="text">
														Effective marketing driven results, and our performance tracking
													</p>
												</div>
											</Link>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
