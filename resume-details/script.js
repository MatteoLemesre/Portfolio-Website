// No-op: hero parallax removed in redesign.
// Null-guard preserved for safety on any page that still includes this file.
const heroText = document.querySelector('.hero-text');
if (heroText) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeEnd = window.innerHeight * 0.5;
    let opacity = 1 - scrollY / fadeEnd;
    opacity = Math.max(0, Math.min(1, opacity));
    heroText.style.opacity = opacity;
    heroText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;
  });
}
