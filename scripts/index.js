// sidebar
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.getElementById("sidebarBtn");
const closeSidebar = document.querySelector("closeSidebar");
const sidebarClose = document.getElementById("sidebarClose");
const blurDiv = document.getElementById("blurDiv");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.replace("-right-full", "-right-4");
  blurDiv.classList.remove("hidden");
});
sidebarClose.addEventListener("click", () => {
  sidebar.classList.replace("-right-4", "-right-full");
  blurDiv.classList.add("hidden");
});
blurDiv.addEventListener("click", () => {
  blurDiv.classList.add("hidden");
  sidebar.classList.replace("-right-4", "-right-full");
  tutorialsSidebar.classList.replace("-right-4", "-right-full");
});
// tutorials side bar
const tutorialsBtn = document.getElementById("tutorialsBtn");
const tutorialsSidebar = document.getElementById("tutorialsSidebar");
const tutorialsCloseBtn = document.getElementById("tutorialsCloseBtn");
const tutorialsSidebarBtn = document.getElementById("tutorialsSidebarBtn");
tutorialsBtn.addEventListener("click", () => {
  tutorialsSidebar.classList.replace("-right-full", "-right-4");
});
tutorialsSidebarBtn.addEventListener("click", () => {
  tutorialsSidebar.classList.replace("-right-4", "-right-full");
});
// tutorial side bar desktop
const tutorialSidebar = document.getElementById("tutorialSidebar");
const arrowIcon = document.getElementById("arrowIcon");
arrowIcon.addEventListener("click", () => {
  console.log(arrowIcon.children[2].src);
  if (arrowIcon.children[2].classList.contains("rotate-0")) {
    arrowIcon.children[2].classList.replace("rotate-0", "rotate-180");
    console.log(arrowIcon.children[2].src);
    arrowIcon.children[2].src = "../public/icons/arrow-up.svg";
    // arrowIcon.children[2].classList.replace("");
    tutorialSidebar.classList.replace("hidden", "block");
  } else {
    arrowIcon.children[2].src = "../public/icons/arrow-down.svg";

    arrowIcon.children[2].classList.replace("rotate-180", "rotate-0");
    tutorialSidebar.classList.replace("block", "hidden");
  }
});
