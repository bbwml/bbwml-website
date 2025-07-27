'use client'
import { sliderBlog } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section10() {
	return (
		<>

			<section className="s-new-blog-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<div >
									<p className="s-sub-title mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										news &amp; Blog
									</p>
									<p className="s-title text-anime-wave">
										Read Our Blog
										<span>
											&amp; News
										</span>
									</p>
								</div>
								<Link href="/blog-standard" className="tf-btn style-7 text-anime-style-1">
									View All Blog
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<Swiper {...sliderBlog} className="swiper-container slider-blog">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-blog-item style-3 style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-7.jpg" data-src="/images/blog/card-blog-item-7.jpg" alt="" className=" lazyload" />
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul>
														<li>
															<p className="sub">Marketing</p>
														</li>
														<li>
															<span className="dot" />
														</li>
														<li>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-30">
													The Leadership Development in Business Success
												</Link>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-3 style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-8.jpg" data-src="/images/blog/card-blog-item-8.jpg" alt="" className=" lazyload" />
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul>
														<li>
															<p className="sub">Consulting</p>
														</li>
														<li>
															<span className="dot" />
														</li>
														<li>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-30">
													Digital Transformation in Modern Marketing Success
												</Link>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-3 style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-9.jpg" data-src="/images/blog/card-blog-item-9.jpg" alt="" className=" lazyload" />
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul>
														<li>
															<p className="sub">Leadership</p>
														</li>
														<li>
															<span className="dot" />
														</li>
														<li>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-30">
													Power of Data-Driven they Marketing Maximize ROI
												</Link>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
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
