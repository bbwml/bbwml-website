import Image from 'next/image'
import Link from 'next/link'
import SlidingText from '../../slidingHub/SlidingText'

export default function Section2() {
	return (
		<>
			<section className="s-about-company tf-spacing-2">
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="content-section">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										about company
									</p>
									<p className="s-title mb-60 text-anime-wave-right text-clamp-4">
										We Work For Building Wealth and Financial Security Together
										and <span>
											Grow Prosperity
										</span>
									</p>
									<ul className="list mb-50">
										<li>
											<p className="font-main-2 text-black">
												Company Mission
											</p>
											<p className="text">
												To help individuals and businesses grow, preserve, and transfer wealth 
												through disciplined investing, personalized advice, and transparent stewardship.
											</p>
										</li>
										<li>
											<p className="font-main-2 text-black">
												Company Vision
											</p>
											<p className="text">
												To be the most trusted wealth partner in Africa—known for data-driven strategies, 
												human-centered guidance, and long-term performance.
											</p>
										</li>
									</ul>
									<Link href="/about-us" className="tf-btn">
										Learn More About Us
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="image-wrap">
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/bg-service.jpg" data-src="/images/section/s-about.jpg" alt="" className="lazyload tf-animate-2" />
									</div>
									<span className="half-circle item-1 wow rollInRight" />
									<span className="half-circle item-2 wow rollInRight" data-wow-delay="0.5s" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<SlidingText />
			</section>
		</>
	)
}