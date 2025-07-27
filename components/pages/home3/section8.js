'use client'
import { sliderOurAdvisor } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section8() {
	return (
		<>

			<section className="s-our-advisor tf-spacing-6">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-50">
								<div >
									<p className="s-sub-title mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										meet our advisors
									</p>
									<p className="s-title text-main-green-3 text-anime-wave">
										Dedicated Team to
										<span>
											Guiding
										</span>
									</p>
								</div>
								<Link href="/#" className="tf-btn style-14 text-anime-style-1">
									View all Advisors
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<Swiper {...sliderOurAdvisor} className="swiper-container mb-50 slider-our-advisor">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-guide tf-hover">
											<div className="image hover-1 hover-14">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/avatar/team-guide-1.jpg" data-src="/images/avatar/team-guide-1.jpg" alt="" className=" lazyload" />
											</div>
											<div className="content">
												<div className="icon style-circle">
													<span> + </span>
												</div>
												<ul className="social-list w-h-45 style-4">
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
												<Link href="/team-details" className="name"> Johnny S. Patterson </Link>
												<p className="duty">Business Consultant</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-guide tf-hover">
											<div className="image hover-1 hover-14">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/avatar/team-guide-2.jpg" data-src="/images/avatar/team-guide-2.jpg" alt="" className=" lazyload" />
											</div>
											<div className="content">
												<div className="icon style-circle">
													<span> + </span>
												</div>
												<ul className="social-list w-h-45 style-4">
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
												<Link href="/team-details" className="name"> Andrew L. Lindsay </Link>
												<p className="duty">Finance Consultant</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-guide tf-hover">
											<div className="image hover-1 hover-14">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/avatar/team-guide-3.jpg" data-src="/images/avatar/team-guide-3.jpg" alt="" className=" lazyload" />
											</div>
											<div className="content">
												<div className="icon style-circle">
													<span> + </span>
												</div>
												<ul className="social-list w-h-45 style-4">
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
												<Link href="/team-details" className="name"> Donald G. Carson </Link>
												<p className="duty">Insurance Consultant</p>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-guide tf-hover">
											<div className="image hover-1 hover-14">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/avatar/team-guide-4.jpg" data-src="/images/avatar/team-guide-4.jpg" alt="" className=" lazyload" />
											</div>
											<div className="content">
												<div className="icon style-circle">
													<span> + </span>
												</div>
												<ul className="social-list w-h-45 style-4">
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
												<Link href="/team-details" className="name"> Chad V. Thompson </Link>
												<p className="duty">TAX Consultant</p>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="bot">
								<p className="font-main-2">
									Need For Free Consultation In Financial Solutions?
								</p>
								<Link href="/contact">
									Get A Quote
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
