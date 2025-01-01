document.querySelector(".js-btn").addEventListener("click", (evt) => {
    evt.preventDefault();
  
    document
      .querySelector(".js-btn")
      .closest(".site_header")
      .classList.toggle("open");
  });