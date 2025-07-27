
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-feature-2">
				<div className="tf-container w-1860">
					<div className="row">
						<div className="col-lg-6">
							<div className="content s1">
								<div className="our-customer">
									<div className="top mb-20">
										<ul className="image-customer-list">
											<li>
												<div className="img-avt">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/avatar/testimonial-author-1.jpg" alt="" />
												</div>
											</li>
											<li>
												<div className="img-avt">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/avatar/customer-1.jpg" alt="" />
												</div>
											</li>
											<li>
												<div className="img-avt">
													<Image
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/avatar/customer-2.jpg" alt="" />
												</div>
											</li>
										</ul>
										<Link href="/#" className="fw-7">
											Our Customers
										</Link>
									</div>
									<p className="text text-white">
										A global customer refers to an individual <br />
										or business entity that operates.
									</p>
								</div>
								<span className="line style-stand" />
								<div className="percent-customer">
									<div className="wg-counter style-6 text-white">
										<div className="odometer style-6"><CounterUp count={98} /></div>
										<span className="sub-odo">%</span>
									</div>
									<p className="text text-white">
										Customers are Satisfied with the Services
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="content s2">
								<div className="title">
									<div className="icon type-left">
										<svg width={171} height={16} viewBox="0 0 171 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.292892 8.70711C-0.0976257 8.31658 -0.0976257 7.68342 0.292892 7.29289L6.65686 0.928932C7.04738 0.538408 7.68054 0.538408 8.07108 0.928932C8.46159 1.31946 8.46159 1.95262 8.07108 2.34315L2.41422 8L8.07108 13.6569C8.46159 14.0474 8.46159 14.6805 8.07108 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292892 8.70711ZM171 9H1V7H171V9Z" fill="url(#paint0_linear_2155_349)" />
											<defs>
												<linearGradient id="paint0_linear_2155_349" x1={171} y1="8.5" x2={1} y2="8.5" gradientUnits="userSpaceOnUse">
													<stop stopColor="white" offset={0} stopOpacity={0} />
													<stop offset={1} stopColor="white" stopOpacity="0.2" />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<h5 className="text-white">
										Why People Choose Us
									</h5>
									<div className="icon type-right">
										<svg width={171} height={16} viewBox="0 0 171 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M170.707 8.70711C171.098 8.31658 171.098 7.68342 170.707 7.29289L164.343 0.928932C163.953 0.538408 163.319 0.538408 162.929 0.928932C162.538 1.31946 162.538 1.95262 162.929 2.34315L168.586 8L162.929 13.6569C162.538 14.0474 162.538 14.6805 162.929 15.0711C163.319 15.4616 163.953 15.4616 164.343 15.0711L170.707 8.70711ZM0 9H170V7H0V9Z" fill="url(#paint0_linear_2155_348)" />
											<defs>
												<linearGradient id="paint0_linear_2155_348" x1={0} y1="8.5" x2={170} y2="8.5" gradientUnits="userSpaceOnUse">
													<stop stopColor="white" offset={0} stopOpacity={0} />
													<stop offset={1} stopColor="white" stopOpacity="0.2" />
												</linearGradient>
											</defs>
										</svg>
									</div>
								</div>
								<ul className="list-skill">
									<li>
										<p className="skill-name">
											Financial Management
										</p>
										<div className="wg-progress">
											<div className="progress style-2 tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="odometer style-5"><CounterUp count={98} /></div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
									<li>
										<div >
											<p className="skill-name">
												Sales Marketing
											</p>
										</div>
										<div className="wg-progress">
											<div className="progress style-2 tf-animate-1">
												<div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
											</div>
											<div className="wg-counter style-5">
												<div className="odometer style-5-2"><CounterUp count={73} /></div>
												<span className="sub-odo">%</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
