
export default function Section9() {
	return (
		<>

			<section className="s-contact">
				<div className="tf-container ">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title mb-17">
										<i className="icon-angles-right moveLeftToRight" />
										need consultations
									</p>
									<p className="s-title text-anime-wave-right">
										Ready to Get Free <span>
											Consultation ?
										</span>
									</p>
									<ul className="list ">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap text-black">Address Business</p>
											<p className="infor">
												55 East 10th Street, New York, <br />
												NY 10003, United States
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.2s">
											<p className="cap text-black">Contact Us</p>
											<p className="infor">
												themesflat@gmail.com <br />
												+000 (123) 456 88
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-\">
										Get Free Consultation
									</p>
									<form action="#" className="form-contact">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder="Full Name"  required />
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
										<button type="submit" className="tf-btn full">
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
