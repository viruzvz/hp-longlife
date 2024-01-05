// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Remove the transition class
const count = document.querySelector('.status-fire-js');
count.classList.remove('animation');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      count.classList.add('animation');
      return;
    }

    count.classList.remove('animation');
  });
});

observer.observe(document.querySelector('.count-wrapper'));