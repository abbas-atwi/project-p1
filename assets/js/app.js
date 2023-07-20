// adicionar eventos ao click no menu tag 'a'
const menu = document.querySelectorAll(".menu a");
// para poder ter os atributos de um array preciso converter
// o nodelist em array
const menuArray = Array.from(menu);

function removeClass() {
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
const menuClickAnimation = document.querySelectorAll(".burguer");
const navMenu = document.querySelector(".menu nav");
menuClick.addEventListener("click", () => {
  if (!navMenu.classList.contains("active")) {
    navMenu.classList.remove("desactive");
    navMenu.classList.add("active");
    menuClick.classList.add("active");
    menuClickAnimation.forEach((item) => {
      item.classList.add("active");
    });
  } else {
    navMenu.classList.remove("active");
    navMenu.classList.add("desactive");
    menuClick.classList.remove("active");
    menuClickAnimation.forEach((item) => {
      item.classList.remove("active");
    });
  }
  console.log();
});
// selecionar os boxes
const boxSectionContainer = document.querySelector(
  ".section-content-container"
);
const boxSection = document.querySelectorAll(".section-box-content");
console.log(boxSection);
boxSection[0].classList.add("active");
const timerBox = [300, 400, 500, 600];
const heightInner = window.innerHeight * 0.8;
if (browser) {
  window.addEventListener("scroll", (e) => {
    const top = boxSectionContainer.getBoundingClientRect().top;
    boxSection.forEach((item) => {
      const top = item.getBoundingClientRect().top - heightInner;
      if (top < 0) {
        item.classList.add("active");
      }
    });
  });
} else {
  boxSection.forEach((item, id) => {
    setTimeout(() => {
      item.classList.add("active");
    }, timerBox[id]);
  });
}
const menuHref = document.querySelectorAll(".menu a[href^='#']");
console.log(menuHref);

menuHref.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const sections = document.querySelector(href);
    const top = sections.getBoundingClientRect().top;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
    console.log(sections);
  });
});

const obj = {
  color: "red",
};
Object.defineProperties(obj, {
  color: {
    configurable: false,
    writable: false,
    enumerable: false,
  },
});

// Object.freeze(obj); // congela o meu objeto e nao adiciona
// Object.seal(obj);
obj.color = "blue";
const objEntries = Object.entries(obj);
// obj.tamanho = 500;
console.log(obj);
console.log(`obj Entries: ${objEntries}`);
