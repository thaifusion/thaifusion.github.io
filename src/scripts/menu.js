const button = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

button?.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isExpanded));
  navLinks?.classList.toggle('open');
});