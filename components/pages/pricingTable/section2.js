'use client'
import { sliderCarousel } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section2() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="s-cta-3">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover", width: "100%", height: "100%"}}
							src="/images/widget/process.jpg" alt="" />
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-12">
								<div className="video-wrap style-4">
									<a onClick={() => setOpen(true)} className="popup-youtube fs-14 fw-7">
										<span className="icon style-circle">
											<i className="icon-play fs-12" />
										</span>
									</a>
								</div>
							</div>
							<Swiper {...sliderCarousel} className="swiper-container slider-carousel">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="box-cta style-2 wow fadeInUp" data-wow-delay="0s">
											<p className="caption font-main-2 ">Become a Team Member?</p>
											<p className="mb-20">We are always looking for talented Member</p>
											<Link href="/team-member" className="tf-btn small">
												Get Started
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-cta style-2 wow fadeInUp" data-wow-delay="0.1s">
											<p className="caption font-main-2">Need Quality Consultations?</p>
											<p className="mb-20">We are always looking for talented Member</p>
											<Link href="/team-member" className="tf-btn small">
												Get Consultation
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-cta style-2 wow fadeInUp" data-wow-delay="0.2s">
											<p className="caption font-main-2">Are You Looking For A Jobs?</p>
											<p className="mb-20">We are always looking for talented Member</p>
											<Link href="/career" className="tf-btn small">
												Join With Us
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</SwiperSlide>
								</div>
								<div className="tf-pagination style-3 carousel-pagination swiper-pagination" />
							</Swiper>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

		</>
	)
}
