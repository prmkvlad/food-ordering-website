document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.reviews__arrow--next',
			prevEl: '.reviews__arrow--prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			}
		}
	});

});

// Burger menu

const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.body;

function topFunction() {
	document.scrollingElement.scrollTop = 0;
}

if (burger && menu) {
	burger.addEventListener('click', () => {
		topFunction();
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}

/*=================smooth scroll=================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
})