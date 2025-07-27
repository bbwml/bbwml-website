
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-case-detail ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="top">
									<div >
										<h2 className="title mb-50 text-anime-wave">
											Organizational <br /> Development and <br />
											by Leadership
										</h2>
										<span className="line mb-40" />
										<p className="text s1 mb-20">
											We implemented leadership training programs and <br /> designed an
											organizational
											development plan to enhance <br /> team collaboration.
										</p>
										<p className="text s2">
											Company faced low employee engagement and leadership <br /> challenges that
											were
											affecting overall performance.
										</p>
									</div>
									<div className="entry-image-right tf-hover">
										<div className="hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/section/case-detail.jpg" data-src="/images/section/case-detail.jpg" alt="" className="lazyload" />
										</div>
									</div>
								</div>
								<div className="entry-meta">
									<ul>
										<li>
											<p className="name-meta">Clients</p>
											<h6 className="sub-meta">Pixel Art Company</h6>
										</li>
										<li>
											<p className="name-meta">Start Date</p>
											<h6 className="sub-meta">23 August 2024</h6>
										</li>
										<li>
											<p className="name-meta">Duration:</p>
											<h6 className="sub-meta">3 Month 8 Days</h6>
										</li>
										<li>
											<p className="name-meta">Location:</p>
											<h6 className="sub-meta">Melbourne, Australia</h6>
										</li>
										<li>
											<p className="name-meta">Service:</p>
											<h6 className="sub-meta">Business Consulting</h6>
										</li>
									</ul>
								</div>
								<div className="entry-image tf-hover">
									<div className="bg-image">
										<div className="rellax" data-rellax-speed={1}>
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/case-detail-2.jpg" data-src="/images/section/case-detail-2.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<p className="title-2 s1 text-anime-style-2">
								The Project Story
							</p>
							<p className="text s3">
								After conducting an initial assessment of ProTech Industries' operations, we identified
								several bottlenecks in their supply chain and production processes. Key issues included
								overstocking raw materials, misaligned production schedules with demand forecasts, and
								outdated technology that hindered real-time decision-making.
							</p>
						</div>
						<div className="col-lg-6">
							<p className="title-2 s1 text-anime-style-2">
								The Challenge
							</p>
							<p className="text s3 mb-0">
								A mid-sized manufacturing company, ProTech Industries, was experiencing rapid growth,
								but their operational inefficiencies were starting to impact productivity and
								profitability. They faced challenges in supply chain management, production scheduling,
								and inventory control, leading to increased lead times, higher costs, and customer
								dissatisfaction. The leadership team sought a business consulting firm to assess and
								optimize their operations for scalability and sustainable growth.
							</p>
						</div>
						<div className="col-lg-12">
							<span className="line s1" />
							<p className="title-2 s2 text-anime-wave">
								The Results
							</p>
							<p className="text s4 mb-30">
								We recommended the integration of an ERP (Enterprise Resource Planning) system that
								would automate and connect all departments—production, supply chain, and finance. Our
								team worked closely with the company to implement the system and provided training for
								staff to ensure smooth adoption.
							</p>
						</div>
						<div className="grid-layout-2 mb-100">
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0s">
								<h6 className="name">
									Production Efficiency
								</h6>
								<p className="infor">
									Increased by 30%, allowing the company to meet growing customer demand without
									additional labor costs.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0.1s">
								<h6 className="name">
									Inventory Costs
								</h6>
								<p className="infor">
									Were reduced by 20% due to better demand forecasting and the implementation of
									JIT supply chain processes.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0s">
								<h6 className="name">
									Lead Times
								</h6>
								<p className="infor">
									Were shortened by 40%, leading to faster order fulfillment and they improved
									customer satisfaction.
								</p>
							</div>
							<div className="wg-benefit wow fadeInUp" data-wow-delay="0.2s">
								<h6 className="name">
									Technology Integration
								</h6>
								<p className="infor">
									Provided leadership with real-time insights into operations, enabling more
									informed
									decision-making and allowing them to adjust
								</p>
							</div>
						</div>
						<span className="line s2" />
						<div className="bot">
							<Link href="/#" className="btn-case prev">
								<div className="image-wrap">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/prev-case.jpg" alt="" />
									<div className="icon style-circle">
										<i className="icon-arrow-top-right" />
									</div>
								</div>
								<div >
									<p className="tag">
										Corporate, Business, Finance
									</p>
									<p className="name-case">
										Experience Improvement Increased
									</p>
								</div>
							</Link>
							<Link href="/#" className="btn-case next">
								<div >
									<p className="tag">
										Corporate, Business, Finance
									</p>
									<p className="name-case">
										Digital Transformation for Business
									</p>
								</div>
								<div className="image-wrap">
									<div className="icon style-circle">
										<i className="icon-arrow-top-right" />
									</div>
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/next-case.jpg" alt="" />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
