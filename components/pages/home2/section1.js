
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-about-company-2 tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-9">
							<div className="wrap">
								<div >
									<p className="s-sub-title mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										about company
									</p>
									<p className="s-title text-main-green-3 mb-70 text-anime-wave">
										Driven by Insight,<br />
										Powered by
										<span>
											Experience
										</span>
									</p>
									<div className="image-1 tf-hover">
										<div className="hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/section/about-2.jpg"
												data-src="/images/section/about-2.jpg" alt=""
												className="lazyload tf-animate-1"
											/>
										</div>
									</div>
								</div>
								<div className="image-right tf-hover">
									<div className="image-2 hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/about-3.jpg" data-src="/images/section/about-3.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="content">
								<div className="wg-curve-text style-2 mb-50">
									<div className="icon">
										<i className="flaticon-rocket" />
									</div>
									<div className="text-rotate">
										<div className="circle">
											<div id="circularText" className="text" />
										</div>
									</div>
								</div>
								<p className="text mb-40">
									We specialize in transforming growth businesses delivering strategic insights an
									tailored solutions that growth and operational excellence consultants,
								</p>
								<Link href="/our-service" className="tf-btn style-14 text-anime-style-1">
									Explore Services
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
