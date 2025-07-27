
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
										We Work For Building a Brighter Future Together
										and <span>
											Grow Business
										</span>Link
									</p>
									<ul className="list mb-50">
										<li>
											<p className="font-main-2">
												Company Mission
											</p>
											<p className="text">
												We provide expert consulting services designed help businesses
												thrive in
												today's dynamic marketplace team experienced
											</p>
										</li>
										<li>
											<p className="font-main-2">
												Company Vision
											</p>
											<p className="text">
												To be the trusted partner that empowers businesses worldwide to
												unlock
												their
												full potential, driving sustainable growth
											</p>
										</li>
									</ul>
									<Link href="/about-us" className="tf-btn">
										Learn More Us
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
											src="/images/section/s-about.jpg" data-src="/images/section/s-about.jpg" alt="" className="lazyload tf-animate-2" />
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
