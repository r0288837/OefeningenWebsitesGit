document.addEventListener('DOMContentLoaded', () => {
    const starRatings = document.querySelectorAll('.star-rating');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const ratingBar = entry.target;
          const delay = parseInt(ratingBar.getAttribute('data-delay'));
  
          // Show the star rating bar
          ratingBar.classList.add('show');
  
          // Show each star with a delay
          const stars = ratingBar.querySelectorAll('.star');
          stars.forEach((star, index) => {
            setTimeout(() => {
              star.classList.add('show');
            }, delay + index * 200); // Delay for each star
          });
        }
      });
    });
  
    starRatings.forEach(rating => {
      observer.observe(rating);
    });
  });