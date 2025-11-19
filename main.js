document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle hamburger menu
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the click from bubbling up
    navLinks.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("show") &&
      !navLinks.contains(e.target) &&
      e.target !== hamburger
    ) {
      navLinks.classList.remove("show");
    }
  });

  // Close menu when clicking any link inside nav
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // CTA buttons scroll to demo section
  document.querySelectorAll(".btn-cta").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "#book-demo";
    });
  });
});
