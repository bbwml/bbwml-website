'use client'
import { sliderTestimonial2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section4() {
	return (
		<>

			<section className="s-process-2 tf-spacing-1">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<Image
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/widget/process.jpg" alt="" />
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-5">
								<div className="content">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										working process
									</p>
									<p className="s-title text-white mb-40 text-anime-wave">
										What Our Clients
										Say
										<span>
											about Us
										</span>
									</p>
									<p className="text text-white mb-40">
										Helping businesses develop clear, actionable strategies to achieve long-term
										goals
										and sustainable growth.
									</p>
									<div className="bot">
										<div className="btn-slider-tesimonial btn-slide btn-prev style-4">
											<i className="icon-arrow-left" />
										</div>
										<div className="btn-slider-tesimonial btn-slide btn-next style-4">
											<i className="icon-arrow-right" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<Swiper {...sliderTestimonial2} className="swiper-container slider-testimonial-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Working with saylo was a game changer for our company their team
													quickly identy
													operations and helped streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"Working with saylo was a game changer for our company their team
													quickly identy
													operations and helped streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
