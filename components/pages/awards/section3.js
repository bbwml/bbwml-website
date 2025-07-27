
import Image from 'next/image'
import Link from 'next/link'
export default function Section3() {
	return (
		<>

			<section className="s-feedback-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-50">
								<p className="s-sub-title justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									customer feedback
								</p>
								<p className="s-title text-center text-anime-style-2">
									1380+ Customer
									<span>
										Say Us
									</span>
								</p>
							</div>
							<div className="grid-layout-2">
								<div className="wg-testimonial style-4 tf-hover">
									<div className="top">
										<div className="image hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-3.jpg" alt="" />
										</div>
										<div className="say">
											"Working with agency has been game changer for their
											business their team took the time to understand marketing
											strategy exceeded expectations."
										</div>
									</div>
									<div className="bot">
										<div className="flex">
											<Link href="/#" className="name fw-7"> Hyman A. Palacios </Link>
											<span> /CEO Founder </span>
										</div>
										<div className="star-rate">
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star1_2" />
										</div>
									</div>
								</div>
								<div className="wg-testimonial style-4 tf-hover">
									<div className="top">
										<div className="image hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-4.jpg" alt="" />
										</div>
										<div className="say">
											"Working with agency has been game changer for their
											business their team took the time to understand marketing
											strategy exceeded expectations."
										</div>
									</div>
									<div className="bot">
										<div className="flex">
											<Link href="/#" className="name fw-7"> Duane A. Johnson </Link>
											<span> /Graphics Designer </span>
										</div>
										<div className="star-rate">
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star1_2" />
										</div>
									</div>
								</div>
								<div className="wg-testimonial style-4 tf-hover">
									<div className="top">
										<div className="image hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-5.jpg" alt="" />
										</div>
										<div className="say">
											"Working with agency has been game changer for their
											business their team took the time to understand marketing
											strategy exceeded expectations."
										</div>
									</div>
									<div className="bot">
										<div className="flex">
											<Link href="/#" className="name fw-7"> Michael R. Martinez </Link>
											<span> /Business Developer </span>
										</div>
										<div className="star-rate">
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star1_2" />
										</div>
									</div>
								</div>
								<div className="wg-testimonial style-4 tf-hover">
									<div className="top">
										<div className="image hover-1">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												src="/images/avatar/testimonial-author-2.jpg" alt="" />
										</div>
										<div className="say">
											"Working with agency has been game changer for their
											business their team took the time to understand marketing
											strategy exceeded expectations."
										</div>
									</div>
									<div className="bot">
										<div className="flex">
											<Link href="/#" className="name fw-7"> Michael R. Martinez </Link>
											<span> /Business Developer </span>
										</div>
										<div className="star-rate">
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star" />
											<i className="icon-star1_2" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
