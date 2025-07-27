"use client"
import { useEffect, useState } from "react"

export default function BackToTop({ target }) {
	const [hasScrolled, setHasScrolled] = useState(false)
	const [progress, setProgress] = useState(307.919) // Total stroke length

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const scrollPercentage = (scrollTop / docHeight) * 100
			const newOffset = 307.919 - (scrollPercentage / 100) * 307.919 // Update strokeDashoffset

			setHasScrolled(scrollTop > 100)
			setProgress(newOffset)
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: document.querySelector(target).offsetTop,
			behavior: "smooth",
		})
	}

	return (
		<>
			{hasScrolled && (
				<div className="progress-wrap active-progress" onClick={handleClick}>
					<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
						<path
							d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
							style={{
								transition: "stroke-dashoffset 10ms linear",
								strokeDasharray: "307.919, 307.919",
								strokeDashoffset: progress, // Dynamically update offset
							}}
						></path>
					</svg>
				</div>
			)}
		</>
	)
}
