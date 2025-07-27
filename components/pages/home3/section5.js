'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
export default function Section5() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>

			<section className="s-our-saylo tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="heading">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									explore our saylo
								</p>
								<p className="s-title text-main-green-3 text-anime-wave">
									Discover the Features that Make Us Your
									<span>
										Financial Partner
									</span>
								</p>
								<p className="text">
									For financial advisors or consulting firms, advanced technology allows for
									real-time
									tracking, in-depth <br /> data analysis, and the ability to offer more personalized,
									precise solutions to clients.
								</p>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="wg-tabs">
								<ul className="overflow-x-auto menu-tab">
									<li className={`item ${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)}>
										<a>
											<span>
												Retirement Solutions
											</span>
										</a>
									</li>
									<li className={`item ${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)}>
										<a>
											<span>
												Strategic &amp; Financial Solutions
											</span>
										</a>
									</li>
									<li className={`item ${isTab === 3 ? 'active' : ''}`} onClick={() => handleTab(3)}>
										<a>
											<span>
												TAX, VAT and Investment Planning
											</span>
										</a>
									</li>
								</ul>
								<div className="widget-content-tab">
									<div className={`widget-content-inner ${isTab === 1 ? 'active' : ''}`} style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
										<div className="wg-our-saylo">
											<div className="image-left ">
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/our-saylo.jpg" data-src="/images/section/our-saylo.jpg" alt="" className="lazyload tf-animate-2" />
												</div>
												<div className="wg-graph default rellax" data-rellax-speed="-0.2">
													<p className="number">
														$1250
													</p>
													<p className="text">
														Your total saving so far
													</p>
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/item/graph.jpg" alt="" />
												</div>
											</div>
											<div className="content-right">
												<h3 className="title mb-20">
													Retire with Confidence Customized <br /> Planning for Your Golden
													Years
												</h3>
												<p className="text">
													Retirement solutions refer to a range of financial strategies and
													services designed to help individuals plan, save, and manage their
													finances for a comfortable and secure retirement.
												</p>
												<ul className="list">
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Expertise Across Industries
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Customized Strategies
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Proven Track Record
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Problem-Solving
														</p>
													</li>
												</ul>
												<Link href="/about-us" className="tf-btn style-15 text-anime-style-1">
													Learn More Features
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</div>
									</div>
									<div className={`widget-content-inner ${isTab === 2 ? 'active' : ''}`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
										<div className="wg-our-saylo">
											<div className="image-left">
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/our-saylo.jpg" data-src="/images/section/our-saylo.jpg" alt="" className="lazyload" />
												</div>
												<div className="wg-graph">
													<p className="number">
														$1250
													</p>
													<p className="text">
														Your total saving so far
													</p>
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/item/graph.jpg" alt="" />
												</div>
											</div>
											<div className="content-right">
												<h3 className="title mb-20">
													Retire with Confidence Customized <br /> Planning for Your Golden
													Years
												</h3>
												<p className="text mb-40">
													Retirement solutions refer to a range of financial strategies and
													services designed to help individuals plan, save, and manage their
													finances for a comfortable and secure retirement.
												</p>
												<ul className="list mb-50">
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Expertise Across Industries
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Customized Strategies
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Proven Track Record
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Innovative Problem-Solving
														</p>
													</li>
												</ul>
												<Link href="/about-us" className="tf-btn style-15">
													Learn More Features
													<i className="icon-chevron-right" />
												</Link>
											</div>
										</div>
									</div>
									<div className={`widget-content-inner ${isTab === 3 ? 'active' : ''}`} style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
										<div className="wg-our-saylo">
											<div className="image-left">
												<div className="image">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/section/our-saylo.jpg" data-src="/images/section/our-saylo.jpg" alt="" className="lazyload" />
												</div>
												<div className="wg-graph">
													<p className="number">
														$1250
													</p>
													<p className="text">
														Your total saving so far
													</p>
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/item/graph.jpg" alt="" />
												</div>
											</div>
											<div className="content-right">
												<h3 className="title mb-20">
													Retire with Confidence Customized <br /> Planning for Your Golden
													Years
												</h3>
												<p className="text mb-40">
													Retirement solutions refer to a range of financial strategies and
													services designed to help individuals plan, save, and manage their
													finances for a comfortable and secure retirement.
												</p>
												<ul className="list mb-50">
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Expertise Across Industries
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Customized Strategies
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Proven Track Record
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check-2" />
														</div>
														<p>
															Innovative Problem-Solving
														</p>
													</li>
												</ul>
												<Link href="/about-us" className="tf-btn style-15">
													Learn More Features
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
			</section>

		</>
	)
}
