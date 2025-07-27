'use client'
import { sliderWorking } from '@/utils/swiperOptions'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section4() {
	return (
		<>

			<section className="s-working-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-18 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									working process
								</p>
								<p className="s-title text-center text-anime-style-2">
									Crafting Your Success Our Process <br />
									The
									<span>
										Roadmap to Success
									</span>
								</p>
							</div>
							<Swiper {...sliderWorking} className="swiper-container slider-working">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="box-icon style-7 tf-hover-icon wow fadeInUp" data-wow-delay="0s">
											<div className="step mb-15">
												<span>
													Step 01
												</span>
											</div>
											<Link href="/#" className="title fw-7 fs-22">
												Discovery &amp; Research
											</Link>
											<div className="icon">
												<i className="flaticon-discovery hover-icon-2" />
											</div>
											<p className="text">
												We begin deep understanding your business, goal challenges
												market research, competitor
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-7 tf-hover-icon wow fadeInUp" data-wow-delay="0.1s">
											<div className="step mb-15">
												<span>
													Step 02
												</span>
											</div>
											<Link href="/#" className="title fw-7 fs-22">
												Strategy Development
											</Link>
											<div className="icon">
												<i className="flaticon-new-product hover-icon-2" />
											</div>
											<p className="text">
												Based on our research develop comprehensive best marketing
												strategy aligns with objectives.
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-7 tf-hover-icon wow fadeInUp" data-wow-delay="0.2s">
											<div className="step mb-15">
												<span>
													Step 03
												</span>
											</div>
											<Link href="/#" className="title fw-7 fs-22">
												Implementation
											</Link>
											<div className="icon">
												<i className="flaticon-execution hover-icon-2" />
											</div>
											<p className="text">
												Once the strategy is finalized, we move into action execute marketing
												campaigns across
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-icon style-7 tf-hover-icon wow fadeInUp" data-wow-delay="0.3s">
											<div className="step mb-15">
												<span>
													Step 04
												</span>
											</div>
											<Link href="/#" className="title fw-7 fs-22">
												Monitoring Support
											</Link>
											<div className="icon">
												<i className="flaticon-customer-support hover-icon-2" />
											</div>
											<p className="text">
												We continuously monitor performance metrics, tracking KPIs such as
												engagement
											</p>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
