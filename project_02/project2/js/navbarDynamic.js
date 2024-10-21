
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide the navbar
    navbar.style.top = '-80px'; // Adjust based on your navbar height
  } else {
    // Scrolling up - show the navbar
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});