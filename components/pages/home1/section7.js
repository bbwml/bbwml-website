'use client'
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import { useState } from 'react'
export default function Section7() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<section className="s-working-2 tf-spacing-3">
				<div className="tf-container">
					<div className="row" id="tabs">
						<div className="col-lg-12">
							<div className="content text-center mb-70">
								<p className="s-sub-title mb-17  justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									working process
								</p>
								<p className="s-title   letter-space-0 text-anime-wave">
									From Concept to Execution <br />
									Our Consulting {" "}
									<span>Process</span>
								</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="pb-100">
								<div className="image tf-hover">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/page-title/our-services.jpg" 
											data-src="/images/section/one.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-right">
								<p className="text fw-5 fs-20 mb-50">
									Skills are the foundation of success in any profession, shaping how we
									approach
									challenges and achieve our goals. technical expertise, communication,
									problem-solving
								</p>
								<div className="bot">
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-93" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5"><CounterUp count={93} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div>
										</div>
										<p className="sub-counter">
											Business <br />
											Development
										</p>
									</div>
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-86" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5-2"><CounterUp count={86} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div> {/* Vòng tròn nền */}
										</div>
										<p className="sub-counter">
											Marketing and <br />
											Research
										</p>
									</div>
									<div className="counter-wrap style-2">
										<div className="relative mb-20">
											<div className="circle-container">
												<svg className="circle" width={130} height={130} viewBox="0 0 130 130">
													<circle cx={65} cy={65} r="62.5" stroke="transparent" strokeWidth={5} fill="none" />
													<circle className="progress-circle-79" cx={65} cy={65} r="62.5" strokeWidth={5} fill="none" />
												</svg>
												<div className="wg-counter style-5">
													<div className="odometer style-5-3"><CounterUp count={79} /></div>
													<span className="sub-odo">%</span>
												</div>
											</div>
										</div>
										<p className="sub-counter">
											Consulting and <br />
											Financial plan
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content-left tab-links">
								<div className="tf-accordion accordion" id="accordionExample2">
									<div className="accordion-item">
										<h2 className="accordion-header item-link current" data-tab="tabs-1" onClick={() => handleAccordion(1)}>
											<button className={isAccordion == 1 ? "accordion-button text-black" : "accordion-button collapsed text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
												What is business consulting?
											</button>
										</h2>
										<div id="collapseOne1" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where
												we assess your business needs and goals, we develop a
												customized strategy, followed by implementation and
												continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header item-link" data-tab="tabs-2" onClick={() => handleAccordion(2)}>
											<button className={isAccordion == 2 ? "accordion-button text-black" : "accordion-button collapsed text-black"}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
												How does the consulting process work?
											</button>
										</h2>
										<div id="collapseTwo1" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where
												we assess your business needs and goals, we develop a
												customized strategy, followed by implementation and
												continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header item-link" data-tab="tabs-3" onClick={() => handleAccordion(3)}>
											<button className={isAccordion == 3 ? "accordion-button text-black" : "accordion-button collapsed text-black"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseThree1" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where
												we assess your business needs and goals, we develop a
												customized strategy, followed by implementation and
												continuous monitoring.
											</div>
										</div>
									</div>
									<div className="accordion-item item-last">
										<h2 className="accordion-header item-link" data-tab="tabs-4" onClick={() => handleAccordion(4)}>
											<button className={isAccordion == 4 ? "accordion-button text-black" : "accordion-button collapsed text-black"}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
												How much do your consulting services cost?
											</button>
										</h2>
										<div id="collapseFour1" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Our process typically starts with a discovery phase, where
												we assess your business needs and goals, we develop a
												customized strategy, followed by implementation and
												continuous monitoring.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div >
								<div className="image tf-hover tab-content current" id="tabs-1">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/one.jpg" data-src="/images/section/working-s2-2.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-2">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/two.jpg" data-src="/images/section/working-s2-1.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-3">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/three.jpg" data-src="/images/section/working-s2-2.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image tf-hover tab-content" id="tabs-4">
									<div className="hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/four.jpg" data-src="/images/section/working-s2-1.jpg" alt="" className="lazyload" />
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
