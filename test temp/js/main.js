let myHam = document.getElementById("nav-menu");
let myNav = document.getElementById("anim-nav");
// Nav Menu
myHam.onclick = function () {
  "use strict";
  myNav.classList.toggle("open");
  this.classList.toggle("open");
};
// Nav Tabs
let nav = document.querySelectorAll(".nav-list ul li a");
let navArray = Array.from(nav);

navArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    navArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// Numbers With Content
let numbers = document.querySelectorAll(".tabs .numbers");
let numbersArray = Array.from(numbers);
let imgs = document.querySelectorAll(".imgs img");
let imgsArray = Array.from(imgs);

numbersArray.forEach((number) => {
  number.addEventListener("click", function (e) {
    numbersArray.forEach((number) => {
      number.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    imgsArray.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
