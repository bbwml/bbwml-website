'use client'
import { useEffect } from 'react'

const animateImgItem = () => {
	useEffect(() => {
		const handleScroll = () => {
			const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

			const elements = document.querySelectorAll(".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4")

			elements.forEach((element) => {
				const sectionOffsetTop = element.getBoundingClientRect().top + window.scrollY
				const sectionHeight = element.offsetHeight
				const scrollPosition = window.scrollY
				const windowHeight = window.innerHeight

				let hasClassAdded = false // Variable to track if the class has been added

				if (
					!hasClassAdded &&
					scrollPosition + windowHeight > sectionOffsetTop + 20 &&
					scrollPosition < sectionOffsetTop + sectionHeight - 20
				) {
					element.classList.add("active-animate")
					hasClassAdded = true // Mark class as added
				}
			})
		}

		window.addEventListener("scroll", handleScroll)

		// Cleanup on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
}

export default animateImgItem
