const dropdown = document.querySelector(".dropdown");
const servicesLink = document.querySelector(".services-link");
const megaMenu = document.getElementById("megaMenu");
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

/* -----------------------------
   DESKTOP DROPDOWN (Hover)
------------------------------ */
function handleHover() {
  if (window.innerWidth > 992) {
    megaMenu.classList.add("show");
  }
}

function handleLeave() {
  if (window.innerWidth > 992) {
    megaMenu.classList.remove("show");
  }
}

/* -----------------------------
   MOBILE DROPDOWN (Tap)
------------------------------ */
function toggleMobileDropdown(e) {
  if (window.innerWidth <= 992) {
    e.preventDefault();
    megaMenu.classList.toggle("show");
  }
}

/* -----------------------------
   MOBILE MENU TOGGLE
   (Hamburger → X)
------------------------------ */
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");

  if (navUl.classList.contains("active")) {
    menuToggle.innerHTML = "&times;"; // X
  } else {
    menuToggle.innerHTML = "&#9776;"; // Hamburger
    megaMenu.classList.remove("show"); // Close dropdown on close
  }
});

/* -----------------------------
   RESET ON RESIZE
------------------------------ */
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    // Reset for desktop
    navUl.classList.remove("active");
    megaMenu.classList.remove("show");
    menuToggle.innerHTML = "&#9776;";
  }
});

/* -----------------------------
   EVENT LISTENERS
------------------------------ */
if (dropdown) {
  dropdown.addEventListener("mouseenter", handleHover);
  dropdown.addEventListener("mouseleave", handleLeave);
  servicesLink.addEventListener("click", toggleMobileDropdown);
}

// Close dropdown when a menu link is clicked on mobile
document.querySelectorAll(".dropdown-menu a").forEach(item => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      megaMenu.classList.remove("show");
      navUl.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
    }
  });
});

//active link switch on scroll
// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // offset for header
    const sectionId = section.getAttribute('id');

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + sectionId){
          link.classList.add('active');
        }
      });
    }
  });
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


// document.addEventListener('DOMContentLoaded', function() {
//   const modal = document.getElementById('partnerModal');
//   const btn = document.getElementById('partnerBtn');
//   const closeBtn = document.querySelector('.close-btn');

//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     modal.style.display = 'flex';
//   });

//   closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', (e) => {
//     if (e.target === modal) modal.style.display = 'none';
//   });
// });
