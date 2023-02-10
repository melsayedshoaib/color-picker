let lis = document.querySelectorAll("ul li");

let experiment = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  experiment.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    e.currentTarget.classList.add("active");
    experiment.style.backgroundColor = window.localStorage.getItem("color");
  });
});
