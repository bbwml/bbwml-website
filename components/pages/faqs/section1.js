'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-page-faq">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									faqs
								</p>
								<p className="s-title mb-50 text-anime-wave">
									Frequently Asked
									<span>
										Questions
									</span>
								</p>
								<span className="line" />
								<p className="title text-anime-style-2">
									General Questions
								</p>
								<div className="tf-accordion style-4 style-2 accordion mb-70" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
											<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We offer wide range services, including strategic planning, operational
												efficiency, market research, financial consulting, leadership
												development, digital transformation
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
											<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												What services do you offer as part of your business consulting?
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We offer wide range services, including strategic planning, operational
												efficiency, market research, financial consulting, leadership
												development, digital transformation
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
											<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												How does the consulting process work?
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We offer wide range services, including strategic planning, operational
												efficiency, market research, financial consulting, leadership
												development, digital transformation
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
											<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												How long does a typical consulting project take?
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We offer wide range services, including strategic planning, operational
												efficiency, market research, financial consulting, leadership
												development, digital transformation
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
											<button className={`accordion-button ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												How do you charge for your services?
											</button>
										</h2>
										<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We offer wide range services, including strategic planning, operational
												efficiency, market research, financial consulting, leadership
												development, digital transformation
											</div>
										</div>
									</div>
								</div>
								<span className="line" />
								<p className="title text-anime-style-2">
									Privacy Policy
								</p>
								<div className="tf-accordion style-4 style-2 accordion" id="accordionExample2">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(6)}>
											<button className={`accordion-button ${isAccordion === 6 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
												What does a business consulting agency do?
											</button>
										</h2>
										<div id="collapseOne1" className={`accordion-collapse collapse ${isAccordion === 6 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Business consulting helps you identify inefficiencies, capitalize on
												opportunities implement strategies that drive sustainable growth. It
												brings an objective perspective, expert insights.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(7)}>
											<button className={`accordion-button ${isAccordion === 7 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
												How can business consulting benefit my company?
											</button>
										</h2>
										<div id="collapseTwo1" className={`accordion-collapse collapse ${isAccordion === 7 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Business consulting helps you identify inefficiencies, capitalize on
												opportunities implement strategies that drive sustainable growth. It
												brings an objective perspective, expert insights.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(8)}>
											<button className={`accordion-button ${isAccordion === 8 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
												What types of businesses do you work with?
											</button>
										</h2>
										<div id="collapseThree1" className={`accordion-collapse collapse ${isAccordion === 8 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Business consulting helps you identify inefficiencies, capitalize on
												opportunities implement strategies that drive sustainable growth. It
												brings an objective perspective, expert insights.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(9)}>
											<button className={`accordion-button ${isAccordion === 9 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
												What should I expect during the consulting process?
											</button>
										</h2>
										<div id="collapseFour1" className={`accordion-collapse collapse ${isAccordion === 9 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Business consulting helps you identify inefficiencies, capitalize on
												opportunities implement strategies that drive sustainable growth. It
												brings an objective perspective, expert insights.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(10)}>
											<button className={`accordion-button ${isAccordion === 10 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
												How long does a typical consulting project take?
											</button>
										</h2>
										<div id="collapseFive1" className={`accordion-collapse collapse ${isAccordion === 10 ? 'show' : ''}`} data-bs-parent="#accordionExample2">
											<div className="accordion-body">
												Business consulting helps you identify inefficiencies, capitalize on
												opportunities implement strategies that drive sustainable growth. It
												brings an objective perspective, expert insights.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item sb-contact mb-30">
									<div className="sb-content">
										<p className="s-title style-2 mb-30 text-anime-wave">
											Have Any Questions <br />
											<span>
												On your Minds!
											</span>
										</p>
										<form action="#" className="form-contact bg-transparent style-3">
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Full Name" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="email" placeholder="Email" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
												<fieldset>
													<input type="text" placeholder="Subject" required />
												</fieldset>
											</div>
											<div className="cols mb-10">
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
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experience Business
											<span>
												Services
											</span>
										</p>
										<Link href="/our-service" className="tf-btn text-anime-style-1">
											Get Consultation
											<i className="icon-chevron-right" />
										</Link>
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
