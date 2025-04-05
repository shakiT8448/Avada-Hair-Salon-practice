const hamburgerMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".offscreen-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
const navbarElements = document.querySelectorAll(".navbar-elements");
navbarElements.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.toggle(".navbar-elements-hover");
  });
});
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  if (scrollTop > 1000) {
    element.classList.toggle(".navbar-elements-hover");
  }
});
