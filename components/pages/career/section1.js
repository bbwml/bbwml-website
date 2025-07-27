
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-popular-category tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									popular category
								</p>
								<p className="s-title text-center text-anime-wave">
									Explore Popular
									<span>
										Category
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="wg-career wow fadeInUp" data-wow-delay="0s">
									<div className="icon">
										<i className="flaticon-graphic-design" />
									</div>
									<Link href="/#" className="font-main-2">
										UX/UI Design
										<span className="font-main">
											(05 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon">
										<i className="flaticon-cooperation" />
									</div>
									<Link href="/#" className="font-main-2">
										Business Sales
										<span className="font-main">
											(105 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon">
										<i className="flaticon-megaphone" />
									</div>
									<Link href="/#" className="font-main-2">
										SEO Marketing
										<span className="font-main">
											(04 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0s">
									<div className="icon">
										<i className="flaticon-healthcare" />
									</div>
									<Link href="/#" className="font-main-2">
										Medical &amp; Health
										<span className="font-main">
											(03 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon">
										<i className="flaticon-pc" />
									</div>
									<Link href="/#" className="font-main-2">
										Computer &amp; Tech
										<span className="font-main">
											(105 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon">
										<i className="flaticon-insurance" />
									</div>
									<Link href="/#" className="font-main-2">
										Insurance &amp; Bank
										<span className="font-main">
											(08 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0s">
									<div className="icon">
										<i className="flaticon-video-file" />
									</div>
									<Link href="/#" className="font-main-2">
										Video Grapy
										<span className="font-main">
											(05 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon">
										<i className="flaticon-coding" />
									</div>
									<Link href="/#" className="font-main-2">
										Development
										<span className="font-main">
											(20 Jobs)
										</span>
									</Link>
								</div>
								<div className="wg-career wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon">
										<i className="flaticon-art" />
									</div>
									<Link href="/#" className="font-main-2">
										Art &amp; Fashion
										<span className="font-main">
											(10 Jobs)
										</span>
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
