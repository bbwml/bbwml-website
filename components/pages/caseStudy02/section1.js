'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
export default function Section1() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="s-case-study-02">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<p className="s-sub-title justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									latest case studies
								</p>
								<p className="s-title text-center mb-50 text-anime-wave">
									Explore Latest
									<span>
										Projects
									</span>
								</p>
								<div className="wg-tabs style-2">
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
									<div className="widget-content-tab">
										<div className={`widget-content-inner ${isTab === 1 ? 'active' : ''}`} style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover ">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover ">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover ">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover ">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 3 ? 'active' : ''}`} style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 4 ? 'active' : ''}`} style={{ display: `${isTab == 4 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 5 ? 'active' : ''}`} style={{ display: `${isTab == 5 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 6 ? 'active' : ''}`} style={{ display: `${isTab == 6 ? "block" : "none"}` }}>
											<div className="grid-layout-2">
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-4.jpg" data-src="/images/widget/card-project-s2-1.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Cost Reduction and Resource
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-3.jpg" data-src="/images/widget/card-project-s2-2.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Optimizing Business Performance
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-2.jpg" data-src="/images/widget/card-project-s2-3.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Mergers &amp; Acquisitions Integration
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-1.jpg" data-src="/images/widget/card-project-s2-4.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Development and Leadership Training
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-5.jpg" data-src="/images/widget/card-project-s2-5.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Experience Improvement Increased
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-6.jpg" data-src="/images/widget/card-project-s2-6.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Revenue Growth Through Product
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-7.jpg" data-src="/images/widget/card-project-s2-7.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Marketing Strategy Overhaul
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
												<div className="card-project style-2 tf-hover">
													<div className="tf-overlay" />
													<div className="image hover-1">
														<Image
															width="0"
															height="0"
															sizes="100vw"
															style={{ width: "100%", height: "auto" }}
															src="/images/widget/card-project-s2-8.jpg" data-src="/images/widget/card-project-s2-8.jpg" alt="" className="lazyload" />
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Corporate</Link>, <Link href="/#">Business</Link>,
															<Link href="/#">Finance</Link>
														</p>
														<Link href="/#" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Digital Transformation for Business
														</Link>
														<p className="text mb-20">
															The product launch exceeded sales projections by 25% in the
															first quarter,
															contributing significantly to overall revenue growth.
														</p>
														<Link href="/#" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
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
