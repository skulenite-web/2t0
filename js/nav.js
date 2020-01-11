window.onscroll = () => {
	const nav = document.querySelector('.navbar');
	if(this.scrollY <= 50) nav.className = 'navbar sticky-top navbar-expand-md navbar-dark py-3'; else nav.className = 'navbar sticky-top navbar-expand-md navbar-dark py-3 scrolled';
};