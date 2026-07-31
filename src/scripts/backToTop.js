function initializeBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!(button instanceof HTMLButtonElement)) return;

  const toggleVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 300);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
}

document.addEventListener("astro:page-load", initializeBackToTop);
initializeBackToTop();