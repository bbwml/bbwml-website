'use client'
import Image from 'next/image'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Section2() {
	const [isOpen, setOpen] = useState(false)
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="s-about-company-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-xl-5">
							<div className="content-left">
								<p className="s-sub-title mb-15">
									<i className="icon-angles-right moveLeftToRight" />
									about company
								</p>
								<p className="s-title mb-30 text-anime-wave">
									Marketing Strategic Visionaries Behind
									Your
									<span>
										Success
									</span>
								</p>
								<p className="text mb-40">
									We are dedicated to helping individuals and businesses achieve financial stability
									and growth through expert, personalized advice.
								</p>
								<div className="video-wrap style-3">
									<div className="tf-overlay" />
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/about-video.jpg" data-src="/images/section/about-video.jpg" alt="" className="lazyload tf-animate-2" />
									<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
										<span className="icon style-circle">
											<span className="wave" />
											<i className="icon-play fs-12" />
										</span>
										Watch Videos
									</a>
								</div>
							</div>
						</div>
						<div className="col-xl-6 offset-xl-1">
							<div className="content-right">
								<div className="tf-accordion-type-2 accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
											<button className={`accordion-button ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<span className="number"> 01 </span>
												<span className="title">
													Driven by <br />
													<span className="fw-3"> Innovation </span>
												</span>
												<span className="icon"> </span>
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We believe in creating meaningful connections between
												brands and their audiences, driving sustainable growth and
												success values of integrity, creativity, and
												collaboration.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
											<button className={`accordion-button ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<span className="number"> 02 </span>
												<span className="title">
													Our Vision <br />
													<span className="fw-3"> &amp; Values </span>
												</span>
												<span className="icon"> </span>
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We believe in creating meaningful connections between
												brands and their audiences, driving sustainable growth and
												success values of integrity, creativity, and
												collaboration.
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
											<button className={`accordion-button ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<span className="number"> 03 </span>
												<span className="title">
													Our Journey <br />
													<span className="fw-3"> and History </span>
												</span>
												<span className="icon"> </span>
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We believe in creating meaningful connections between
												brands and their audiences, driving sustainable growth and
												success values of integrity, creativity, and
												collaboration.
											</div>
										</div>
									</div>
									<div className="accordion-item last">
										<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
											<button className={`accordion-button ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												<span className="number"> 04 </span>
												<span className="title">
													Marketing <br />
													<span className="fw-3"> Innovation </span>
												</span>
												<span className="icon"> </span>
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												We believe in creating meaningful connections between
												brands and their audiences, driving sustainable growth and
												success values of integrity, creativity, and
												collaboration.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
