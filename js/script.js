// Toggle menu

// Get the hamburger button element
const menuToggle = document.getElementById("menuToggle");

// Get the menu element
const menu = document.querySelector("header.nav-container .nav-list ul");

// Add click event listener to the hamburger button
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Change icon based on menu state
  if (menu.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Add scroll event listener to the window
window.addEventListener("scroll", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active"); // Hide the menu
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to hamburger icon
  }
});
