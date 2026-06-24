document.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;

  const button = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  if (!button || !navLinks) return;

  if (target.closest(".menu")) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("open");
    return;
  }

  if (target.closest(".nav-links a")) {
    navLinks.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }
});