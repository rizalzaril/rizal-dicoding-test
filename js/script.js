// Toggle menu

// panggil id dari button html hamburger
const menuToggle = document.getElementById("menuToggle");

// panggil selector dari css
const menu = document.querySelector("header.nav-container .nav-list ul");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // ganti icon saat menu tampil
  if (menu.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
