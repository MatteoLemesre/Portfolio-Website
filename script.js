const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch(this.action, {
      method: "POST",
      body: new FormData(this),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
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
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
}
