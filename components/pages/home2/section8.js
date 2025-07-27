'use client'
import { sliderBlog } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section8() {
	return (
		<>

			<section className="s-new-blog-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title justify-center mb-17">
									<i className="icon-angles-right moveLeftToRight" />
									news &amp; Blog
								</p>
								<p className="s-title text-main-green-3 text-center text-anime-wave">
									Future-Proof Your Business with <br />
									Strategic
									<span>
										Consulting
									</span>
								</p>
							</div>
						</div>
						<div className="col-lg-12">
							<Swiper {...sliderBlog} className="swiper-container slider-blog overflow-hidden">
								<div className="swiper-wrapper ">
									<SwiperSlide>
										<div className="card-blog-item style-4 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-10.jpg" data-src="/images/blog/card-blog-item-10.jpg" alt="" className="lazyload" />
												</div>
											</Link>
											<div className="entry-meta">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Business </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<div className="mb-20">
												<Link href="/blog-details" className="title fw-7 mb-10">
													Power Leadership Development in Business Success
												</Link>
											</div>
											<Link href="/#" className="date">
												<i className="icon-calendar-days" />
												25 September 2024
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-4 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-11.jpg" data-src="/images/blog/card-blog-item-11.jpg" alt="" className="lazyload" />
												</div>
											</Link>
											<div className="entry-meta">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Business </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<div className="mb-20">
												<Link href="/blog-details" className="title fw-7 mb-10">
													The Key Benefits of Corporate Consulting for Business
												</Link>
											</div>
											<Link href="/#" className="date">
												<i className="icon-calendar-days" />
												25 September 2024
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-4 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-12.jpg" data-src="/images/blog/card-blog-item-12.jpg" alt="" className="lazyload" />
												</div>
											</Link>
											<div className="entry-meta">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Business </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<div className="mb-20">
												<Link href="/blog-details" className="title fw-7 mb-10">
													Role of Corporate Consulting in Achieving Your Goals
												</Link>
											</div>
											<Link href="/#" className="date">
												<i className="icon-calendar-days" />
												25 September 2024
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-blog-item style-4 tf-hover">
											<Link href="/blog-details">
												<div className="entry-image mb-30 hover-1 hover-14">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/card-blog-item-10.jpg" data-src="/images/blog/card-blog-item-10.jpg" alt="" className="lazyload" />
												</div>
											</Link>
											<div className="entry-meta">
												<ul className="meta-list">
													<li >
														<Link href="/#"> Business </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Admin </Link>
													</li>
													<li>
														<span className="line" />
													</li>
													<li >
														<Link href="/#"> Comments (05) </Link>
													</li>
												</ul>
											</div>
											<div className="mb-20">
												<Link href="/#" className="title fw-7 mb-10">
													Power Leadership Development in Business Success
												</Link>
											</div>
											<Link href="/#" className="date">
												<i className="icon-calendar-days" />
												25 September 2024
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
