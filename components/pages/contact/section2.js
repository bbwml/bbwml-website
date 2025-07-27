
export default function Section2() {
	return (
		<>

			<section className="s-map">
				<div className="box-map">
					{/* <div id="map" className="map" /> */}
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={825} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 offset-lg-4">
								<div className="content">
									<div className="comment-wrap style-2">
										<h3 className="text-anime-wave">
											Send Us Message
										</h3>
										<p className="note mb-40">
											Your email address will not be published. Required fields are marked *
										</p>
										<form action="#" className="form-comment style-3">
											<div className="cols mb-20">
												<fieldset>
													<input type="text" placeholder="Name" required />
												</fieldset>
												<fieldset>
													<input type="number" placeholder="Phone" required />
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
													<textarea placeholder="Message" />
												</fieldset>
											</div>
											<div className="checkbox-item mb-30">
												<label>
													<span className="text">Save my name, email, and website in this browser
														for
														the next time I comment.</span>
													<input type="checkbox" className="checkbox-item" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</div>
											<div className="bot">
												<button type="submit" className="tf-btn text-anime-style-1">
													Send Message Us
													<i className="icon-chevron-right" />
												</button>
											</div>
										</form>
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
