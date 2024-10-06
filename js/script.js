const button = document.getElementById("toggleBtn");
const biodataCard = document.getElementById("biodata-card");
const eyeIcon = document.getElementById("eyeIcon");
const contentCaption = document.querySelector("main .content .about-caption");

// Initialize the visibility state
let isVisible = false;

button.addEventListener("click", () => {
  isVisible = !isVisible;

  if (isVisible) {
    // Fade out and hide biodata
    setTimeout(() => {
      biodataCard.classList.add("visible");
      button.textContent = "Hide Biodata";
    }, 100);
  } else {
    // Show biodata
    setTimeout(() => {
      biodataCard.classList.remove("visible");
      button.textContent = "Show Biodata";
    }, 100);
  }

  if (window.innerWidth > 768) {
    if (contentCaption.style.width === "80%") {
      contentCaption.style.opacity = "1"; // Fade out
      setTimeout(() => {
        contentCaption.style.width = "100%";
        contentCaption.style.opacity = "1"; // Fade in
      }, 100);
    } else {
      contentCaption.style.opacity = "1"; // Fade out
      setTimeout(() => {
        contentCaption.style.width = "80%";
        contentCaption.style.opacity = "1"; // Fade in
      }, 100);
    }
  }
});
