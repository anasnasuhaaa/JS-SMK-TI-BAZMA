const headerIcon = document.querySelector("#menu-toogle #check");
const headerList = document.querySelector("#header-list");

headerIcon.addEventListener("click", function () {
  headerList.classList.toggle("hidden");
});
