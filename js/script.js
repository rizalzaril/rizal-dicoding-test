// Toggle menu function

// Get  hamburger button element
const menuToggle = document.getElementById("menuToggle");

// Get the menu element from css
const menu = document.querySelector("header.nav-container .nav-list ul");

// Add click event listener to the hamburger button
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Change icon on menu state
  if (menu.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Add scroll event for hide menu if you scroll website
window.addEventListener("scroll", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active"); // Hide menu
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; // back to change to hamburger icon
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SCroll Rotate aside transition

// Get the aside element
const aside = document.querySelector("main .content aside");

// variable to track the last scroll position
let lastScrollY = 0;

// scroll event
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > lastScrollY) {
    // Scrolling down
    aside.style.transform = `rotate(${Math.min(scrollY * 0, 0)}deg)`; // Limit max rotation to 12 degrees
  } else {
    // Scrolling up
    aside.style.transform = `rotate(${Math.max(0, 12 - scrollY * 0.1)}deg)`; // Return to 0 degrees
  }

  // Update last scroll position
  lastScrollY = scrollY;
});

// Scroll opacity animation

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fadeEffect");
  const scrollPosition = window.scrollY;

  elements.forEach((element) => {
    let opacityValue = scrollPosition / 400; // Adjust this value based on your preference
    opacityValue = Math.min(opacityValue, 1); // Ensure opacity doesn't go above 1

    element.style.opacity = opacityValue;
  });
});

// get year now
document.getElementById("year").textContent = new Date().getFullYear();
