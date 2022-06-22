const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const click = document.querySelector(".slider");
const chngecolornavbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

click.addEventListener("click", () => {
  chngecolornavbar.classList.toggle("pinkmode");
  var element = document.body;
  element.classList.toggle("moveon");
  var elements = document.getElementsByClassName("box");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
});
