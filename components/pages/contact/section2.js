"use client"
export default function Section2() {
	return (
		<>
			<section className="s-map">
				<div className="box-map">
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3089234567891!2d7.489553!3d9.057081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba8b1b6be19%3A0x5a2f2b2c3d4e5f60!2sCentral%20Business%20District%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1678975266976!5m2!1sen!2s" 
						height={825} 
						style={{ border: 0, width: "100%" }} 
						allowFullScreen 
						loading="lazy" 
						referrerPolicy="no-referrer-when-downgrade" 
					/>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 offset-lg-4">
								<div className="content">
									<div className="comment-wrap style-2">
										
										<p className="note mb-40">
											Send Us a Message
										</p>
										<h3 className="text-anime-wave">
											info@bbwml.com
										</h3>
										{/* <form action="#" className="form-comment style-3">
											<style jsx>{`
												.form-comment input::placeholder,
												.form-comment textarea::placeholder {
													color: #666 !important;
													opacity: 1 !important;
												}
												.form-comment input,
												.form-comment textarea {
													color: #333 !important;
												}
											`}</style>
											<div className="cols mb-20">
												<fieldset>
													<input type="text" placeholder="Name *" required />
												</fieldset>
												<fieldset>
													<input type="tel" placeholder="Phone *" required />
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<input type="email" placeholder="Email *" required />
												</fieldset>
												<fieldset>
													<input type="text" placeholder="Subject *" required />
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<textarea placeholder="Message *" required />
												</fieldset>
											</div>
											<div className="checkbox-item mb-30">
												<label>
													<span className="text">Save my name, email, and website in this browser for the next time I comment.</span>
													<input type="checkbox" className="checkbox-item" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</div>
											<div className="bot">
												<button type="submit" className="tf-btn text-anime-style-1">
													Send Message
													<i className="icon-chevron-right" />
												</button>
											</div>
										</form> */}
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