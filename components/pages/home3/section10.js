
'use client'
import { sliderFeedback2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section10() {
	return (
		<>

			<section className="s-feedback-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									customer feedback
								</p>
								<p className="s-title text-main-green-3 text-center text-anime-style-2">
									1380+ Customer
									<span>
										Say Us
									</span>
								</p>
							</div>
							<Swiper {...sliderFeedback2} className="swiper-container slider-feedback-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="wg-testimonial style-3">
											<div className="content-left">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Partnering with Saylo transformed our business. Their
													strategic insights and tailored solutions streamline."
												</p>
												<Link href="/#" className="name fw-7"> Hyman A. Palacios </Link>
												<p className="duty">CEO &amp; Founder</p>
											</div>
											<div className="image-wrap">
												<span className="item-circle" />
												<img
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/item/customer-say-1.png" data-src="/images/item/customer-say-1.png" alt="" className=" lazyload" />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-testimonial style-3">
											<div className="content-left">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Working was a game-changer for our business understanding market
													trends and strategic results!"
												</p>
												<Link href="/#" className="name fw-7"> Matthew A. Martelli </Link>
												<p className="duty">Web Designer</p>
											</div>
											<div className="image-wrap">
												<span className="item-circle" />
												<img
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/item/customer-say-2.png" data-src="/images/item/customer-say-2.png" alt="" className=" lazyload" />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-testimonial style-3">
											<div className="content-left">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Partnering with Saylo transformed our business. Their
													strategic insights and tailored solutions streamline."
												</p>
												<Link href="/#" className="name fw-7"> Hyman A. Palacios </Link>
												<p className="duty">CEO &amp; Founder</p>
											</div>
											<div className="image-wrap">
												<span className="item-circle" />
												<img
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/item/customer-say-1.png" data-src="/images/item/customer-say-1.png" alt="" className=" lazyload" />
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="direc-group">
									<div className="btn-slide slide-prev btn-feedback-2 style-3">
										<i className="icon-chevron-right1" />
									</div>
									<div className="swiper-pagination tf-pagination style-5" />
									<div className="btn-slide slide-next btn-feedback-2 style-3">
										<i className="icon-chevron-right" />
									</div>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
