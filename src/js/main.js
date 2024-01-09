// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Remove the transition class
// const count = document.querySelector('.status-fire-js');
// count.classList.remove('animation');

// // Observa o contador, quando é visto inicia a contagem
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       count.classList.add('animation');
//       return;
//     }

//     count.classList.remove('animation');
//   });
// });

// observer.observe(document.querySelector('.count-wrapper'));



// Observa o contador, quando é visto inicia a contagem
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".status-fire-js");

    if (entry.isIntersecting) {
      square.classList.add("animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove("animation");
  });
});

let elements = document.querySelectorAll(".count-wrapper");
for (let element of elements) {
  observer.observe(element);
}


// Mudanças no carousel bootstrap, controle de cards em vez de slides
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