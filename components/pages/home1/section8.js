'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Section8() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	// Swiper options for the main slider
	const mainSwiperOptions = {
		spaceBetween: 0,
		slidesPerView: 1,
		observer: true,
		observeParents: true,
		simulateTouch: true,

		// thumbs: {
		//     swiper: thumbs,
		// },
		pagination: {
			el: ".swiper-pagination.style-2.tf-pagination",
			clickable: true,
		},
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
		// className: "mySwiper2"
	}

	// Swiper options for the thumbnail slider
	const thumbnailSwiperOptions = {
		// spaceBetween: 10,
		// slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		modules: [FreeMode, Navigation, Thumbs],
		spaceBetween: 30,
		slidesPerView: 1,
		direction: "horizontal",
		simulateTouch: false,
	}
	return (
		<>

			<section className="s-our-testimonial ">
				<div className="tf-marquee slider-saylo style-2 mb-50">
					<div className="wrap-marquee">
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								our testimonials
							</p>
						</div>
					</div>
				</div>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="testimonial-thumbs">
								<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-container slider-testimonial-thumb">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/two.jpg" data-src="/images/section/testimonial-thumbs.jpg" alt="" className="lazyload" />
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="image">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/three.jpg" data-src="/images/section/testimonial-thumbs.jpg" alt="" className="lazyload" />
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
								<Swiper {...mainSwiperOptions} className="swiper-container slider-testimonial">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial default">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30 text-clamp-5 ">
													"Working with B&B was a game changer for our company.
													Their
													team quickly identif inefficiencies in our operations and
													helped us streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													{/* <p className="duty">CEO of Tech Solutions</p> */}
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial default">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30 text-clamp-5 ">
													"Working with saylo was a game changer for our company.
													Their
													team quickly identif inefficiencies in our operations and
													helped us streamline,"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Mendoza P. Alfredo </Link>
													<p className="duty">CEO of Tech Solutions</p>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
								<div className="swiper-pagination tf-pagination style-2">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
