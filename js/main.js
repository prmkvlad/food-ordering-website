document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		slidesPerView: 2,
		navigation: {
			nextEl: '.reviews__arrow--next',
			prevEl: '.reviews__arrow--prev',
		},


	});

});

// Burger menu

const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.body;

function topFunction() {
	body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

if (burger && menu) {
	burger.addEventListener('click', () => {
		topFunction();
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}