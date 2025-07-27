'use client'

import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useEffect } from 'react'

const HoverTextAnimation = () => {
	useEffect(() => {
		const hoverTextAnimate = () => {
			if (document.querySelectorAll(".hover-fade-text").length > 0) {
				document.querySelectorAll(".hover-fade-text").forEach((box) => {
					const textElement = box.querySelector(".text-anime-wave-2")
					if (textElement) {
						textElement.split = new SplitText(textElement, { type: "words" })
						gsap.set(textElement.split.words, {
							opacity: 0,
							y: "30px",
						})

						box.addEventListener("mouseenter", () => {
							gsap.to(textElement.split.words, {
								opacity: 1,
								y: "0",
								duration: 0.4,
								ease: "power1.out",
								stagger: 0.1,
							})
						})

						box.addEventListener("mouseleave", () => {
							gsap.to(textElement.split.words, {
								opacity: 0,
								y: "30px",
								duration: 0.4,
								ease: "power1.in",
								stagger: 0.1,
							})
						})
					}
				})
			}
		}

		hoverTextAnimate() // This is fine here inside useEffect

	}, []) // The effect only runs once when the component mounts

	return null
}

export default HoverTextAnimation
