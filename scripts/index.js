// sidebar
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.getElementById("sidebarBtn");
const closeSidebar = document.querySelector("closeSidebar");
const sidebarClose = document.getElementById("sidebarClose");
const blurDiv = document.getElementById("blurDiv");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.replace("-right-full", "right-0");
  blurDiv.classList.remove("hidden");
});
sidebarClose.addEventListener("click", () => {
  sidebar.classList.replace("right-0", "-right-full");
  blurDiv.classList.add("hidden");
});
blurDiv.addEventListener("click", () => {
  console.log("object");
  blurDiv.classList.add("hidden");
  sidebar.classList.replace("right-0", "-right-full");
  tutorialsSidebar.classList.replace("right-0", "-right-full");
});
// tutorials side bar
const tutorialsBtn = document.getElementById("tutorialsBtn");
const tutorialsSidebar = document.getElementById("tutorialsSidebar");
const tutorialsCloseBtn = document.getElementById("tutorialsCloseBtn");
tutorialsBtn.addEventListener("click", () => {
  tutorialsSidebar.classList.replace("-right-full", "right-0");
});
tutorialsSidebar.addEventListener("click", () => {
  tutorialsSidebar.classList.replace("right-0", "-right-full");
});
