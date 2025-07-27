
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-why-choose-4 tf-spacing-3">
				<div className="content-wrap tf-spacing-3">
					<div className="content-left">
						<p className="s-sub-title mb-15">
							<i className="icon-angles-right moveLeftToRight" />
							Why choose us
						</p>
						<p className="s-title mb-40 text-anime-wave">
							Unmatched Expertise for Your
							<span>
								Business Success
							</span>
						</p>
						<p className="text">
							We are committed to delivering exceptional service and personalized strategies
							that
							help our clients succeed in a rapidly evolving marketplace. Through
							collaboration,
							integrity, and a relentless focus on results, we aim to be a trusted partner
						</p>
						<ul className="benefit-list style-2">
							<li>
								<div className="icon">
									<i className="icon-check-2" />
								</div>
								<p>
									Experience, Expertise, Results to Choose Us
								</p>
							</li>
							<li>
								<div className="icon">
									<i className="icon-check-2" />
								</div>
								<p>
									Smart Choice for Business Consulting Excellence
								</p>
							</li>
						</ul>
						<Link href="/service-details" className="tf-btn style-3 text-anime-style-1">
							Explore Our Services
							<i className="icon-chevron-right" />
						</Link>
					</div>
					<div className="image-right">
						<div className="image">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/section/why-1.jpg" data-src="/images/section/why-1.jpg" alt="" className="lazyload" />
						</div>
					</div>
				</div>
				<div className="content-wrap wrap-2">
					<div className="image-left relative">
						<div className="image ">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/section/why-2.jpg" data-src="/images/section/why-2.jpg" alt="" className="lazyload" />
						</div>
					</div>
					<div className="content-right">
						<p className="s-title text-anime-wave">
							Smart Choice for Business Consulting
							<span>
								Excellence
							</span>
						</p>
						<ul className="list">
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										1
									</p>
								</div>
								<div >
									<Link href="/#" className="title">
										Customized Solutions
									</Link>
									<p>
										We provide tailored strategies that address the unique challenges and
										goals of each client, ensuring personalized approaches
									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										2
									</p>
								</div>
								<div >
									<Link href="/#" className="title">
										Data-Driven Approach
									</Link>
									<p>
										We leverage data analytics and market research to create actionable strategies,
										helping businesses make informed, evidence-based
									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										3
									</p>
								</div>
								<div >
									<Link href="/#" className="title">
										Sustainable Results
									</Link>
									<p>
										We focus on long-term success by developing strategies that not only solve
										immediate challenges but also position businesses
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

		</>
	)
}
