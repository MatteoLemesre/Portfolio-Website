function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const isOpen = details.style.display === "block";
  details.style.display = isOpen ? "none" : "block";
  btn.textContent = isOpen ? "More details ↓" : "Less details ↑";
}

const logo = document.querySelector(".logo");
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const maxScroll = window.innerHeight;

    const progress = Math.min(scroll / maxScroll, 1);

    // logo qui se réduit + disparaît
    logo.style.transform = `scale(${1 - progress * 0.5})`;
    logo.style.opacity = `${1 - progress}`;
  });

const article = document.querySelector(".article");
article.style.transform = `translateY(${100 - progress * 100}px)`;
