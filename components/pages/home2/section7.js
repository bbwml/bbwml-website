
import Image from 'next/image'
import Link from 'next/link'
export default function Section7() {
	return (
		<>

			<section className="s-business-benefit tf-spacing-2">
				<div className="wrap-1">
					<div className="tf-container w-1780">
						<div className="row">
							<div className="col-lg-12">
								<div className="content-wrap">
									<div className="image tf-hover">
										<div className="hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/section/business.jpg" data-src="/images/section/business.jpg" alt="" className="lazyload" />
										</div>
									</div>
									<div className="content">
										<p className="s-sub-title mb-17">
											<i className="icon-angles-right moveLeftToRight" />
											business benefit
										</p>
										<p className="s-title text-main-green-3 mb-40 letter-space-0 text-anime-wave">
											Transformative Benefits
											Corporate
											<span>
												Consulting
											</span>
										</p>
										<p className="text">
											Corporate consulting strategic partnership to helps organizations navigate
											complex business challenges, optimize operations, and drive sustainable
											growth.
											By leveraging industry expertise and analytical insights, corporate
											consultants
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wrap-2">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="box-benefit wow fadeInUp" data-wow-delay="0s">
									<div className="icon style-circle">
										<span>
											01
										</span>
									</div>
									<Link href="/pricing-table" className="title text-clamp-2">Customer-centric
										approach</Link>
									<span className="line" />
									<p className="text text-clamp-3">
										Customer-centric approach
										business strategy prioritizes
										the needs, preferences.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="box-benefit wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon style-circle">
										<span>
											02
										</span>
									</div>
									<Link href="/pricing-table" className="title text-clamp-2">Sales-driven and
										marketing plans</Link>
									<span className="line" />
									<p className="text text-clamp-3">
										Sales-driven marketing plans
										focus on aligning marketing strategies sales objectives
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="box-benefit wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon style-circle">
										<span>
											03
										</span>
									</div>
									<Link href="/pricing-table" className="title text-clamp-2">Financial analysis &amp;
										tutorials</Link>
									<span className="line" />
									<p className="text text-clamp-3">
										Financial analysis a tutorials essential compo businesses, investors, and
										individuals.
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="box-benefit wow fadeInUp" data-wow-delay="0.3s">
									<div className="icon style-circle">
										<span>
											04
										</span>
									</div>
									<Link href="/pricing-table" className="title text-clamp-2">Market Research and Analysis
										solutions</Link>
									<span className="line" />
									<p className="text text-clamp-3">
										Analyze competitors in the eco-friendly laun detergent space to identify gaps.
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
