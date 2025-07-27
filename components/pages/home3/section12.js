'use client'
import { sliderBlog } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section12() {
	return (
		<>

			<section className="s-new-blog-3 tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<div >
									<p className="s-sub-title mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										news &amp; Blog
									</p>
									<p className="s-title text-main-green-3 text-anime-wave">
										Read Our Blog
										<span>
											&amp; News
										</span>
									</p>
								</div>
								<Link href="/blog-standard" className="tf-btn style-15 text-anime-style-1">
									View All Blog
									<i className="icon-chevron-right" />
								</Link>
							</div>
							<Swiper {...sliderBlog} className="swiper-container slider-blog">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="card-blog-item style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-4.jpg" data-src="/images/blog/card-blog-item-4.jpg" alt="" className="lazyload" />
													<div className="tag-wrap">
														<p>Consulting</p>
													</div>
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li className="entry date">
															<div className="icon">
																<i className="icon-calendar-days" />
															</div>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
														<li className="entry comment">
															<div className="icon">
																<i className="icon-comments" />
															</div>
															<Link href="/#"> Comments (05) </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-25">
													The Leadership Development in Business Success
												</Link>
												<p className="text mb-25">
													Our investment philosophy is based on the balanced approach
													to risk reward
												</p>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-5.jpg" data-src="/images/blog/card-blog-item-5.jpg" alt="" className="lazyload" />
													<div className="tag-wrap">
														<p>Finance</p>
													</div>
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li className="entry date">
															<div className="icon">
																<i className="icon-calendar-days" />
															</div>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
														<li className="entry comment">
															<div className="icon">
																<i className="icon-comments" />
															</div>
															<Link href="/#"> Comments (05) </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-25">
													The Leadership Development
													in Business Success
												</Link>
												<p className="text mb-25">
													Our investment philosophy is based on the balanced approach
													to risk reward
												</p>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-6.jpg" data-src="/images/blog/card-blog-item-6.jpg" alt="" className="lazyload" />
													<div className="tag-wrap">
														<p>Consulting</p>
													</div>
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li className="entry date">
															<div className="icon">
																<i className="icon-calendar-days" />
															</div>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
														<li className="entry comment">
															<div className="icon">
																<i className="icon-comments" />
															</div>
															<Link href="/#"> Comments (05) </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-25">
													The Leadership Development in Business Success
												</Link>
												<p className="text mb-25">
													Our investment philosophy is based on the balanced approach
													to risk reward
												</p>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-5.jpg" data-src="/images/blog/card-blog-item-5.jpg" alt="" className="lazyload" />
													<div className="tag-wrap">
														<p>Finance</p>
													</div>
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li className="entry date">
															<div className="icon">
																<i className="icon-calendar-days" />
															</div>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
														<li className="entry comment">
															<div className="icon">
																<i className="icon-comments" />
															</div>
															<Link href="/#"> Comments (05) </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-25">
													The Leadership Development
													in Business Success
												</Link>
												<p className="text mb-25">
													Our investment philosophy is based on the balanced approach
													to risk reward
												</p>
												<Link href="/blog-details" className="btn-view has-text">
													<span className="plus"> + </span>
													<span className="read font-main-2">Read More</span>
												</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-2 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-6.jpg" data-src="/images/blog/card-blog-item-6.jpg" alt="" className="lazyload" />
													<div className="tag-wrap">
														<p>Consulting</p>
													</div>
												</div>
											</Link>
											<div className="content">
												<div className="entry-meta mb-20">
													<ul className="meta-list">
														<li className="entry date">
															<div className="icon">
																<i className="icon-calendar-days" />
															</div>
															<Link href="/#"> 25 Oct 2024 </Link>
														</li>
														<li className="entry comment">
															<div className="icon">
																<i className="icon-comments" />
															</div>
															<Link href="/#"> Comments (05) </Link>
														</li>
													</ul>
												</div>
												<Link href="/blog-details" className="title fw-7 mb-25">
													The Leadership Development in Business Success
												</Link>
												<p className="text mb-25">
													Our investment philosophy is based on the balanced approach
													to risk reward
												</p>
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
