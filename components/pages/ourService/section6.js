
'use client'
import { sliderPartner } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section6() {
	return (
		<>

			<section className="s-partner">
				<Swiper {...sliderPartner} className="swiper-container slider-partner">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/quora.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/quora.png" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/rakuten.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/rakuten.png" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/consumer_reports.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/consumer_reports.png" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/forbes.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/forbes.png" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/hubspot.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/hubspot.png" alt="" />
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="/#">
								<span className="tf-overlay" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img1" src="/images/partner/roku.png" alt="" />
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									className="img2" src="/images/partner/roku.png" alt="" />
							</Link>
						</SwiperSlide>
					</div>
				</Swiper>
			</section>

		</>
	)
}
