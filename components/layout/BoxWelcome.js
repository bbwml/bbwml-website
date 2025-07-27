import Image from "next/image"
import Link from "next/link"
export default function BoxWelcome({ handleWelcomeBox, isWelcomeBox }) {
	return (
		<>


			<div className={`box-welcome ${isWelcomeBox ? "active" : ""}`}>
				<div className="tf-overlay" onClick={handleWelcomeBox} />
				<div className="popular-wrap">
					<div className="btn-close-welcome" onClick={handleWelcomeBox}>
						<i className="icon-xmark" />
					</div>
					<div className="wrap">
						<p className="title">
							Saylo Construction
						</p>
						<p className="text">
							Nam augue velit, fermentum sed erat non, efficitur interdum lectus. Donec hendrerit lorem a dui
							euismod tempus. Vivamus auctor blandit tellus et interdum.
						</p>
					</div>
					<div className="wrap">
						<p className="title">
							Contact Us
						</p>
						<ul className="contact-list mb-20">
							<li>
								<p>
									Address: <Link href="https://www.google.com/maps?q=55East10thStreet,NewYork,NY10003,UnitedStates" target="_blank">
										55 East 10th Street, New York, NY 10003, United States
									</Link>
								</p>
							</li>
							<li>
								<p>
									Email: <Link href="mailto:themesflat@gmail.com">
										themesflat@gmail.com
									</Link>
								</p>
							</li>
							<li>
								<p>
									Call: <Link href="/tel:+00012345688">
										+000 (123) 456 88
									</Link>
								</p>
							</li>
						</ul>
						<ul className="social-list">
							<li>
								<Link href="/#">
									<i className="icon-facebook" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-twitter" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-linkedin" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="icon-youtube" />
								</Link>
							</li>
						</ul>
					</div>
					<div className="gallery-image">
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-1.jpg" data-src="/images/widget/card-service-1.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-2.jpg" data-src="/images/widget/card-service-2.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-3.jpg" data-src="/images/widget/card-service-3.jpg" alt="" className="lazyload" />
							</Link>
						</div>
						<div className="image tf-hover">
							<Link href="/#" className="hover-1 hover-2">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/widget/card-service-4.jpg" data-src="/images/widget/card-service-4.jpg" alt="" className="lazyload" />
							</Link>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
