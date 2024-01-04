// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Remove the transition class
const square = document.querySelector('.status-fire-js');
square.classList.remove('here');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('here');
      return;
    }

    square.classList.remove('here');
  });
});

observer.observe(document.querySelector('.square-wrapper'));