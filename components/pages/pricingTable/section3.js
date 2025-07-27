'use client'
import { useState } from 'react'
import Link from 'next/link'
export default function Section3() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-faq-3 tf-spacing-2">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-5">
							<div className="content">
								<p className="s-sub-title mb-15">
									<i className="icon-angles-right moveLeftToRight" />
									faqs
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Frequently Asked
									<span>
										Querstions
									</span>
								</p>
								<p className="text mb-30">
									A financial advisor helps individuals and businesses make informed decisions about
									their finances, offering guidance on investments, retirement planning, tax
									strategies.
								</p>
								<Link href="/faqs" className="tf-btn small style-4 text-anime-style-1">
									Get A Quote
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="tf-accordion style-4 style-2 accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
										<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											What types of businesses do you work with?
										</button>
									</h2>
									<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We offer wide range services, including strategic planning, operational
											efficiency, market research, financial consulting, leadership development,
											digital transformation
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
										<button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
											What services do you offer as part of your business consulting?
										</button>
									</h2>
									<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We offer wide range services, including strategic planning, operational
											efficiency, market research, financial consulting, leadership development,
											digital transformation
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
										<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											How does the consulting process work?
										</button>
									</h2>
									<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We offer wide range services, including strategic planning, operational
											efficiency, market research, financial consulting, leadership development,
											digital transformation
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
										<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											How long does a typical consulting project take?
										</button>
									</h2>
									<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We offer wide range services, including strategic planning, operational
											efficiency, market research, financial consulting, leadership development,
											digital transformation
										</div>
									</div>
								</div>
								<div className="accordion-item last">
									<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
										<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
											How do you charge for your services?
										</button>
									</h2>
									<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											We offer wide range services, including strategic planning, operational
											efficiency, market research, financial consulting, leadership development,
											digital transformation
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
