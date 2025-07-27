
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-feature tf-spacing-3">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon wow fadeInUp" data-wow-delay="0s">
								<div className="icon-item hover-icon">
									<i className="flaticon-target" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										Consulting Strategy
									</Link>
								</p>
								<p className="text">
									Tailored strategies designed to address the unique ways
									challenges and opportunities of each client.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Data-Driven Insights Leveraging
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Scalability and Flexibility
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Goal-Oriented Planning
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-2 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon-item hover-icon">
									<i className="flaticon-rocket" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02" style={{ color: "#ffffff" }}>
										Business Growth &amp; Solutions
									</Link>
								</p>
								<p className="text" style={{ color: "#ffffff" }}>
									Our business growth and solutions services are designed to drive sustainable
									success
									for your company.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" style={{ color: "#ffffff" }} />
										</div>
										<p>
											<Link href="/service-details" style={{ color: "#ffffff" }}>
												Market Opportunity Identification
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" style={{ color: "#ffffff" }} />
										</div>
										<p>
											<Link href="/service-details" style={{ color: "#ffffff" }}>
												Customer-Centric Approach
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" style={{ color: "#ffffff" }} />
										</div>
										<p>
											<Link href="/service-details" style={{ color: "#ffffff" }}>
												Performance Tracking
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon-item hover-icon">
									<i className="flaticon-megaphone" />
								</div>
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										Marketing Growth Solutions
									</Link>
								</p>
								<p className="text">
									Our marketing growth solutions are designed accelerate your business’s reach
									and
									growth impact.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Performance Tracking &amp; Reporting
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Automation and Technology
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												SEO &amp; Content Optimization
											</Link>
										</p>
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
