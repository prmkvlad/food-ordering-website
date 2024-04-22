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
		},
		on: {
			slideChangeTransitionEnd: function () {
				resetReviews();
			},
		},
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

	// reviews show more button

	function resetReviews() {
		reviews.forEach(review => {
			const textContainer = review.querySelector('.review-card__text');
			const text = review.querySelector('.review-card__text p');
			const showMoreBtn = review.querySelector('.show-more-btn');

			if (text.textContent.length > 300 && !review.classList.contains('swiper-slide-active')) {
				textContainer.style.maxHeight = null;
				textContainer.style.overflow = 'hidden';
				showMoreBtn.textContent = 'Show More';
			}
		});
	}

	const reviews = document.querySelectorAll('.review-card');

	reviews.forEach(review => {
		const textContainer = review.querySelector('.review-card__text');
		const text = review.querySelector('.review-card__text p');
		const showMoreBtn = review.querySelector('.show-more-btn');

		if (text.textContent.length > 300) {
			showMoreBtn.style.display = 'inline-block';
		}

		showMoreBtn.addEventListener('click', function () {
			if (textContainer.style.maxHeight) {
				textContainer.style.maxHeight = null;
				textContainer.style.overflow = 'hidden';
			} else {
				textContainer.style.maxHeight = 'none';
				textContainer.style.overflow = 'visible';
			}
			showMoreBtn.textContent = textContainer.style.maxHeight ? 'Show Less' : 'Show More';
		});
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
	minDate: "today",
	maxDate: new Date().fp_incr(30),
	disableMobile: "true",
}

const dateInput = flatpickr("#date", config);
const fpInput = document.querySelector('.input');

fpInput.closest('form').addEventListener('submit', function (e) {
	if (!fpInput.value) {
		alert('Пожалуйста, введите дату.');
		e.preventDefault();
	}
});

// phone mask

const phoneInput = document.getElementById('phone');
const maskOptions = {
	mask: '+{38} (000) 000-00-00'
}

const mask = IMask(phoneInput, maskOptions);

// Phone number validation
phoneInput.addEventListener('input', function () {
	var value = this.value.replace(/\D/g, '');
	if (value.length < 10) {
		this.setCustomValidity('Enter the full phone number.');
	} else {
		this.setCustomValidity('');
	}
});

phoneInput.closest('form').addEventListener('submit', function (e) {
	if (!phoneInput.checkValidity()) {
		e.preventDefault();
	}
});