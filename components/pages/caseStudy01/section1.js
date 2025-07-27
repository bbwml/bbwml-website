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

			<section className="s-case-study-01">
				<div className="tf-container w-1780">
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
											<div className="grid-layout-4">
												<div className="card-project tf-hover ">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover ">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover ">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover ">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
											<div className="grid-layout-4">
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 3 ? 'active' : ''}`} style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
											<div className="grid-layout-4">
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 4 ? 'active' : ''}`} style={{ display: `${isTab == 4 ? "block" : "none"}` }}>
											<div className="grid-layout-4">
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 5 ? 'active' : ''}`} style={{ display: `${isTab == 5 ? "block" : "none"}` }}>
											<div className="grid-layout-4">
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className={`widget-content-inner ${isTab === 6 ? 'active' : ''}`} style={{ display: `${isTab == 6 ? "block" : "none"}` }}>
											<div className="grid-layout-4">
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-2.jpg" data-src="/images/widget/card-project-1.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-1.jpg" data-src="/images/widget/card-project-2.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-4.jpg" data-src="/images/widget/card-project-3.jpg" alt="" className="lazyload" />
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-3.jpg" data-src="/images/widget/card-project-4.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-5.jpg" data-src="/images/widget/card-project-5.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Planning for Business Expansion
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-6.jpg" data-src="/images/widget/card-project-6.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Business Operational Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-7.jpg" data-src="/images/widget/card-project-7.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Financial Restructuring Planning
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-8.jpg" data-src="/images/widget/card-project-8.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Digital Transformation for Business
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-9.jpg" data-src="/images/widget/card-project-9.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Cost Reduction and Resource
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-10.jpg" data-src="/images/widget/card-project-10.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Organizational Development
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-11.jpg" data-src="/images/widget/card-project-11.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Mergers &amp; Acquisitions Integration
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
														<Link href="/#" className="btn-view">
															<span>+</span>
														</Link>
													</div>
												</div>
												<div className="card-project tf-hover">
													<div className="image-wrap">
														<div className="image hover-1">
															<Image
																width="0"
																height="0"
																sizes="100vw"
																style={{ width: "100%", height: "auto" }}
																src="/images/widget/card-project-12.jpg" data-src="/images/widget/card-project-12.jpg" alt="" className="lazyload" />
														</div>
													</div>
													<div className="content">
														<h5 className="title">
															<Link href="/#">
																Customer Experience Improvement
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
														<Link href="/#" className="btn-view">
															<span>+</span>
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
