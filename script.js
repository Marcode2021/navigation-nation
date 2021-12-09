const menuBars = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");

const toggleNav = function () {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  console.log(menuBars.classList.contains("change"));

  //Toggle: Menu Active
  if (menuBars.classList.contains("change")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  }
};

//Event listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
