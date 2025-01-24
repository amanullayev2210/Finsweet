const menu = document.querySelector(".menu");
const closes = document.querySelector(".close");

let data = true;

document.querySelector(".js-btn").addEventListener("click", (evt) => {
  evt.preventDefault();
  document
    .querySelector(".js-btn")
    .closest(".site_header")
    .classList.toggle("open");

  if (data) {
    menu.style.display = "none";
    closes.style.display = "block";
    data = false;
  } else {
    menu.style.display = "block";
    closes.style.display = "none";
    data = true;
  }
});