
import Image from 'next/image'
import Link from 'next/link'
export default function Section10() {
	return (
		<>

			<section className="s-cta">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="wrap">
								<div className="tf-overlay">
								</div>
								<div className="bg-image">
									<div className="rellax" data-rellax-speed="0.3">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/cta.jpg" data-src="/images/section/cta.jpg" alt="" className="lazyload" />
									</div>
								</div>
								<div className="content">
									<p className="s-title text-white mb-40 text-clamp-4 text-anime-wave">
										Transforming Challenges <br /> into Opportunities for Your <br />
										<span>
											Business Growth
										</span>
									</p>
									<Link href="/contact" className="tf-btn style-13 text-anime-style-1">
										Get Consultation
										<i className="icon-chevron-right" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
