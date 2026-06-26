let animationToggle = document.querySelector("#animationToggle");
let animationToggleText = document.querySelector("#animationToggleText");

let animatedElements = [];

animatedElements.push(document.querySelector("body"));
animatedElements.push(document.querySelector(".o-navbar"));

let animationPref = getAnimationPref();

if (animationPref) {
  if (animationPref === "true") {
    playAnimations();
    setAnimationToggle(true);
  }
  else {
    pauseAnimations();
    setAnimationToggle(false);
  }
}

animationToggle.addEventListener("click", (event) => {
  if (animationToggle.checked) {
    playAnimations();
    setAnimationPref("true");
  }
  else {
    pauseAnimations();
    setAnimationPref("false");
  }
});

function playAnimations() {
  for (const element in animatedElements) {
    animatedElements[element].classList.remove("u-pause-animation");
  }
  animationToggleText.innerText = "Animations: ON";
}

function pauseAnimations() {
  for (const element in animatedElements) {
    animatedElements[element].classList.add("u-pause-animation");
  }
  animationToggleText.innerText = "Animations: OFF";
}

function getAnimationPref() {
  return localStorage.getItem("hasAnimations");
}

function setAnimationPref(value) {
  localStorage.setItem("hasAnimations", value);
}

function setAnimationToggle(value) {
  animationToggle.checked = value;
}