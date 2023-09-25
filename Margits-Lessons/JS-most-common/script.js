/* - - - ELEMENTS - - - */
const backToTopBtn = document.querySelector("#backToTop");
const menuItems = document.querySelectorAll("nav ul li a");
const hamburger = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const header = document.querySelector("header");
const modalButton = document.querySelector("#modal-button");
const modalClose = document.querySelector("#modal-close");
const overlay = document.querySelector("#overlay");

/* - - - FUNCTIONS - - - */
const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// toggle between showing or hiding mobile menu
const mobMenu = () => {
  menuItems.forEach((item) => item.addEventListener("click", mobMenu));
  nav.classList.toggle("responsive");
};

// toggle between showing and hiding overlay
const toggleShow = () => overlay.classList.toggle("hide");

const scrollFunc = () => {
  // show back to top button after scrolling
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (backToTopBtn.style.display = "block")
    : (backToTopBtn.style.display = "none");

  // show header background color after scrolling
  document.body.scrollTop > 25 || document.documentElement.scrollTop > 25
    ? header.classList.add("bg")
    : header.classList.remove("bg");
};

/* - - - EVENT LISTENERS - - - */
hamburger.addEventListener("click", mobMenu);
backToTopBtn.addEventListener("click", getToTop);
modalButton.addEventListener("click", toggleShow);
modalClose.addEventListener("click", toggleShow);
window.addEventListener("scroll", scrollFunc);
