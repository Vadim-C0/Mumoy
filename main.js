document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle hamburger menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // CTA buttons scroll to demo section
  document.querySelectorAll(".btn-cta").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "#book-demo";
    });
  });
});
