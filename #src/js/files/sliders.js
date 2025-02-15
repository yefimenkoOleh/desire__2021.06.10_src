// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.main-slider')) {
	let sliderMainBody = new Swiper('.slider-main__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 25,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		lazy: true,
		autoplay: {
			delay: 2000,
		},
		// Dotts
		pagination: {
			el: '.slider-main__dotts',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}

if (document.querySelector('.slider-contact')) {
	let sliderContactBody = new Swiper('.slider-contact__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 10,
		spaceBetween: 25,
		autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		lazy: true,
		autoplay: {
			delay: 2000,
		},
		// Dotts
		pagination: {
			el: '.slider-contact__dotts',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 10,
				autoHeight: true,
			},
			550: {
				slidesPerView: 3,
				spaceBetween: 10,
				autoHeight: true,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
			1500: {
				slidesPerView: 7,
				spaceBetween: 5,
			},
			1620: {
				slidesPerView: 8,
				spaceBetween: 5,
			},
			1920: {
				slidesPerView: 10,
				spaceBetween: 10,
			},
		},

		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
		//},
	});
}



if (document.querySelector('.gallery')) {
	// MixItUp
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});
}



// if (document.querySelector('.main-slider')) { //=====> Проверка на блок в котором есть слайдер
// 	let sliderMainBody = new Swiper('.slider-main__body', {
// 		/*
// 		effect: 'fade',
// 		autoplay: {
// 			delay: 3000,
// 			disableOnInteraction: false,
// 		},
// 		*/
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		spaceBetween: 0,
// 		autoHeight: true,
// 		speed: 800,
// 		//touchRatio: 0,
// 		//simulateTouch: false,
// 		//loop: true,
// 		//preloadImages: false,
// 		lazy: true,
// 		////==============> Dotts
// 		pagination: {
// 			el: '.slider-main__dotts',
// 			clickable: true, //===> включает нажатие на кнопки
// 			dynamicBullets: true, // булеты меняют размер (выбранный самый большой)
// 		},
// 		//==============> Arrows
// 		// navigation: {
// 		// 	nextEl: '.about__more .more__item_next',
// 		// 	prevEl: '.about__more .more__item_prev',
// 		// },
// 		/*
// 		//==============> breakpoints
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 				autoHeight: true,
// 			},
// 			768: {
// 				slidesPerView: 2,
// 				spaceBetween: 20,
// 			},
// 			992: {
// 				slidesPerView: 3,
// 				spaceBetween: 20,
// 			},
// 			1268: {
// 				slidesPerView: 4,
// 				spaceBetween: 30,
// 			},
// 		},
// 		*/
// 		on: {
// 			lazyImageReady: function () {
// 				ibg();
// 			},
// 		}
// 		// And if we need scrollbar
// 		//scrollbar: {
// 		//	el: '.swiper-scrollbar',
// 		//},
// 	});
// }
