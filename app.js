const test = document.querySelector(".general");

test.addEventListener("click", () => {
  console.log("hi");
  const background = document.getElementById("query-type-general");
  if (background.checked == true) {
    console.log("background");
    test.classList.add("background");
  }
});
