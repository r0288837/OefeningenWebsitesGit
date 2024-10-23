let lastScrollTop = 0;
      const navbar = document.getElementById('navbar');
  
      // Show or hide the navbar based on scroll direction
      window.addEventListener('scroll', function() {
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
          if (currentScroll > lastScrollTop) {
              // Scroll Down
              navbar.style.top = '-100px'; // Hide navbar (adjust this value based on your navbar height)
          } else {
              // Scroll Up
              navbar.style.top = '0'; // Show navbar
          }
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
      });