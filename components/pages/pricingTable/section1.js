
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-pricing tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									pricing package
								</p>
								<p className="s-title text-center text-anime-style-2">
									Flexible Pricing Packages for Your <br /> Business
									<span>
										Needs
									</span>
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing ">
								<div className="plan">
									<p>Basic Plan</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$19.00<span>/per month </span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of consulting packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Initial business assessment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Market research and competitor
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Basic financial review
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Monthly check-in for 3 months
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Email support for ongoing questions
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing style-2 ">
								<div className="rating-group">
									<i className="icon-star" />
									<i className="icon-star" />
									<i className="icon-star" />
								</div>
								<div className="plan">
									<p>Standard Plan</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$39.00
										<span> /per month </span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of consulting packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Initial business assessment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Market research and competitor
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Basic financial review
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Monthly check-in for 3 months
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-xmark" />
										</div>
										<p>
											Email support for ongoing questions
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-pricing last ">
								<div className="plan">
									<p>Premium Plan</p>
								</div>
								<div className="price-wrap mb-20">
									<p className="price">
										$93.00
										<span> /per month </span>
									</p>
								</div>
								<p className="text mb-25">
									We provide a range of consulting packages
									tailored to your unique needs.
								</p>
								<Link href="/#" className="tf-btn style-3 full mb-35">
									Choose Package
									<i className="icon-chevron-right" />
								</Link>
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Initial business assessment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Market research and competitor
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Basic financial review
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Monthly check-in for 3 months
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-star-of-life" />
										</div>
										<p>
											Email support for ongoing questions
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
