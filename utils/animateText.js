"use client";
import gsap from "gsap";
import { useEffect } from "react";

const animateText = () => {
	// useEffect(() => {
	// 	const animateText = () => {
	// 		if (window.innerWidth <= 767) {
	// 			document.querySelectorAll(
	// 				".text-anime-style-1, .text-anime-style-2, .text-anime-wave"
	// 			).forEach((element) => {
	// 				gsap.set(element, { clearProps: "all" });
	// 			});
	// 			return;
	// 		}

	// 		// Function to split text while preserving <br> and icons
	// 		const wrapTextInSpans = (element) => {
	// 			const nodes = Array.from(element.childNodes);
	// 			element.innerHTML = ""; // Clear content

	// 			nodes.forEach((node) => {
	// 				if (node.nodeType === Node.TEXT_NODE) {
	// 					// Split text into words while keeping spaces
	// 					node.textContent.split(/(\s+)/).forEach((word) => {
	// 						if (word.trim()) {
	// 							const span = document.createElement("span");
	// 							span.innerText = word;
	// 							element.appendChild(span);
	// 						} else {
	// 							element.appendChild(document.createTextNode(word));
	// 						}
	// 					});
	// 				} else {
	// 					// Append <br>, <i>, <svg>, or any other non-text nodes directly
	// 					element.appendChild(node);
	// 				}
	// 			});
	// 		};

	// 		// Animate text-anime-style-1
	// 		document.querySelectorAll(".text-anime-style-1").forEach((element) => {
	// 			wrapTextInSpans(element);
	// 			gsap.fromTo(
	// 				element.querySelectorAll("span"),
	// 				{ opacity: 0, scale: 1.5, transformOrigin: "center center" },
	// 				{
	// 					opacity: 1,
	// 					scale: 1,
	// 					duration: 1,
	// 					ease: "power2.out",
	// 					stagger: 0.1,
	// 					scrollTrigger: {
	// 						trigger: element,
	// 						start: "top 90%",
	// 						toggleActions: "play reverse play reverse",
	// 					},
	// 				}
	// 			);
	// 		});

	// 		// Animate text-anime-style-2
	// 		document.querySelectorAll(".text-anime-style-2").forEach((element) => {
	// 			const lines = element.innerHTML.split("\n");
	// 			element.innerHTML = ""; // Clear existing content
	// 			lines.forEach((line) => {
	// 				const lineDiv = document.createElement("div");
	// 				lineDiv.innerHTML = line; // Preserve HTML inside lines
	// 				element.appendChild(lineDiv);
	// 			});
	// 			gsap.fromTo(
	// 				element.querySelectorAll("div"),
	// 				{ opacity: 0, y: 30 },
	// 				{
	// 					opacity: 1,
	// 					y: 0,
	// 					duration: 1,
	// 					ease: "power2.out",
	// 					stagger: 0.1,
	// 					scrollTrigger: {
	// 						trigger: element,
	// 						start: "top 90%",
	// 						toggleActions: "play reverse play reverse",
	// 					},
	// 				}
	// 			);
	// 		});

	// 		// Animate text-anime-wave
	// 		document.querySelectorAll(".text-anime-wave").forEach((element) => {
	// 			const chars = element.innerHTML.split(""); // Preserve HTML
	// 			element.innerHTML = ""; // Clear existing content
	// 			chars.forEach((char) => {
	// 				if (char === " ") {
	// 					element.appendChild(document.createTextNode(" "));
	// 				} else {
	// 					const charSpan = document.createElement("span");
	// 					charSpan.innerHTML = char; // Use innerHTML to preserve elements
	// 					element.appendChild(charSpan);
	// 				}
	// 			});
	// 			gsap.fromTo(
	// 				element.querySelectorAll("span"),
	// 				{ opacity: 0, y: 30 },
	// 				{
	// 					opacity: 1,
	// 					y: 0,
	// 					duration: 0.6,
	// 					ease: "back",
	// 					stagger: { amount: 1, from: "start", ease: "sine.inOut" },
	// 					scrollTrigger: {
	// 						trigger: element,
	// 						start: "top 85%",
	// 						toggleActions: "play none none none",
	// 					},
	// 				}
	// 			);
	// 		});
	// 	};

	// 	animateText();
	// 	window.addEventListener("resize", animateText);

	// 	return () => {
	// 		window.removeEventListener("resize", animateText);
	// 	};
	// }, []);
};

export default animateText;
