
'use client'
import { sliderService } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section3() {
	return (
		<>

			<section className="s-service-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="s-heading">
								<p className="s-sub-title text-white justify-center mb-18">
									<i className="icon-angles-right moveLeftToRight" />
									services we provide
								</p>
								<p className="s-title text-white-yellow text-center text-anime-wave">
									Leadership Development &amp; Executive <br />
									Coaching Market Expansion &amp; Growth <br />
									Strategies
									<span>
										and Solutions
									</span>
								</p>
							</div>
							<Swiper {...sliderService} className="swiper-container slider-service">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0s">
											<h5 className="title mb-10">
												<Link href="/service-details">
													Strategic Planning
												</Link>
											</h5>
											<p className="text mb-35">
												Assisting organizations defining <br />
												long-term goals growth.
											</p>
											<div className="image hover-1">
												<Link href="/service-details">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-service-1.jpg" data-src="/images/widget/card-service-1.jpg" alt="" className=" lazyload" />
												</Link>
											</div>
											<Link href="/service-details" className="tf-btn-readmore">Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.1s">
											<h5 className="title mb-10">
												<Link href="/service-details">
													Financial Advisory
												</Link>
											</h5>
											<p className="text mb-35">
												Management, capital allocation <br />
												financial restructuring.
											</p>
											<div className="image hover-1">
												<Link href="/service-details">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-service-2.jpg" data-src="/images/widget/card-service-2.jpg" alt="" className=" lazyload" />
												</Link>
											</div>
											<Link href="/service-details" className="tf-btn-readmore">Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.2s">
											<h5 className="title mb-10">
												<Link href="/service-details">
													Risk Management
												</Link>
											</h5>
											<p className="text mb-35">
												Helping organizations identify, <br /> assess, and mitigate risks while.
											</p>
											<div className="image hover-1">
												<Link href="/service-details">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-service-3.jpg" data-src="/images/widget/card-service-3.jpg" alt="" className=" lazyload" />
												</Link>
											</div>
											<Link href="/service-details" className="tf-btn-readmore">Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-service text-center tf-hover wow fadeInUp" data-wow-delay="0.3s">
											<h5 className="title mb-10">
												<Link href="/service-details">
													Leadership Develop
												</Link>
											</h5>
											<p className="text mb-35">
												Executive coaching, leadership <br />
												training and management
											</p>
											<div className="image hover-1">
												<Link href="/service-details">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-service-4.jpg" data-src="/images/widget/card-service-4.jpg" alt="" className=" lazyload" />
												</Link>
											</div>
											<Link href="/service-details" className="tf-btn-readmore">Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
								</div>
								<div className="flex justify-center">
									<div className="tf-pagination style-3 service-pagination swiper-pagination" />
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
