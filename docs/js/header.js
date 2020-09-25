var animatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		didScroll = false,
		changeHeaderOn = 100;
		


	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.classList.add('navbar-shrink' );
		}
		else {
			header.classList.remove('navbar-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

var navBar = (function() {

	navbarBtn = document.querySelector( '.navbar-toggle' ),
	navbar = document.querySelector( '.navbar-collapse' );
		
	function init() {
		navbarBtn.addEventListener( 'click', function( event ) {
			navbar.classList.toggle('show' );
		}, false );
	}

	init();

})();