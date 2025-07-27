import CounterUp from "@/components/elements/CounterUp"

export default function Section2() {
	return (
		<>

			<section className="s-counter">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<h3 className="title">
									From strategy <br />
									to delivery
								</h3>
								<div className="counter-wrap">
									<div className="wg-counter style-2">
										<div className="odometer style-2"><CounterUp count={18} /></div>
										<span className="sub-odo">k</span>
										<span className="sub-odo">+</span>
									</div>
									<p className="sub-counter">
										We are proud to have successfully <br /> completed project delivering
									</p>
								</div>
								<div className="counter-wrap">
									<div className="wg-counter style-2">
										<div className="odometer style-2-2"><CounterUp count={93} /></div>
										<span className="sub-odo">%</span>
									</div>
									<p className="sub-counter">
										We over challenges, optimized <br /> resources achieved measurable </p>
								</div>
								<div className="counter-wrap">
									<div className="wg-counter style-2">
										<div className="odometer style-2-3"><CounterUp count={27} /></div>
										<span className="sub-odo">+</span>
									</div>
									<p className="sub-counter">
										We are excited about the impact <br /> this work will have look. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
