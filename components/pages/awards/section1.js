
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-achivement tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									Achievements
								</p>
								<p className="s-title mb-25 text-anime-wave">
									Recognized Excellence
									Business
									<span>
										Consulting
									</span>
								</p>
								<p className="text mb-50">
									We are proud to be recognized as an award-winning business consulting agency <br />
									testament to our commitment to excellence and innovation.
								</p>
								<ul className="achievement-list">
									<li>
										<div className="icon">
											<i className="flaticon-medal" />
										</div>
										<h5 className="title">
											Best Consulting Agency
										</h5>
										<p className="text">
											Our accolades reflect the trust our clients place in us and the dedication
											we have to delivering.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="flaticon-trophy" />
										</div>
										<h5 className="title">
											Number#1 Agency
										</h5>
										<p className="text">
											Our accolades reflect the trust our clients place in us and the dedication
											we have to delivering.
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image-wrap tf-hover">
								<div className="image hover-1 ">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/./widget/achievement.jpg" data-src="/images/./widget/achievement.jpg" alt="" className="lazyload" />
								</div>
								<div className="item-customer style-3">
									<Link href="/#" className="mb-15">10m+ Customer</Link>
									<ul className="list-author mb-40">
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-1.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-1.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-3.jpg" alt="" />
										</li>
										<li>
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/customer-4.jpg" alt="" />
										</li>
									</ul>
									<span className="line mb-30" />
									<div className="wg-counter style-6">
										<div className="odometer style-6"><CounterUp count={10} /></div>
										<span className="sub-odo">%</span>
									</div>
									<p>
										Customers are Satisfied with the Services
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
