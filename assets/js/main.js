// Function to smooth scroll to the target section
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const offset = element.getBoundingClientRect().top;
      window.scrollBy({
        top: offset,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  
  // Event listener for navigation links
  document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const targetSection = event.target.getAttribute('href');
      smoothScroll(targetSection);
    }
  });
  