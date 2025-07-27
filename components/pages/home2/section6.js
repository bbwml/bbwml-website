
'use client'
import { sliderFeedback } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section6() {
	return (
		<>

			<section className="s-feedback tf-spacing-1">
				<div className="tf-overlay" />
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="heading">
									<p className="s-sub-title mb-18 text-white">
										<i className="icon-angles-right moveLeftToRight" />
										customer feedback
									</p>
									<p className="s-title text-white-yellow text-anime-wave">
										1380+ Customer
										<span>
											Say Us
										</span>
									</p>
								</div>
								<div className="btn-group">
									<div className="btn-slider-feedback btn-slide slide-prev style-2">
										<i className="icon-arrow-left" />
									</div>
									<div className=" btn-slider-feedback btn-slide slide-next style-2">
										<i className="icon-arrow-right" />
									</div>
								</div>
							</div>
							<Swiper {...sliderFeedback} className="swiper-container slider-feedback">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="wg-testimonial style-2 tf-hover">
											<div className="top">
												<div className="author-wrap">
													<div className="avatar hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/avatar/testimonial-author-1.jpg" alt="" />
													</div>
													<div className="infor">
														<Link href="/#" className="name fw-7"> Hyman A. Palacios </Link>
														<p className="duty">CEO &amp; Founder</p>
													</div>
												</div>
												<div className="icon style-circle">
													<i className="icon-quote-left-saying-speech" />
												</div>
											</div>
											<p className="say font-main-2">
												"Partnering with Saylo transformed our business. Their strategic
												insights and tailored solutions helped us streamline operations increase
												expertise."
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-testimonial style-2 tf-hover">
											<div className="top">
												<div className="author-wrap">
													<div className="avatar hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/avatar/testimonial-author-2.jpg" alt="" />
													</div>
													<div className="infor">
														<Link href="/#" className="name fw-7"> Marlin C. Stoughton </Link>
														<p className="duty">COO, Retail Corporation</p>
													</div>
												</div>
												<div className="icon style-circle">
													<i className="icon-quote-left-saying-speech" />
												</div>
											</div>
											<p className="say font-main-2">
												"We approached help with leadership development, and the results have
												been remarkable. Their coaching and training programs have performance."
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-testimonial style-2 tf-hover">
											<div className="top">
												<div className="author-wrap">
													<div className="avatar hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/avatar/testimonial-author-1.jpg" alt="" />
													</div>
													<div className="infor">
														<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
														<p className="duty">CEO of Tech Solutions</p>
													</div>
												</div>
												<div className="icon style-circle">
													<i className="icon-quote-left-saying-speech" />
												</div>
											</div>
											<p className="say font-main-2">
												"Partnering with Saylo transformed our business. Their
												strategic insights and tailored solutions streamline."
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-testimonial style-2 tf-hover">
											<div className="top">
												<div className="author-wrap">
													<div className="avatar hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/avatar/testimonial-author-2.jpg" alt="" />
													</div>
													<div className="infor">
														<Link href="/#" className="name fw-7"> Marlin C. Stoughton </Link>
														<p className="duty">COO, Retail Corporation</p>
													</div>
												</div>
												<div className="icon style-circle">
													<i className="icon-quote-left-saying-speech" />
												</div>
											</div>
											<p className="say font-main-2">
												"We approached help with leadership development, and the results have
												been remarkable. Their coaching and training programs have performance."
											</p>
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
