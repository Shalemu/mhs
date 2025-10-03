document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function showSections(target) {
    sections.forEach(section => {
      section.classList.remove("active");
      section.style.display = "none";
    });

    if (target === "home") {
      // Show ALL sections except team
      sections.forEach(section => {
        if (section.id !== "team") {
          section.style.display = "block";
          setTimeout(() => section.classList.add("active"), 10);
        }
      });
    } 
    else if (target === "about") {
      // Show About + Team
      ["about", "team"].forEach(id => {
        const s = document.getElementById(id);
        s.style.display = "block";
        setTimeout(() => s.classList.add("active"), 10);
      });
    } 
    else {
      // Show only selected section
      const s = document.getElementById(target);
      if (s) {
        s.style.display = "block";
        setTimeout(() => s.classList.add("active"), 10);
      }
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const target = link.getAttribute("data-target");
      showSections(target);
    });
  });

  // Default load = Home
  showSections("home");
});
