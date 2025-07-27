'use client'
import { sliderAward } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section2() {
	return (
		<>

			<section className="s-award tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<Swiper {...sliderAward} className="swiper-container slider-award">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="wg-award tf-hover-icon">
											<div className="image hover-icon-2">
												<img
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/item/award-1.png" data-src="/images/item/award-1.png" alt="" className="lazyload wow zoomIn" />
											</div>
											<h5 className="name">
												<Link href="/#">
													Best Business Consulting <br />
													Agency 2018
												</Link>
											</h5>
											<span className="line" />
											<p className="text">
												We are honored to be acknowledged as leaders in the field. These
												achievements inspire us to continue pushing
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-award tf-hover-icon ">
											<div className="image hover-icon-2 "><img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/item/award-2.png" data-src="/images/item/award-2.png" alt="" className="lazyload wow zoomIn" /></div>
											<h5 className="name">
												<Link href="/#">
													Best Business Consulting
													Agency 2020
												</Link>
											</h5>
											<span className="line" />
											<p className="text">
												We are honored to be acknowledged as leaders in the field. These
												achievements inspire us to continue pushing
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-award tf-hover-icon">
											<div className="image hover-icon-2 ">
												<img
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/item/award-3.png" data-src="/images/item/award-3.png" alt="" className="lazyload wow zoomIn" />
											</div>
											<h5 className="name">
												<Link href="/#">
													Best Business Consulting <br />
													Agency 2022
												</Link>
											</h5>
											<span className="line" />
											<p className="text">
												We are honored to be acknowledged as leaders in the field. These
												achievements inspire us to continue pushing
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-award tf-hover-icon">
											<div className="image hover-icon-2"><img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/item/award-1.png" data-src="/images/item/award-1.png" alt="" className="lazyload" /></div>
											<h5 className="name">
												<Link href="/#">
													Best Business Consulting <br />
													Agency 2018
												</Link>
											</h5>
											<span className="line" />
											<p className="text">
												We are honored to be acknowledged as leaders in the field. These
												achievements inspire us to continue pushing
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="wg-award tf-hover-icon">
											<div className="image hover-icon-2"><img
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/item/award-2.png" data-src="/images/item/award-2.png" alt="" className="lazyload" /></div>
											<h5 className="name">
												<Link href="/#">
													Best Business Consulting
													Agency 2020
												</Link>
											</h5>
											<span className="line" />
											<p className="text">
												We are honored to be acknowledged as leaders in the field. These
												achievements inspire us to continue pushing
											</p>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination award-pagination tf-pagination" />
							</Swiper>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
