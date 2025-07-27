
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-we-do tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									what we do
								</p>
								<p className="s-title text-center text-anime-style-2">
									Empowering Businesses with Expert <br />
									Business
									<span>
										Consulting
									</span>
								</p>
							</div>
							<div className="feature-group overflow-hidden">
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Customized Strategic
										Planning &amp; Ideas
									</Link>
									<span className="line mb-30" />
									<p className="text">
										We develop tailored strategies that align with your business addressing unique
										challenges leveraging.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/service-details" className="title">
										Customized Strategic
										Planning &amp; Ideas
									</Link>
									<span className="line mb-30" />
									<p className="text">
										We develop tailored strategies that align with your business addressing unique
										challenges leveraging.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
										</Link>
									</div>
								</div>
								<div className="box-icon style-8 ">
									<div className="icon">
										<i className="flaticon-team" />
									</div>
									<Link href="/service-details" className="title">
										Operational Efficiency Optimization
									</Link>
									<span className="line mb-30" />
									<p className="text">
										We analyze and refine business the processes to improve productivity to reduce
										costs, and enhance overall.
									</p>
									<div className="image">
										<Link href="/service-details">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "100%" }}
												src="/images/section/feature.jpg" data-src="/images/section/feature.jpg" alt="" className="lazyload" />
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
