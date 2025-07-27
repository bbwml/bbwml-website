
import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
export default function Section3() {
	return (
		<>

			<section className="s-cta-2">
				<div className="image">
					<Image
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						src="/images/section/cta-2.jpg" data-src="/images/section/cta-2.jpg" alt="" className="lazyload" />
				</div>
				<div className="content">
					<p className="s-title mb-40 text-white text-anime-wave">
						Path to Marketing
						<span>
							Excellence
						</span>
					</p>
					<p className="text mb-50 text-white">
						We engaged Agency to help us revitalize our marketing efforts, and the results have been
						outstanding. expertise in digital marketing and brand strategy
					</p>
					<div className="bot">
						<div className="counter-wrap style-4">
							<div className="relative">
								<div className="circle-container style-2">
									<svg className="circle" width={86} height={86} viewBox="0 0 86 86">
										<circle cx={43} cy={43} r={39} stroke="transparent" strokeWidth={2} fill="none" />
										<circle className="progress-circle-86" cx={43} cy={43} r={39} strokeWidth={2} fill="none" />
									</svg>
								</div>
								<div className="wg-counter style-7">
									<div className="odometer style-7"><CounterUp count={98} /></div>
									<span className="sub-odo">%</span>
								</div>
							</div>
							<h6 className="sub-counter">
								Business Growth
							</h6>
						</div>
						<div className="counter-wrap style-4">
							<div className="relative">
								<div className="circle-container style-2">
									<svg className="circle" width={86} height={86} viewBox="0 0 86 86">
										<circle cx={43} cy={43} r={39} stroke="transparent" strokeWidth={2} fill="none" />
										<circle className="progress-circle-86" cx={43} cy={43} r={39} strokeWidth={2} fill="none" />
									</svg>
								</div>
								<div className="wg-counter style-7">
									<div className="odometer style-7-2"><CounterUp count={86} /></div>
									<span className="sub-odo">%</span>
								</div>
							</div>
							<h6 className="sub-counter">
								Marketing Strategy
							</h6>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
