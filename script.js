const sidebarToggle = document.querySelector(".side-nav-selector");
const sidebar = document.querySelector(".side-nav");
const hidden = document.querySelector(".hidden");
var r = document.querySelector(":root");
let sideBarEnabled = false;

// TODO: Shift
function sideBarShift() {
  r.style.setProperty("--side-bar-size", "20rem");
}

function sideBarReset() {
  r.style.setProperty("--side-bar-size", "6rem");
}

sidebarToggle.addEventListener("click", () => {
  sideBarEnabled = !sideBarEnabled;
  if (sideBarEnabled) {
    sideBarShift();
    hidden.classList.toggle("show");
  } else {
    sideBarReset();
    hidden.classList.toggle("show");
  }
});


sideBarEnabled.addEventListener("click",)