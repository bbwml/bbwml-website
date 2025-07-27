
import Image from 'next/image'
import Link from 'next/link'
export default function Section9() {
	return (
		<>

			<section className="s-partner-2 tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-4">
							<div className="content">
								<p className="s-sub-title ">
									<i className="icon-angles-right moveLeftToRight" />
									our partners
								</p>
								<p className="s-title text-main-green-3 mb-40 text-anime-wave">
									Global Trusted
									<span>
										Partners
									</span>
								</p>
								<Link href="/contact" className="tf-btn style-14 small text-anime-style-1">
									Become a Partner
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
						<div className=" col-lg-8">
							<div className="wg-partner">
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/quora.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/quora.png" alt="Partner" />
								</Link>
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/rakuten.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/rakuten.png" alt="Partner" />
								</Link>
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/consumer_reports.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/consumer_reports.png" alt="Partner" />
								</Link>
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/forbes.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/forbes.png" alt="Partner" />
								</Link>
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/hubspot.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/hubspot.png" alt="Partner" />
								</Link>
								<Link href="/#">
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img1" src="/images/partner/roku.png" alt="Partner" />
									<img
										// width="0"
										// height="0"
										// sizes="100vw"
										// style={{ width: "100%", height: "auto" }}
										className="img2" src="/images/partner/roku.png" alt="Partner" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
