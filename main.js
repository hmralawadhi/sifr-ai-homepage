
// Basic UX hooks
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
