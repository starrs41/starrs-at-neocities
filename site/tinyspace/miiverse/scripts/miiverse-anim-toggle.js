let animToggle = document.querySelector("#animationToggle");

let animatedElements = [];

animatedElements.push(document.querySelector("body"));
animatedElements.push(document.querySelector(".o-navbar"));

animToggle.addEventListener("click", (event) => {
  if (animToggle.checked) {
    console.log("play anim");
    for (const element in animatedElements) {
      animatedElements[element].classList.remove("u-pause-animation");
    }
  }
  else {
    console.log("pause anim checked");
    for (const element in animatedElements) {
      animatedElements[element].classList.add("u-pause-animation");
    }
  }
});