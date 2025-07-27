
'use client'
import { sliderHome2 } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Hero2() {
	return (
		<>

			<div className="page-title-home-2">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<Swiper {...sliderHome2} className="swiper-container slider-home-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="slide-home-2">
											<div className="tf-overlay" />
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/page-title/page-title-home-2-1.jpg" data-src="/images/page-title/page-title-home-2-1.jpg" alt="" className="tf-animate-zoom-in-out lazyload" />
											</div>
											<div className="content-wrap">
												<div className="content">
													<p className="s-sub-title text-white mb-20 tf-trainsition-draw-left access-trainsition">
														<i className="icon-angles-right moveLeftToRight" />
														consulting agency
													</p>
													<p className="s-title text-fs-75 text-white mb-50 tf-fade-right fade-item-2">
														<span>
															Next Generation
														</span> <br />
														Corporate &amp; Business <br />
														Consulting
														<span className="ps-3">
															Agency
														</span>
													</p>
													<div className="tf-fade-bottom fade-item-3">
														<Link href="/our-service" className="tf-btn style-13">
															Explore Services
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="slide-home-2">
											<div className="tf-overlay" />
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/page-title/page-title-home-2-2.jpg" data-src="/images/page-title/page-title-home-2-2.jpg" alt="" className="tf-animate-zoom-in-out lazyload" />
											</div>
											<div className="content-wrap">
												<div className="content">
													<p className="s-sub-title text-white mb-20 tf-trainsition-draw-left access-trainsition">
														<i className="icon-angles-right moveLeftToRight" />
														consulting agency
													</p>
													<p className="s-title text-fs-75 text-white mb-50 tf-fade-right fade-item-2">
														<span>
															Next Generation
														</span> <br />
														Corporate &amp; Business <br />
														Consulting
														<span className="ps-3">
															Agency
														</span>
													</p>
													<div className="tf-fade-bottom fade-item-3">
														<Link href="/our-service" className="tf-btn style-13">
															Explore Services
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="slide-home-2">
											<div className="tf-overlay" />
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/page-title/page-title-home-2-3.jpg" data-src="/images/page-title/page-title-home-2-3.jpg" alt="" className="tf-animate-zoom-in-out lazyload" />
											</div>
											<div className="content-wrap">
												<div className="content">
													<p className="s-sub-title text-white mb-20 tf-trainsition-draw-left access-trainsition">
														<i className="icon-angles-right moveLeftToRight" />
														consulting agency
													</p>
													<p className="s-title text-fs-75 text-white mb-50 tf-fade-right fade-item-2">
														<span>
															Next Generation
														</span> <br />
														Corporate &amp; Business <br />
														Consulting
														<span className="ps-3">
															Agency
														</span>
													</p>
													<div className="tf-fade-bottom fade-item-3">
														<Link href="/our-service" className="tf-btn style-13">
															Explore Services
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="slide-home-2">
											<div className="tf-overlay" />
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/page-title/page-title-home-2-4.jpg" data-src="/images/page-title/page-title-home-2-4.jpg" alt="" className="tf-animate-zoom-in-out lazyload" />
											</div>
											<div className="content-wrap">
												<div className="content">
													<p className="s-sub-title text-white mb-20 tf-trainsition-draw-left access-trainsition">
														<i className="icon-angles-right moveLeftToRight" />
														consulting agency
													</p>
													<p className="s-title text-fs-75 text-white mb-50 tf-fade-right fade-item-2">
														<span>
															Next Generation
														</span> <br />
														Corporate &amp; Business <br />
														Consulting
														<span className="ps-3">
															Agency
														</span>
													</p>
													<div className="tf-fade-bottom fade-item-3">
														<Link href="/our-service" className="tf-btn style-13">
															Explore Services
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination tf-pagination style-3">
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
