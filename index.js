// declaring my variables
let container = document.querySelector(".container");
let colorCard = document.querySelector(".colorCard");
let btn = document.querySelector("button");
let hex = document.querySelector("span");
let color;

// using the function-math.random and math.floor
function getNewColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  hex.textContent = `${color}`;
  hex.style.background = color;
  colorCard.style.background = color;
  document.body.style.background = color;
}

btn.addEventListener("click", getNewColor);

const header = document.getElementsByTagName("header");

document.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header[0].classList.add("scrolled");
  } else {
    header[0].classList.remove("scrolled");
  }
})