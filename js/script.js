/* =======================================================
   NAVIGATION & MEGA MENU
======================================================= */
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
------------------------------ */
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");

  if (navUl.classList.contains("active")) {
    menuToggle.innerHTML = "&times;";
  } else {
    menuToggle.innerHTML = "&#9776;";
    megaMenu.classList.remove("show");
  }
});

/* -----------------------------
   RESET ON RESIZE
------------------------------ */
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navUl.classList.remove("active");
    megaMenu.classList.remove("show");
    menuToggle.innerHTML = "&#9776;";
  }
});

/* -----------------------------
   EVENT LISTENERS FOR MENU
------------------------------ */
if (dropdown) {
  dropdown.addEventListener("mouseenter", handleHover);
  dropdown.addEventListener("mouseleave", handleLeave);
  servicesLink.addEventListener("click", toggleMobileDropdown);
}

/* Close dropdown when link is clicked on mobile */
document.querySelectorAll(".dropdown-menu a").forEach(item => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      megaMenu.classList.remove("show");
      navUl.classList.remove("active");
      menuToggle.innerHTML = "&#9776;";
    }
  });
});

/* =======================================================
   ACTIVE NAV LINK ON SCROLL
======================================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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
   HERO SLIDER TEXT (OLD SLIDER)
======================================================= */
const textSlides = document.querySelectorAll(".slider-text .slide");
let textIndex = 0;

function showNextTextSlide() {
  if (textSlides.length > 0) {
    textSlides[textIndex].classList.remove("active");
    textIndex = (textIndex + 1) % textSlides.length;
    textSlides[textIndex].classList.add("active");
  }
}

setInterval(showNextTextSlide, 4000);

let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slide");

function moveToSlide(nextIndex) {
  let current = slideIndex;
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

setInterval(() => {
  moveToSlide(slideIndex + 1);
}, 7000);

/* =======================================================
   COUNTER ANIMATION
======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  const callback = (entries, observer) => {
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
  };

  const observer = new IntersectionObserver(callback, options);
  counters.forEach(counter => observer.observe(counter));
});

/* =======================================================
   MARKET PAGE – CARD REVEAL
======================================================= */
const cards = document.querySelectorAll(".m-card");
const reveal = () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add("fade-up");
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* =======================================================
   CONTACT FORM HANDLER
======================================================= */
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
});
