const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeEnd = window.innerHeight * 0.5;

  let opacity = 1 - scrollY / fadeEnd;
  opacity = Math.max(0, Math.min(1, opacity));

  heroText.style.opacity = opacity;

  heroText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;
});