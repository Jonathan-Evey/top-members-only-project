const setUpObserver = () => {
	let headerContainer = document.querySelector(
		'.header__container'
	);

	let siteNav = document.querySelector('.nav__site');

	const mainObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				siteNav.classList.remove('fixed');
			}
			if (!entry.isIntersecting) {
				siteNav.classList.add('fixed');
			}
		});
	});
	mainObserver.observe(headerContainer);
};

export default setUpObserver;
