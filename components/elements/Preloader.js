import Image from "next/image"

export default function Preloader() {
	return (
		<>

			<div id="loading">
				<div id="loading-center">
					<div className="loader-container">
						<div className="wrap-loader">
							<div className="loader">
							</div>
							<div className="icon">
								<Image
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: "100%", height: "auto" }}
									src="/images/logo/logo3x.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
