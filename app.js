const general = document.querySelector(".general");
const support = document.querySelector(".support");
const generalId = document.getElementById("query-type-general");
const supportId = document.getElementById("query-type-support");

general.addEventListener("click", () => {
  general.classList.add("checked");
  support.classList.remove("checked");
});

support.addEventListener("click", () => {
  support.classList.add("checked");
  general.classList.remove("checked");
});
