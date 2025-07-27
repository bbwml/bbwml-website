
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-value tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									our value
								</p>
								<p className="s-title text-center text-anime-wave">
									Values That Drive Our Consulting <br />
									Approach Commitment
									<span>
										to Excellence
									</span>
								</p>
							</div>
							<div className="grid-layout-3">
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-market-1 hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Client-Centered Approach
									</Link>
									<p className="text">
										Our clients’ success is our top priority the
										and we are dedicated to providing tailored strategies that align with their
										goals
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-excellent hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Excellence in Experience
									</Link>
									<p className="text">
										At the heart of our business consulting services is a commitment to
										excellence in experience we bring together years
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-integration hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Integrity and Transparency
									</Link>
									<p className="text">
										Integrity and transparency are the was cornerstones of our consulting
										approach. believe in building strong, trusting
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-integrity hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Ethical Integrity
									</Link>
									<p className="text">
										We are committed to delivering the seen highest quality of service, ensuring
										that every project reflects our dedication
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-teamwork hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Collaboration and Teamwork
									</Link>
									<p className="text">
										We foster a collaborative environment, working closely with clients and
										internal teams to achieve shared goals
									</p>
								</div>
								<div className="box-icon style-6 type-2 tf-hover-icon ">
									<div className="icon">
										<i className="flaticon-dna hover-icon-2" />
									</div>
									<Link href="/#" className="title fw-7 fs-22">
										Innovation and Adaptability
									</Link>
									<p className="text">
										We embrace continuous improvement and innovation, integrating the latest
										industry trends and technologies to provide.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
