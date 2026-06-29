// currently, yes and no buttons are only for setting preferences

let nextButtons = document.querySelectorAll("#nextButton");
let yesButton = document.querySelector("#yesButton");
let noButton = document.querySelector("#noButton");

for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", (event) => {
    goToNextPopup();
  });
}

yesButton.addEventListener("click", (event) => {
  setPref(true);
  hidePopup();
});

noButton.addEventListener("click", (event) => {
  setPref(false);
  hidePopup();
});

let currentPopup = 0;

let popupOverlay = document.querySelector(".o-warning-popup");
let popupContent = document.querySelectorAll(".o-warning-popup__content");

if (getPref() === false) {
  showPopup();
}

function goToNextPopup() {
  popupContent[currentPopup].classList.toggle("u-hidden");
  popupContent[currentPopup + 1].classList.toggle("u-hidden");
  currentPopup += 1;
}

function setPref(value) {
  if (value === true) {
    playAnimations(); // from miiverse-anim-toggle.js
    playMusic(); // from miiverse-music-toggle.js
  }
  else {
    pauseAnimations(); // from miiverse-anim-toggle.js
    pauseMusic(); // from miiverse-music-toggle.js
  }
}

function getPref() {
  if (localStorage.getItem("hasAnimations") && localStorage.getItem("hasMusic")) {
    return true;
  }
  else {
    return false;
  }
}

function showPopup() {
  if (popupOverlay.classList.contains("u-hidden")) {
    popupOverlay.classList.remove("u-hidden");
    popupContent[currentPopup].classList.remove("u-hidden");
  }
}

function hidePopup() {
  if (!popupOverlay.classList.contains("u-hidden")) {
    popupOverlay.classList.add("u-hidden");
    popupContent[currentPopup].classList.add("u-hidden");
  }
}