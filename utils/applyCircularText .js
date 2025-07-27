'use client'
import { useEffect } from "react"

const applyCircularText = () => {
	if (typeof document !== "undefined") {
		const curveText = document.querySelector(".wg-curve-text")
		const rotateText = document.querySelectorAll(".text-rotate .text")

		if (curveText && rotateText.length > 0) {
			const text = "Investment - Asset - Management -"
			const chars = text.split("")
			const degree = 360 / chars.length

			rotateText.forEach((element) => {
				element.innerHTML = ""
				chars.forEach((char, i) => {
					const span = document.createElement("span")
					span.textContent = char
					span.style.transform = `rotate(${i * degree}deg)`
					element.appendChild(span)
				})
			})
		}
	}
}

export const useCircularTextEffect = () => {
	useEffect(() => {
		applyCircularText()
	}, [])
}
