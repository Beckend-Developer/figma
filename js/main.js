let hamburger = document.querySelector(".hamburger");
let headerNav = document.querySelector(".header-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  headerNav.classList.toggle("nav--mobile");
});