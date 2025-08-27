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
									insights & research
								</p>
								<p className="s-title text-center mb-30 text-anime-wave">
									Navigate Business
									<span>
										Complexities
									</span>
								</p>
								<p className="text-center mb-50" style={{maxWidth: '800px', margin: '0 auto 50px'}}>
									Navigate the complexities of the modern business and financial landscape with confidence. At B&B, we believe that knowledge is the cornerstone of growth and preservation. This resource hub provides actionable insights, analysis, and perspectives on wealth management, business strategy, and economic trends—helping you make informed decisions for a more prosperous future.
								</p>
								
								{/* Featured Article */}
								<div className="featured-article mb-60">
									<div className="card-project style-2 tf-hover featured">
										<div className="tf-overlay" />
										<div className="image hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/widget/card-project-s2-1.jpg" 
												alt="" 
												className="lazyload" 
											/>
										</div>
										<div className="content">
											<p className="tag-text-wrap">
												<span className="featured-badge">Featured Article</span>
											</p>
											<Link href="/insights/economic-outlook-2024" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
												Q4 2024 Economic Outlook: Key Sectors for Growth in Nigeria
											</Link>
											<p className="text mb-20">
												Our analysts highlight the sectors showing the most promising growth trajectories and investment opportunities for the coming year, based on current macroeconomic indicators.
											</p>
											<div className="meta-info mb-20">
												<span className="format">Whitepaper/Report</span> • <span className="read-time">12 min read</span>
											</div>
											<Link href="/insights/economic-outlook-2024" className="tf-btn-readmore style-4">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</div>
								</div>
								

								<div className="wg-tabs style-2">
										<ul className="overflow-x-auto menu-tab">
										<li className={`item ${isTab === 1 ? 'active' : ''}`} onClick={() => handleTab(1)}>
											<a>
												All Articles
											</a>
										</li>
										<li className={`item ${isTab === 2 ? 'active' : ''}`} onClick={() => handleTab(2)}>
											<a>
												Wealth Management
											</a>
										</li>
										<li className={`item ${isTab === 3 ? 'active' : ''}`} onClick={() => handleTab(3)}>
											<a>
												Business Strategy
											</a>
										</li>
										<li className={`item ${isTab === 4 ? 'active' : ''}`} onClick={() => handleTab(4)}>
											<a>
												Market Trends
											</a>
										</li>
										
									</ul>
								
									
									<div className="widget-content-tab">
										{/* All Articles Tab */}
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
															src="/images/widget/card-project-s2-3.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Wealth Management</Link>
														</p>
														<Link href="/insights/asset-portfolio-diversification" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															5 Strategic Approaches to Diversify Your Asset Portfolio
														</Link>
														<p className="text mb-20">
															Diversification is more than a buzzword; it's a critical defense strategy. We break down practical asset allocation models for Nigerian investors.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Blog Post</span> • <span className="read-time">5 min read</span>
														</div>
														<Link href="/insights/asset-portfolio-diversification" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-3.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Business Strategy</Link>
														</p>
														<Link href="/insights/family-business-transformation" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Beyond Survival: Transitioning Your Family Business
														</Link>
														<p className="text mb-20">
															Many family-owned businesses in Nigeria excel operationally but struggle with long-term strategy. This guide outlines key steps for legacy and growth.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Blog Post</span> • <span className="read-time">7 min read</span>
														</div>
														<Link href="/insights/family-business-transformation" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-4.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Regulatory Update</Link>
														</p>
														<Link href="/insights/cbn-sme-guidelines" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Understanding the New CBN Guidelines for SMEs
														</Link>
														<p className="text mb-20">
															A clear breakdown of the latest Central Bank of Nigeria directives and how they impact access to credit, foreign exchange, and business operations.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Article</span> • <span className="read-time">4 min read</span>
														</div>
														<Link href="/insights/cbn-sme-guidelines" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-5.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Investor Education</Link>
														</p>
														<Link href="/insights/long-term-returns-behaviors" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															The 7 Behaviors That Drive Long-Term Returns
														</Link>
														<p className="text mb-20">
															Actionable insights on investor behaviors that consistently deliver superior long-term investment performance across different market cycles.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Blog Post</span> • <span className="read-time">8 min read</span>
														</div>
														<Link href="/insights/long-term-returns-behaviors" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-6.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Private Markets</Link>
														</p>
														<Link href="/insights/private-credit-guide" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Private Credit 101: Risks, Rewards, Realities
														</Link>
														<p className="text mb-20">
															A comprehensive guide to understanding private credit markets, their role in portfolios, and key considerations for Nigerian investors.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Guide</span> • <span className="read-time">15 min read</span>
														</div>
														<Link href="/insights/private-credit-guide" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>

										{/* Wealth Management Tab */}
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
															src="/images/widget/card-project-s2-2.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Wealth Management</Link>
														</p>
														<Link href="/insights/asset-portfolio-diversification" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															5 Strategic Approaches to Diversify Your Asset Portfolio
														</Link>
														<p className="text mb-20">
															Diversification is more than a buzzword; it's a critical defense strategy. We break down practical asset allocation models for Nigerian investors.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Blog Post</span> • <span className="read-time">5 min read</span>
														</div>
														<Link href="/insights/asset-portfolio-diversification" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-7.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Retirement Planning</Link>
														</p>
														<Link href="/insights/inflation-proofing-retirement" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Inflation-Proofing Your Retirement Income
														</Link>
														<p className="text mb-20">
															Strategies to protect your retirement income from inflation's erosive effects, with practical solutions for Nigerian retirees and pre-retirees.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Guide</span> • <span className="read-time">10 min read</span>
														</div>
														<Link href="/insights/inflation-proofing-retirement" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>

										{/* Business Strategy Tab */}
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
															src="/images/widget/card-project-s2-3.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Business Strategy</Link>
														</p>
														<Link href="/insights/family-business-transformation" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Beyond Survival: Transitioning Your Family Business
														</Link>
														<p className="text mb-20">
															Many family-owned businesses in Nigeria excel operationally but struggle with long-term strategy. This guide outlines key steps for legacy and growth.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Blog Post</span> • <span className="read-time">7 min read</span>
														</div>
														<Link href="/insights/family-business-transformation" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-8.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Founders' Wealth</Link>
														</p>
														<Link href="/insights/windfalls-framework-founders" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															What to Do with Windfalls: A Framework for Founders
														</Link>
														<p className="text mb-20">
															Strategic approaches for founders and entrepreneurs managing sudden wealth events, from exits to major fundraising rounds.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Framework</span> • <span className="read-time">12 min read</span>
														</div>
														<Link href="/insights/windfalls-framework-founders" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>

										{/* Market Trends Tab */}
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
															src="/images/widget/card-project-s2-1.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Market Trends</Link>
														</p>
														<Link href="/insights/economic-outlook-2024" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															Q4 2024 Economic Outlook: Key Sectors for Growth
														</Link>
														<p className="text mb-20">
															Our analysts highlight the sectors showing the most promising growth trajectories and investment opportunities for the coming year.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Whitepaper</span> • <span className="read-time">12 min read</span>
														</div>
														<Link href="/insights/economic-outlook-2024" className="tf-btn-readmore style-4">
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
															src="/images/widget/card-project-s2-6.jpg" 
															alt="" 
															className="lazyload" 
														/>
													</div>
													<div className="content">
														<p className="tag-text-wrap">
															<Link href="/#">Risk Assessment</Link>
														</p>
														<Link href="/insights/risk-volatility-vs-loss" className="title font-main-2 fw-7 hover-text-main-yellow mb-25">
															How to Think About Risk: Volatility vs. Permanent Loss
														</Link>
														<p className="text mb-20">
															Understanding the critical difference between market volatility and permanent capital loss to make better investment decisions.
														</p>
														<div className="meta-info mb-20">
															<span className="format">Analysis</span> • <span className="read-time">9 min read</span>
														</div>
														<Link href="/insights/risk-volatility-vs-loss" className="tf-btn-readmore style-4">
															Read More
															<i className="icon-chevron-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Call to Action Section */}
								<div className="cta-section" style={{marginTop: '80px', padding: '60px 40px', backgroundColor: '#f8f9fa', borderRadius: '10px', textAlign: 'center'}}>
									<h3 className="font-main-2 fw-7 mb-25">Turn Insight into Action</h3>
									<p className="text mb-40" style={{maxWidth: '600px', margin: '0 auto 40px'}}>
										The strategies and ideas we share are just the beginning. Our consultants are ready to provide personalized guidance tailored to your unique business and wealth goals.
									</p>
									<Link href="/contact" className="tf-btn text-anime-style-1">
										Schedule a Confidential Consultation Today
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}