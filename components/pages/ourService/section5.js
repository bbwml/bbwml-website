
export default function Section5() {
	return (
		<>

			<section className="s-contact tf-spacing-1">
				<div className="tf-container ">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										need consultations
									</p>
									<p className="s-title text-anime-wave">
										Ready to Get Free <span>
											Consultation ?
										</span>
									</p>
									<ul className="list">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">Address Business</p>
											<p className="infor">
												55 East 10th Street, New York,
												NY 10003, United States
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.1s">
											<p className="cap">Contact Us</p>
											<p className="infor">
												themesflat@gmail.com
												+000 (123) 456 88
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										Get Free Consultation
									</p>
									<form action="#" className="form-contact style-3">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder="Full Name" required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder="Phone" required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<input type="email" placeholder="Email" required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder="Subject" required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<fieldset>
												<textarea className="h-100px" placeholder="Write message" />
											</fieldset>
										</div>
										<button type="submit" className="tf-btn full text-anime-style-1">
											Get Consultation
											<i className="icon-chevron-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
