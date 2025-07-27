import Image from "next/image"

export default function Section1() {
	return (
		<>

			<section className="s-team-member">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<p className="s-title text-center mb-40 text-anime-style-2">
								Leadership &amp; Expertise Our Consulting <br />
								Team to
								<span>
									Grow Business
								</span>
							</p>
							<p className="text text-center mb-50">
								We work closely with you to understand your unique needs and provide tailored strategies
								that address your specific business <br /> goalsWhether it’s improving operational
								efficiency,
								enhancing market competitiveness, or driving digital transformation, our team of <br />
								expert consultants delivers actionable insights and solutions that produce measurable
								results.
							</p>
						</div>
						<div className="col-lg-12">
							<div className="image">
								<div className="bg-image">
									<div className="rellax" data-rellax-speed={1} data-bleed={5} style={{
										backgroundAttachment: "fixed",
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundImage: "url(/images/section/team-member.jpg)",
										width: "100%",
										height: "100%",
									}}>
										{/* <Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/section/team-member.jpg" alt="" /> */}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content">
									<p className="s-sub-title text-white">
										<i className="icon-angles-right moveLeftToRight" />
										Why choose us
									</p>
									<p className="s-title text-white text-anime-wave">
										Professional Skills <br /> and
										<span>
											Experience
										</span>
									</p>
									<p className="text text-white">
										Our commitment to integrity, collaboration, and impact-driven <br />
										aim to inspire and shape the future of business growth
									</p>
								</div>
								<div className="skill">
									<div className="wg-skill mb-40">
										<div className="name">
											<p>
												Business Consulting
											</p>
											<p className="percent">
												89%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
										</div>
									</div>
									<div className="wg-skill mb-40">
										<div className="name">
											<p>
												Marketing Consulting
											</p>
											<p className="percent">
												73%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }} />
										</div>
									</div>
									<div className="wg-skill">
										<div className="name">
											<p>
												Financial Consulting
											</p>
											<p className="percent">
												80%
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
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
