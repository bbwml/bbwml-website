
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero4() {
	return (
		<>

			<div className="page-title-home-4 ">
				<div className="tf-overlay" />
				<div className="image overflow-hidden">
					<Image
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						src="/images/page-title/page-title-home-4.jpg" data-src="/images/page-title/page-title-home-4.jpg" alt="" className="lazyload tf-animate-zoom-in-out" />
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="content">
									<h5 className="sub-title text-white mb-10 text-anime-style-2">
										Welcome to Saylo
									</h5>
									<p className="title font-main text-white mb-50 text-anime-wave">
										Elevate Marketing <br />
										Strategy Solutions
									</p>
									<Link href="/service-details" className="tf-btn style-7 mb-40 text-anime-style-1">
										Free Consultation
										<i className="icon-chevron-right" />
									</Link>
									<ul className="list">
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Experience &amp; Expert Team
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check-2" />
											</div>
											<p>
												Modern &amp; Tech Marketing Solutions
											</p>
										</li>
									</ul>
									<div className="item-customer">
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
				</div>
			</div>

		</>
	)
}
