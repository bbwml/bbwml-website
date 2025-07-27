
'use client'
import { sliderCase } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section5() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="s-case-study tf-spacing-2">
				<div className="wg-tabs style-2">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-12">
								<div className="heading ">
									<p className="s-sub-title justify-center mb-18">
										<i className="icon-angles-right moveLeftToRight" />
										latest case studies
									</p>
									<p className="s-title text-center text-main-green-3 text-anime-style-2">
										Transforming Businesses <br />
										Success
										<span>
											Stories
										</span>
									</p>
								</div>
							</div>
							<div className="col-lg-12">
								<ul className="overflow-x-auto menu-tab">
									<li className={`item ${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)}>
										<a>
											Show All
										</a>
									</li>
									<li className={`item ${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)}>
										<a>
											Business
										</a>
									</li>
									<li className={`item ${isTab === 3 ? 'active' : ''}`} onClick={() => handleTab(3)}>
										<a>
											Finance
										</a>
									</li>
									<li className={`item ${isTab === 4 ? 'active' : ''}`} onClick={() => handleTab(4)}>
										<a>
											Consulting
										</a>
									</li>
									<li className={`item ${isTab === 5 ? 'active' : ''}`} onClick={() => handleTab(5)}>
										<a>
											Planning
										</a>
									</li>
									<li className={`item ${isTab === 6 ? 'active' : ''}`} onClick={() => handleTab(6)}>
										<a>
											Corporate
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-12">
								<div className="widget-content-tab">
									<div className={`widget-content-inner ${isTab === 1 ? 'active' : ''}`} style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className={`widget-content-inner ${isTab === 3 ? 'active' : ''}`} style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className={`widget-content-inner ${isTab === 4 ? 'active' : ''}`} style={{ display: `${isTab == 4 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className={`widget-content-inner ${isTab === 5 ? 'active' : ''}`} style={{ display: `${isTab == 5 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
									</div>
									<div className={`widget-content-inner ${isTab === 6 ? 'active' : ''}`} style={{ display: `${isTab == 6 ? "block" : "none"}` }}>
										<Swiper {...sliderCase} className="swiper-container slider-case">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-1.jpg" data-src="/images/widget/card-case-1.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Leadership Development Global
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="flex justify-center" />
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-2.jpg" data-src="/images/widget/card-case-2.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Market Expansion for Startup </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-3.jpg" data-src="/images/widget/card-case-3.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Digital Financial Services </Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="card-case tf-hover overflow-hidden relative">
														<div className="image hover-5">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-case-4.jpg" data-src="/images/widget/card-case-4.jpg" alt="" className="lazyload" />
														</div>
														<div className="tf-overlay" />
														<div className="content text-center">
															<Link href="/#" className="title"> Merging Pharmaceutical Company
															</Link>
															<p className="sub-title mb-15">
																<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
																<Link href="/#">Finance</Link>
															</p>
															<p className="text mb-25 tf-fade-item fade-1">
																The startup wanted to expand into new <br />
																international markets but lacked.
															</p>
															<div className="tf-fade-item fade-2">
																<Link href="/case-details" className="tf-btn-readmore style-2">
																	View Details
																	<i className="icon-chevron-right" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
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
