const btnCollapse = document.getElementById("btn-collapse");
const content = document.getElementById("content");
const sideItems = document.querySelectorAll(".side-nav__item");

let isCollapse = false;

btnCollapse.addEventListener("click", () => {
  if (isCollapse) {
    content.classList.remove("collapse-side");
    isCollapse = false;
  } else {
    content.classList.add("collapse-side");
    isCollapse = true;
  }
});

const path = window.location.href.toLowerCase();

// sideItems.forEach((e) => {
//   if (path.includes(e.id.toLowerCase())) {
//     e.classList.add("active");
//   }
// });
