'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Section9() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-faq tf-spacing-2">
				<div className="image">
					<Image
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						src="/images/section/faq.jpg" data-src="/images/section/faq.jpg" alt="" className="lazyload" />
				</div>
				<div className="content-wrap">
					<div className="content-left">
						<p className="s-sub-title text-white mb-15">
							<i className="icon-angles-right moveLeftToRight" />
							faqs
						</p>
						<p className="s-title text-white mb-30 text-anime-wave">
							Frequently Asked
							<span>
								Querstions
							</span>
						</p>
						<p className="text text-white mb-40">
							A financial advisor helps individuals and businesses make informed decisions about their
							finances, offering guidance on investments, retirement planning, tax strategies.
						</p>
						<Link href="/faqs" className="tf-btn style-15 type-2 small text-anime-style-1">
							Get A Quote
							<i className="icon-chevron-right" />
						</Link>
					</div>
					<div className="content-right">
						<div className="tf-accordion style-2 accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header"onClick={() => handleAccordion(1)}>
									<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										What does a financial advisor do?
									</button>
								</h2>
								<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Process typically starts with a discovery phase, where we assess your business
										needs and goals develop a customized strategy, followed by implementation and
										continuous.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header"onClick={() => handleAccordion(2)}>
									<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Who should work with a financial advisor?
									</button>
								</h2>
								<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Process typically starts with a discovery phase, where we assess your business
										needs and goals develop a customized strategy, followed by implementation and
										continuous.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header"onClick={() => handleAccordion(3)}>
									<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										How are financial advisors compensated?
									</button>
								</h2>
								<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Process typically starts with a discovery phase, where we assess your business
										needs and goals develop a customized strategy, followed by implementation and
										continuous.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header"onClick={() => handleAccordion(4)}>
									<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										How do you create a financial plan?
									</button>
								</h2>
								<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Process typically starts with a discovery phase, where we assess your business
										needs and goals develop a customized strategy, followed by implementation and
										continuous.
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header"onClick={() => handleAccordion(5)}>
									<button className={`accordion-button ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
										What is your investment philosophy?
									</button>
								</h2>
								<div id="collapseFive" className={`accordion-collapse collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										Process typically starts with a discovery phase, where we assess your business
										needs and goals develop a customized strategy, followed by implementation and
										continuous.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item-group">
						<span className="item item-2" />
						<span className="item item-3" />
					</div>
				</div>
			</section>

		</>
	)
}
