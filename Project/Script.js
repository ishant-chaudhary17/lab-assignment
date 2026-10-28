const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
if (nav && menu) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// Replace this placeholder with a public email before sharing the website.
const contactEmail = 'your-email@example.com';
const copy = document.getElementById('copyEmail');
const message = document.getElementById('contactMessage');
if (copy && message) copy.addEventListener('click', async () => {
  if (contactEmail === 'your-email@example.com') { message.textContent = 'Edit Script.js and replace your-email@example.com with your public email address.'; return; }
  try { await navigator.clipboard.writeText(contactEmail); message.textContent = 'Email copied to clipboard.'; }
  catch { message.textContent = `Contact email: ${contactEmail}`; }
});
const reveal = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  reveal.forEach(el => observer.observe(el));
} else reveal.forEach(el => el.classList.add('visible'));
const glow = document.getElementById('cursorGlow');
if (glow && window.matchMedia('(pointer:fine)').matches) window.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`;
}, { passive: true });
