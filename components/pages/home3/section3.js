
'use client'
import { sliderBoxIcon } from '@/utils/swiperOptions'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section3() {
	return (
		<>

			<section className="s-feature-3">
				<div className="tf-container w-1860">
					<div className="row">
						<Swiper {...sliderBoxIcon} className="swiper-container slider-box-icon overflow-hidden mb-30">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0s">
										<div className="icon style-circle">
											<i className="flaticon-problem-solving hover-icon-2" />
										</div>
										<Link href="/our-service" className="title fw-7 fs-22">
											Personalized Solutions
										</Link>
										<p className="text">
											Personalized solutions tailored strategies and
											services that are specifically designed.
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
										<div className="icon style-circle">
											<i className="flaticon-persuasive hover-icon-2" />
										</div>
										<Link href="/our-service" className="title fw-7 fs-22">
											Experience Guidance
										</Link>
										<p className="text">
											Experienced guidance is the cornerstone of effective financial business
											advisory
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
										<div className="icon style-circle">
											<i className="flaticon-statistics hover-icon-2" />
										</div>
										<Link href="/our-service" className="title fw-7 fs-22">
											Comprehensive Reporting
										</Link>
										<p className="text">
											Comprehensive reporting refers the detailed thorough presentation of data,
											insights.
										</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="box-icon style-3 tf-hover-icon wow fadeInUp" data-wow-delay="0.3s">
										<div className="icon style-circle">
											<i className="flaticon-interactivity hover-icon-2" />
										</div>
										<Link href="/our-service" className="title fw-7 fs-22">
											Advanced Technology
										</Link>
										<p className="text">
											Advanced technology refers to cutting-edge systems innovations business
											operations.
										</p>
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
				</div>
			</section>

		</>
	)
}
