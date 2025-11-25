// Hamburger toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.getElementById('nav-ul');
const toggleIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
  toggleIcon.classList.toggle('fa-bars');
  toggleIcon.classList.toggle('fa-times');
});

// Mobile dropdown toggle
const dropdownLink = document.querySelector('li.dropdown > a');
dropdownLink.addEventListener('click', (e) => {
  if(window.innerWidth <= 992){
    e.preventDefault();
    dropdownLink.parentElement.classList.toggle('active');
  }
});

// Sticky header shadow
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
 // end of navlink


// hero section
    
const slides = document.querySelectorAll('.slider-text .slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 4000);


// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const increment = target / 100; // smooth animation
        let current = 0;

        const update = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + '+';
          }
        };
        update();
        observer.unobserve(counter);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  counters.forEach(counter => observer.observe(counter));
});

// market page


  const cards = document.querySelectorAll('.m-card');
  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < trigger) card.classList.add("fade-up");
    });
  };
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);

  // contact us section
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Your message has been sent successfully!");
});


