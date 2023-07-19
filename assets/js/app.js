// adicionar eventos ao click no menu tag 'a'
const menu = document.querySelectorAll(".menu a");
// para poder ter os atributos de um array preciso converter
// o nodelist em array
const menuArray = Array.from(menu);

function removeClass(elements) {
  menuArray.forEach((item) => {
    item.classList.remove("active");
  });
}
menuArray.map((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeClass(item);
    item.classList.add("active");
  });
});

// selecionar os pointers
const pointers = document.querySelectorAll(
  ".section-sliders-pointers .section-pointer"
);
const sliders = ["0", "-100vw", "-200vw", "-300vw"];
const slide = document.querySelector(".section-sliders");

console.log(sliders);

const arrows = document.querySelectorAll(".arrow");
let countSlider = 0;
function removeClasspointers(id) {
  pointers.forEach((item) => {
    item.classList.remove("active");
  });
  slide.style.marginLeft = sliders[id];
}

function slidermove() {
  pointers.forEach((item, id) => {
    item.addEventListener("click", () => {
      removeClasspointers(id);
      pointers[id].classList.add("active");
      item.classList.add("active");
    });
  });
}
pointers[0].classList.add("active");
slidermove();
const p = Array.prototype.map.call(pointers, (item, id) => {
  return id;
});
console.log(p);
// const fil = p.filter((item, id) => {
//   return item[id];
// }, 0);
arrows.forEach((item, id) => {
  item.addEventListener("click", () => {
    // slide.style.marginLeft = sliders[fil];
    item.getAttribute("id") === "right"
      ? (slide.style.marginLeft = sliders[++countSlider])
      : (slide.style.marginLeft = sliders[--countSlider]);
  });
});

const browser = window.matchMedia("(max-width: 600px)").matches;
console.log(browser);

// if (browser) {
//   slide.classList.add("active");
// } else {
//   slide.classList.remove("active");
// }
slide.classList.add("active");
window.addEventListener("resize", () => {});
console.log(arrows);

const menuClick = document.querySelector(".menuBurguer");
const navMenu = document.querySelector(".menu nav");
menuClick.addEventListener("click", () => {
  if (!navMenu.classList.contains("active")) {
    navMenu.classList.remove("desactive");
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
    navMenu.classList.add("desactive");
  }
  console.log();
});
