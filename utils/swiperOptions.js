'use client'
import { Autoplay, Navigation, Pagination,EffectFade } from "swiper/modules"
export const sliderProject = {
	modules: [Autoplay, Pagination, Navigation],
	loop: true,
	slidesPerView: 2.137647058823529,
	spaceBetween: 85,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination.tf-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 1.3,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 1.5,
			spaceBetween: 30,
		},
		1440: { slidesPerView: 2 },
	},
}
export const sliderTeam = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 1.3,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		930: {
			slidesPerView: 3,
		},
		1070: {
			slidesPerView: 3.5,
		},

		1300: { slidesPerView: 4 },
	},
}

export const sliderBlog = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		651: {
			slidesPerView: 1.5,
		},

		850: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 2.5,
		},
		1200: { slidesPerView: 3 },
	},
	className: "swiper-container slider-blog",
}
export const sliderPartner = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 6,
	loop: true,
	autoplay: {
		pauseOnMouseEnter: true,
		delay: 0,
		disableOnInteraction: false,
	},
	speed: 7000,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		550: {
			slidesPerView: 2.5,
		},
		991: {
			slidesPerView: 4,
		},
		1600: {
			slidesPerView: 6,
		},
	},
}
export const sliderHome2 = {
	modules: [Autoplay, Pagination, Navigation,EffectFade],
	slidesPerView: 1,
	centeredSlides: true,
	effect: "fade",
	speed: 900,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination.style-3.tf-pagination",
		clickable: true,
	},
}
export const sliderService = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		930: {
			slidesPerView: 3,
		},
		1070: {
			slidesPerView: 3.5,
		},

		1300: { slidesPerView: 4 },
	},
	pagination: {
		el: ".service-pagination",
		clickable: true,
	},
}
export const sliderCase = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		991: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 3.5,
		},
		1600: { slidesPerView: 4 },
	},
}
export const sliderFeedback = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2,
	spaceBetween: 30,
	navigation: {
		prevEl: ".btn-slider-feedback.slide-prev",
		nextEl: ".btn-slider-feedback.slide-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 1.5,
		},
		991: {
			slidesPerView: 2,
		},
	},
}
export const sliderFeedback2 = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1.5,
	spaceBetween: 30,
	navigation: {
		prevEl: ".btn-feedback-2.slide-prev",
		nextEl: ".btn-feedback-2.slide-next",
	},
	pagination: {
		el: ".swiper-pagination.style-5.tf-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		991: {
			slidesPerView: 1.5,
		},
	},
}
export const sliderFeedback3 = {
	// modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 2.6,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 1.5,
		},
		991: {
			slidesPerView: 2,
		},
		1300: { slidesPerView: 2.6 },
	},
}
export const sliderBoxIcon = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		930: {
			slidesPerView: 3,
		},
		1070: {
			slidesPerView: 3.5,
		},

		1300: { slidesPerView: 4 },
	},
}
export const sliderService2 = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	speed: 300,
	pagination: {
		el: ".swiper-pagination.style-4.tf-pagination",
		clickable: true,
	},
	navigation: {
		prevEl: ".btn-service-2.slide-prev",
		nextEl: ".btn-service-2.slide-next",
	},
}
export const sliderCase2 = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		651: {
			slidesPerView: 1.5,
		},

		850: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 2.5,
		},
		1570: {
			slidesPerView: 3.5,
		},

		1800: { slidesPerView: 4 },
	},
}
export const sliderOurAdvisor = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 1.5,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		930: {
			slidesPerView: 3,
		},
		1070: {
			slidesPerView: 3.5,
		},

		1300: { slidesPerView: 4 },
	},
}
export const sliderFeature = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 5,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		991: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 4,
		},
		1600: {
			slidesPerView: 5,
		},
	},
}
export const sliderWorking = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		578: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2.5,
		},
		930: {
			slidesPerView: 3,
		},
		1070: {
			slidesPerView: 3.5,
		},

		1300: { slidesPerView: 4 },
	},
}
export const sliderTestimonial2 = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		prevEl: ".btn-slider-tesimonial.btn-prev",
		nextEl: ".btn-slider-tesimonial.btn-next",
	},
}
export const sliderAward = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		651: {
			slidesPerView: 1.5,
		},

		850: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 2.5,
		},
		1200: { slidesPerView: 3 },
	},
	pagination: {
		el: ".award-pagination",
		clickable: true,
	},
}
export const sliderCarousel = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		651: {
			slidesPerView: 1.5,
		},

		850: {
			slidesPerView: 2,
		},
		991: {},
		1200: { slidesPerView: 3 },
	},
	slidesPerView: 2.5,
	pagination: {
		el: ".carousel-pagination",
		clickable: true,
	},
}
