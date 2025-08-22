'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Section4() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<section className="s-working tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									working process
								</p>
								<p className="s-title mb-70 text-center text-anime-wave">
									From Discovery to Delivery <br />
									Our Investment
									<span>
										Process
									</span>
								</p>
								<div className="tf-accordion-type-3 accordion" id="accordionExample">
									<div className={`accordion-item ${isAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordion(1)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<span className="step">
													Step 01
												</span>
												<span>
													Discover
												</span>
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Discover
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													Clarify your goals, risk profile, and timeline in minutes.
													<br />
													We conduct comprehensive assessments to understand your unique situation.
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Goals & Risk Assessment
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Financial Situation Analysis
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/widget/card-service-10.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordion(2)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<span className="step">
													Step 02
												</span>
												<span>
													Design
												</span>
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Design
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													We build a diversified portfolio across asset classes with tax efficiency in mind.
													<br />
													Custom allocation strategies aligned with your specific objectives.
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Multi-Asset Portfolio Construction
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Tax-Efficient Structuring
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/widget/card-service-9.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordion(3)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<span className="step">
													Step 03
												</span>
												<span>
													Deliver
												</span>
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Deliver
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													Ongoing monitoring, rebalancing, and advisor check-ins—plus a simple dashboard.
													<br />
													Continuous oversight to keep your portfolio on track.
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Real-Time Portfolio Monitoring
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Regular Advisor Check-ins
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/widget/card-service-8.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item last ${isAccordion === 4 ? 'active' : ''}`} onClick={() => handleAccordion(4)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 4 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												<span className="step">
													Step 04
												</span>
												<span>
													Optimize &amp; Grow
												</span>
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title">
													Optimize &amp; Grow
												</p>
												<p className="text mb-25 tf-fade-item fade-1">
													Continuous optimization and strategic adjustments to maximize your wealth potential.
													<br />
													Performance reviews and strategic refinements for long-term success.
												</p>
												<ul className="benefit-list">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Performance Analysis & Reporting
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Strategic Portfolio Adjustments
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/widget/card-service-7.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
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