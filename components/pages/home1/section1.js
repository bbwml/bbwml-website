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
										Private Wealth Management
									</Link>
								</p>
								<p className="text">
									Comprehensive planning and discretionary portfolio management 
									tailored to your unique financial goals and circumstances.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Personalized Portfolio Construction
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Tax-Efficient Strategies
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Ongoing Monitoring & Rebalancing
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
										Investment Management
									</Link>
								</p>
								<p className="text" style={{ color: "#ffffff" }}>
									Multi-asset portfolios with model-based or bespoke mandates 
									designed to optimize risk-adjusted returns.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" style={{ color: "#ffffff" }} />
										</div>
										<p>
											<Link href="/service-details" style={{ color: "#ffffff" }}>
												Diversified Asset Allocation
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" style={{ color: "#ffffff" }} />
										</div>
										<p>
											<Link href="/service-details" style={{ color: "#ffffff" }}>
												Risk-Managed Approach
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
										Retirement & Estate Planning
									</Link>
								</p>
								<p className="text">
									Tax-advantaged strategies, drawdown planning, and intergenerational 
									wealth transfer solutions for long-term financial security.
								</p>
								<span className="line mb-40" />
								<ul className="benefit-list style-3">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Retirement Income Planning
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Trust Structures & Estate Planning
											</Link>
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											<Link href="/service-details">
												Tax Optimization Strategies
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