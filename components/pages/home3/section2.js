
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section2() {
	return (
		<>

			<section className="s-about-company-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="content-left">
								<div className="image s1 tf-hover">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/about-3.jpg" data-src="/images/section/about-3.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image s2 tf-hover">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/about-4.jpg" data-src="/images/section/about-4.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="image s3 tf-hover">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/about-5.jpg" data-src="/images/section/about-5.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="wg-curve-text style-3 tf-animate__box-2 animate__slow">
									<div className="icon">
										<i className="flaticon-rocket" />
									</div>
									<div className="text-rotate">
										<div className="circle">
											<div id="circularText" className="text" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<div className="content">
								<p className="s-sub-title mb-15">
									<i className="icon-angles-right moveLeftToRight" />
									about company
								</p>
								<p className="s-title text-main-green-3 mb-30 text-anime-wave">
									Expert Financial Advice, Tailored to Your
									<span>
										Goals
									</span>
								</p>
								<p className="text mb-40">
									We are dedicated to helping individuals and businesses achieve financial stability
									and growth through expert, personalized advice. Our team of experienced financial
									advisors works closely
								</p>
								<div className="experience mb-40">
									<div className="counter-wrap style-3">
										<div className="wg-counter style-2 type-2">
											<div className="odometer style-2"><CounterUp count={10} /></div>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter">
											Years Of <br />
											Experience
										</p>
									</div>
									<div className="counter-wrap style-3">
										<div className="wg-counter style-2 type-2">
											<div className="odometer style-2-2"><CounterUp count={10} /></div>
											<span className="sub-odo">k</span>
											<span className="sub-odo">+</span>
										</div>
										<p className="sub-counter">
											Our Global <br />
											Clients
										</p>
									</div>
								</div>
								<p className="text mb-40">
									We offer tailored strategies that provide clarity and confidence, helping you make
									informed decisions to secure
								</p>
								<div className="bot">
									<Link href="/about-us" className="tf-btn style-15 text-anime-style-1">
										Learn More Us
										<i className="icon-chevron-right" />
									</Link>
									<div className="author-wrap">
										<div className="img-avt">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/entry-author.jpg" alt="" />
										</div>
										<div className="infor">
											<Link href="/#" className="name">
												Johnny S. Patterson
											</Link>
											<div className="duty">
												CEO &amp; Founder
											</div>
										</div>
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
