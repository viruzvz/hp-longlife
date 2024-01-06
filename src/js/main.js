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

let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})