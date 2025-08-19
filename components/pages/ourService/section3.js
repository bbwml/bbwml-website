
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-service-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									consulting services
								</p>
								<p className="s-title text-center text-anime-wave">
									The Quality Consulting Service to <br />
									grow your business
									<span>
										and sales
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/page-title/our-services.jpg" data-src="/images/widget/card-service-5.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-data-management" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Management Consulting
										</Link>
										<p className="text">
											Saylo our Management Consulting services businesses the unlock
											potential.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-6.jpg" data-src="/images/widget/card-service-6.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-human-resources" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Resources Consulting
										</Link>
										<p className="text">
											Our resources consulting services designed to optimize the organizations
											manage
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-7.jpg" data-src="/images/widget/card-service-7.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-target-1
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											Marketing Consulting
										</Link>
										<p className="text">
											We analyze your current marketing efforts, identify areas for
											improvement goals
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-8.jpg" data-src="/images/widget/card-service-8.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-return-of-investment" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Financial Consulting
										</Link>
										<p className="text">
											Provides expert financial planning budget
											risk management and investment.
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-9.jpg" data-src="/images/widget/card-service-9.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-viral-marketing
                                      " />
										</div>
										<Link href="/service-details" className="title fw-7">
											Digital Transformation
										</Link>
										<p className="text">
											Guiding businesses through the adoption of new technologies and digital
											tools
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
								<div className="card-service-2 tf-hover ">
									<div className="image hover-1 hover-14">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/widget/card-service-10.jpg" data-src="/images/widget/card-service-10.jpg" alt="" className="lazyload" />
									</div>
									<div className="content">
										<div className="icon">
											<i className="flaticon-solution" />
										</div>
										<Link href="/service-details" className="title fw-7">
											Operations Management
										</Link>
										<p className="text">
											Analyzing an optimizing internal processes to improve efficiency, reduce
											costs
										</p>
										<Link href="/service-details" className="tf-btn-readmore style-3">
											Read More
											<i className="icon-chevron-right" />
										</Link>
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
