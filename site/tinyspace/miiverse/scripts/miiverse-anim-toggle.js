let animToggle = document.querySelector("#animationToggle");

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

animToggle.addEventListener("click", (event) => {
  if (animToggle.checked) {
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
}

function pauseAnimations() {
  for (const element in animatedElements) {
    animatedElements[element].classList.add("u-pause-animation");
  }
}

function getAnimationPref() {
  return localStorage.getItem("hasAnimations");
}

function setAnimationPref(value) {
  localStorage.setItem("hasAnimations", value);
}

function setAnimationToggle(value) {
  animToggle.checked = value;
}