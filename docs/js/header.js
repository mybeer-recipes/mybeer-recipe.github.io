var animatedHeader = (function () {

	var docElem = document.documentElement,
		header = document.querySelector('.navbar.fixed-top'),
		didScroll = false,
		changeHeaderOn = 90,
		navbarBtn = document.querySelector('.navbar-toggler'),
		navbar = document.querySelector('.navbar-collapse')

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);

		menu();
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			header.classList.add('navbar-shrink');
		} else {
			header.classList.remove('navbar-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	function menu() {
		navbarBtn.addEventListener('click', (event) => {
			event.stopPropagation();
			navbar.classList.toggle('show');


			var sy = scrollY();
			if (sy >= changeHeaderOn) {} else {
				header.classList.toggle('navbar-shrink');
			}

			var onClick = function (event) {
				navbar.classList.toggle('show');
				document.removeEventListener("click", onClick);

			}

			document.addEventListener('click', onClick);
		});
	}

	init();

})();