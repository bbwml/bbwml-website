
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-404">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="image">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/item/404.png" data-src="/images/item/404.png" alt="" className="lazyload" />
								</div>
								<p className="not-found text-anime-wave">
									OPPS! Page Not Found
								</p>
								<p className="sub">
									It looks like the page you're looking for doesn’t exist or may have been moved.
									Don’t worry, we’re here to help! You can return to <br /> our homepage, explore our
									services, or contact us directly if you need assistance.
								</p>
								<Link href="/" className="tf-btn style-8 text-anime-style-1">
									Go to Home
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
