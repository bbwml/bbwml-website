"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Rellax from "rellax";

export default function Section2() {

	return (
		<section className="s-image-breakpage">
			<div className="tf-container w-1780">
				<div className="row">
					<div className="col-lg-12">
						<div className="content">
							<div className="bg-image">
								<div className="rellax type-2" style={{
									backgroundAttachment: "fixed", 
									backgroundPosition: "center", 
									backgroundSize: "cover", 
									backgroundImage: "url(/images/section/mission-2.jpg)",
									width: "100%",
									height: "100%",
									}}>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
