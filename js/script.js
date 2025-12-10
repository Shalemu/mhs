/* =======================================================
   UNIVERSAL NAVIGATION & MEGA MENU SYSTEM
======================================================= */

/* Dropdown Links + Their Mega Menus */
const dropdownLinks = document.querySelectorAll(".dropdown-link");
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

/* ------------------------------------
   UNIVERSAL DROPDOWN HANDLING
------------------------------------ */
dropdownLinks.forEach(link => {
  const targetId = link.getAttribute("data-target");
  const menu = document.getElementById(targetId);
  const parent = link.parentElement;

  /* Desktop Hover */
  parent.addEventListener("mouseenter", () => {
    if (window.innerWidth > 992) {
      closeAllDropdowns();
      menu.classList.add("show");
    }
  });

  parent.addEventListener("mouseleave", () => {
    if (window.innerWidth > 992) {
      menu.classList.remove("show");
    }
  });

  /* Mobile Tap */
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      menu.classList.toggle("show");
    }
  });
});

/* Close all dropdowns */
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
}

/* Close dropdown when item is clicked on mobile */
document.querySelectorAll(".dropdown-menu a").forEach(item => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      closeAllDropdowns();
      navUl.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
    }
  });
});

/* ------------------------------------
   MOBILE MENU TOGGLE
------------------------------------ */
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
  closeAllDropdowns();

  menuToggle.innerHTML = navUl.classList.contains("active")
    ? "&times;"
    : "&#9776;";
});

/* ------------------------------------
   RESET ON RESIZE
------------------------------------ */
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navUl.classList.remove("active");
    closeAllDropdowns();
    menuToggle.innerHTML = "&#9776;";
  }
});

/* =======================================================
   ACTIVE NAV LINK ON SCROLL
======================================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const height = section.offsetHeight;
    const top = section.offsetTop - 100;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});

/* =======================================================
   HERO SLIDER
======================================================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slide");

function moveToSlide(nextIndex) {
  const current = slideIndex;
  let next = nextIndex;

  if (next >= slides.length) next = 0;
  if (next < 0) next = slides.length - 1;

  slides[current].classList.remove("active");
  slides[current].classList.add("out-left");

  setTimeout(() => {
    slides[current].classList.remove("out-left");
  }, 1000);

  slides[next].classList.add("active");
  slideIndex = next;
}

document.querySelector(".next").addEventListener("click", () => {
  moveToSlide(slideIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  moveToSlide(slideIndex - 1);
});

/* Auto Slide */
setInterval(() => {
  moveToSlide(slideIndex + 1);
}, 30000);

/* =======================================================
   COUNTER ANIMATION
======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const increment = target / 100;
        let current = 0;

        const update = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(update);
          } else {
            counter.textContent =
              target >= 1000 ? target.toLocaleString() + "+" : target + "+";
          }
        };

        update();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
});

/* =======================================================
   MARKET PAGE – CARD REVEAL
======================================================= */
const cards = document.querySelectorAll(".m-card");

function revealCards() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add("fade-up");
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

/* =======================================================
   CONTACT FORM
======================================================= */
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
});
