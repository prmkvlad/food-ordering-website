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

	// hero section burger background animation

	let burgerAnimationIsPlayed = false;

	document.addEventListener('scroll', function () {
		const scrollPosition = window.scrollY;
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		const heroBottom = hero.offsetTop + hero.offsetHeight;

		// screen width check
		if (windowWidth >= 480 && !burgerAnimationIsPlayed) {
			const triggerPosition = heroBottom - 50 - windowHeight;
			const hero = document.querySelector('.hero');

			if (scrollPosition >= triggerPosition) {
				hero.classList.add('animate-burgers');
				burgerAnimationIsPlayed = true;
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

// custom datapicker implementation

const config = {
	altInput: true,
	altFormat: "j F, Y",
	dateFormat: "d-m-Y",
	minDate: "01-01-1900",
	maxDate: "today",
	disableMobile: "true"
}

flatpickr("#date", config);