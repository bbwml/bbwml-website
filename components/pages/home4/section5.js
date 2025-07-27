
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'
export default function Section5() {
	return (
		<>

			<section className="s-funfact tf-spacing-3">
				<div className="tf-container">
					<div className="row">
						<div className="col-xl-5 col-lg-6">
							<div className="content">
								<p className="s-sub-title mb-15">
									<i className="icon-angles-right moveLeftToRight" />
									Shaping Success
								</p>
								<p className="s-title mb-50 text-anime-wave">
									Marketing Trivia: Facts That Fuel Our
									<span>
										Passion
									</span>
								</p>
								<p className="text mb-50">
									We remained focused on our core objectives and stayed adaptable to any challenges,
									ensuring that met our client’s goals efficiently and effectively strengthened
								</p>
								<Link href="/contact" className="tf-btn style-6 text-anime-style-1">
									Get Started
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
						<div className="col-xl-6 offset-xl-1 col-lg-6">
							<div className="content-right">
								<ul className="counter-list">
									<li>
										<div className="wg-counter style-8">
											<div className="odometer style-8"><CounterUp count={98} /></div>
										</div>
										<span className="sub">
											%
										</span>
										<p className="text">
											Customers are Satisfied <br />
											with the Services
										</p>
									</li>
									<li>
										<div className="wg-counter style-8">
											<div className="odometer style-8-2"><CounterUp count={5} /></div>
											<span className="sub-odo">
												k
											</span>
										</div>
										<span className="sub">
											+
										</span>
										<p className="text">
											We’re excited announce <br />
											successful completion
										</p>
									</li>
									<li>
										<div className="wg-counter style-8">
											<div className="odometer style-8-3"><CounterUp count={20} /></div>
										</div>
										<span className="sub">
											+
										</span>
										<p className="text">
											Experience Professional <br />
											Marketing Consultant
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
