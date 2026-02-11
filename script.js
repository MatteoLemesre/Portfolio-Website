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
    logo.style.transform = `scale(${1 - progress * 0.5})`;
    logo.style.opacity = `${1 - progress}`;
  });

const article = document.querySelector(".article");
article.style.transform = `translateY(${100 - progress * 100}px)`;


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("successMessage").style.display = "block";
      this.reset();
      setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
      }, 5000);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
});
