
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-process tf-spacing-1">
				<div className="tf-overlay" />
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.3">
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							src="/images/section/process.jpg" data-src="/images/section/process.jpg" alt="" className="lazyload" />
					</div>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="heading mb-50">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</p>
									<p className="s-title text-white text-anime-wave">
										Crafting your Success <br />
										to Process
										<span>
											Roadmap
										</span>
									</p>
								</div>
								<div className="wg-step-skill ">
									<p className="title font-main-2 mb-30 ">
										Step-by-Step Consulting for Sustainable Growth
									</p>
									<span className="line" />
									<ul className="benefit-list">
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Core Competencies and Expertise
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Key Strengths and Accomplishments
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Skills and Career Highlights
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 ">
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 01
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Discovery &amp; Research
										</Link>
									</div>
									<p className="text">
										We begin deep understanding your business, goal challenges
										market research, competitor
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 02
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Strategy Development
										</Link>
									</div>
									<p className="text">
										Based on our research develop comprehensive best marketing strategy aligns with
										objectives.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 03
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Implementation
										</Link>
									</div>
									<p className="text">
										Once the strategy is finalized, we move into action execute marketing campaigns
										across
									</p>
								</div>
								<div className="wg-process  wow fadeInUp" data-wow-delay="0s">
									<div className="right">
										<div className="step-number">
											<span>
												step 04
											</span>
										</div>
										<Link href="/#" className="name-process font-main-2">
											Monitoring Support
										</Link>
									</div>
									<p className="text">
										We continuously monitor they
										performance metrics, tracking KPIs such as engagement
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
