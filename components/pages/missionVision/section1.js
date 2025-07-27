
import Image from 'next/image'
export default function Section1() {
	return (
		<>

			<section className="s-mission tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="image">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/section/mission-1.jpg" data-src="/images/section/mission-1.jpg" alt="" className="lazyload tf-animate-2" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="content">
								<p className="s-sub-title mb-13">
									<i className="icon-angles-right moveLeftToRight" />
									Mission &amp; vision
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Our Mission and Vision <br /> for Business
									<span>
										Success
									</span>
								</p>
								<p className="text mb-50">
									Our mission is to provide innovative, results-driven consulting solutions that
									empower businesses to reach their full potential. We committed to delivering
									personalized strategies that drive growth, enhance operational
								</p>
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<p className="company">
												Company Mission
											</p>
										</div>
										<p className="text">
											Our mission is to empower businesses by providing innovative, data-driven
											solutions that drive growth, enhance efficiency, and create lasting value.
											We are committed to delivering exceptional service and personalized.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title-top">
											<div className="icon">
												<i className="flaticon-opportunity" />
											</div>
											<p className="company">
												Company Mission
											</p>
										</div>
										<p className="text">
											Our mission is to empower businesses by providing innovative, data-driven
											solutions that drive growth, enhance efficiency, and create lasting value.
											We are committed to delivering exceptional service and personalized.
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
