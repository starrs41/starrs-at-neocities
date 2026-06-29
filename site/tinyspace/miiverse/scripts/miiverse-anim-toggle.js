let animationToggle = document.querySelector("#animationToggle");
let animationToggleText = document.querySelector("#animationToggleText");

let animatedElements = [];

animatedElements.push(document.querySelector("body"));
animatedElements.push(document.querySelector(".o-navbar"));

let animationPref = getAnimationPref();

if (animationPref) {
  if (animationPref === "true") {
    playAnimations();
  }
  else {
    pauseAnimations();
  }
}

animationToggle.addEventListener("click", (event) => {
  if (animationToggle.checked) {
    playAnimations();
  }
  else {
    pauseAnimations();
  }
});

function playAnimations() {
  for (const element in animatedElements) {
    animatedElements[element].classList.remove("u-pause-animation");
  }
  animationToggleText.innerText = "Animations: ON";
  setAnimationToggle(true);
  setAnimationPref(true);
}

function pauseAnimations() {
  for (const element in animatedElements) {
    animatedElements[element].classList.add("u-pause-animation");
  }
  animationToggleText.innerText = "Animations: OFF";
  setAnimationToggle(false);
  setAnimationPref(false);
}

function getAnimationPref() {
  return localStorage.getItem("hasAnimations");
}

function setAnimationPref(value) {
  if (value === true) {
    localStorage.setItem("hasAnimations", "true");
  }
  else {
    localStorage.setItem("hasAnimations", "false");
  }
}

function setAnimationToggle(value) {
  animationToggle.checked = value;
}