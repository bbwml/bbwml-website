
import Image from 'next/image'
import Link from 'next/link'
export default function Hero3() {
	return (
		<>

			<div className="page-title-home-3">
				<div className="wrap">
					<div className="content-left">
						<p className="s-title text-70-84 text-white text-anime-wave">
							Empowering You <br />
							to Achieve Financial <br />
							Freedom by
							<span>
								Saylo
							</span>
						</p>
						<p className="text mb-30">
							Financial advisor plays a crucial role in helping individuals and businesses <br /> navigate the
							complexities of managing their finances and achieving
						</p>
						<Link href="/#" className="tf-btn style-15 text-anime-style-1">
							Free Consultation
							<i className="icon-chevron-right" />
						</Link>
					</div>
					<div className="image-right">
						<div className="image">
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/page-title/page-title-home-3.jpg" data-src="/images/page-title/page-title-home-3.jpg" alt="" className="lazyload" />
						</div>
						<div className="image-item  img-item-1 default rellax" data-rellax-speed="0.5">
							<div className=" wow zoomIn">
								<h6 className="caption mb-20">2 more steps to finish</h6>
								<div className="relative">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "auto", height: "auto" }}
										src="/images/item/finish.png" data-src="/images/item/finish.png" alt="" className="lazyload" />
									<p className="number">
										50%
									</p>
								</div>
							</div>
						</div>
						<div className="image-item img-item-2 default rellax" data-rellax-speed="-0.5">
							<div className="wow zoomIn">
								<h6 className="caption">Sales Performance</h6>
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/item/graph-2.jpg" data-src="/images/item/graph-2.jpg" alt="" className="lazyload" />
								<div className="bot">
									<p className="percent">
										30%
									</p>
									<p className="text">
										Your sales performance is 30%
										better compare to last month
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item-group">
					<div className="item item-1" />
					<div className="item item-2" />
					<div className="item item-3" />
				</div>
			</div>

		</>
	)
}
