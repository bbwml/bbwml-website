
'use client'
import { sliderCase2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section7() {
	return (
		<>

			<section className="s-case-study-2 tf-spacing-1">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									latest case studies
								</p>
								<p className="s-title text-main-green-3 text-center text-anime-style-2">
									Explore Latest
									<span>
										Projects
									</span>
								</p>
							</div>
							<Swiper {...sliderCase2} className="swiper-container slider-case-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-project tf-hover">
											<div className="image-wrap">
												<div className="image hover-1">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className=" lazyload" />
												</div>
											</div>
											<div className="content">
												<h5 className="title">
													<Link href="/#">
														Leadership Development Global
													</Link>
												</h5>
												<p className="tag-text-wrap style-2 mb-25">
													<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
													<Link href="/#">Finance</Link>
												</p>
												<p className="text mb-25">
													The startup wanted to expand into new
													international markets but lacked.
												</p>
												<Link href="/case-details" className="btn-view">
													<span>+</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project tf-hover">
											<div className="image-wrap">
												<div className="image hover-1">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className=" lazyload" />
												</div>
											</div>
											<div className="content">
												<h5 className="title">
													<Link href="/#">
														Market Expansion for Startup
													</Link>
												</h5>
												<p className="tag-text-wrap style-2 mb-25">
													<Link href="/#">Startup</Link>, <Link href="/#">Business</Link>,
													<Link href="/#">Finance</Link>
												</p>
												<p className="text mb-25">
													The startup wanted to expand into new
													international markets but lacked.
												</p>
												<Link href="/case-details" className="btn-view">
													<span>+</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project tf-hover">
											<div className="image-wrap">
												<div className="image hover-1">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className=" lazyload" />
												</div>
											</div>
											<div className="content">
												<h5 className="title">
													<Link href="/#">
														Digital Financial Services
													</Link>
												</h5>
												<p className="tag-text-wrap style-2 mb-25">
													<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
													<Link href="/#">Finance</Link>
												</p>
												<p className="text mb-25">
													The startup wanted to expand into new
													international markets but lacked.
												</p>
												<Link href="/case-details" className="btn-view">
													<span>+</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-project tf-hover">
											<div className="image-wrap">
												<div className="image hover-1">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className=" lazyload" />
												</div>
											</div>
											<div className="content">
												<h5 className="title">
													<Link href="/#" className="text-clamp-2">
														Merging Pharmaceutical Company
													</Link>
												</h5>
												<p className="tag-text-wrap style-2 mb-25">
													<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
													<Link href="/#">Finance</Link>
												</p>
												<p className="text mb-25">
													The startup wanted to expand into new
													international markets but lacked.
												</p>
												<Link href="/case-details" className="btn-view">
													<span>+</span>
												</Link>
											</div>
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
