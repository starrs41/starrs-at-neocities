let currentSlide = 0;

/*
  IMPORTANT NOTE: thumbnails, pictures, and descriptions
  should have the same length and be in the same order
  for them to be matched up correctly

  the three of those will be handled by a separate ssg
  so it should be all good
*/

let thumbnails = document.querySelectorAll(".o-thumbnail");
let pictures = document.querySelectorAll(".o-picture");

let lightbox = document.querySelector(".o-lightbox");

window.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("u-hidden")) {
    if (event.key == "Escape") {
      lightbox.classList.toggle("u-hidden");
    }
    if (event.key == "a" || event.key == "ArrowLeft") {
      goToPrevSlide();
    }
    if (event.key == "d" || event.key == "ArrowRight") {
      goToNextSlide();
    }
  }
})

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", (event) => {
    changeSlide(i)
    lightbox.classList.toggle("u-hidden");
  })
}

let lightboxInfo = document.querySelector("#lightboxInfo");
let lightboxClose = document.querySelector("#lightboxClose");
let lightboxPrev = document.querySelector("#lightboxPrev");
let lightboxNext = document.querySelector("#lightboxNext");

let descriptions = document.querySelectorAll(".o-lightbox-info-box__content");

lightboxInfo.addEventListener("mouseenter", (event) => {
  console.log(descriptions[currentSlide]);
  descriptions[currentSlide].parentNode.classList.toggle("u-hidden");
  descriptions[currentSlide].classList.toggle("u-hidden");
});

lightboxInfo.addEventListener("mouseleave", (event) => {
  descriptions[currentSlide].parentNode.classList.toggle("u-hidden");
  descriptions[currentSlide].classList.toggle("u-hidden");
});

lightboxClose.addEventListener("click", (event) => {
  lightbox.classList.toggle("u-hidden");
});

lightboxPrev.addEventListener("click", (event) => {
  goToPrevSlide();
});

lightboxNext.addEventListener("click", (event) => {
  goToNextSlide();
});

function goToPrevSlide() {
  if (currentSlide > 0) {
    changeSlide(currentSlide - 1);
  }
  else {
    changeSlide(pictures.length - 1);
  }
}

function goToNextSlide() {
  if (currentSlide < pictures.length - 1) {
    changeSlide(currentSlide + 1);
  }
  else {
    changeSlide(0);
  }
}

function changeSlide(newSlide) {
  pictures[currentSlide].classList.toggle("u-hidden");
  pictures[newSlide].classList.toggle("u-hidden");
  currentSlide = newSlide;
  console.log("current slide: " + currentSlide);
}

let tlldCheck = document.querySelector("#tlld");
let tlCheck = document.querySelector("#tl");
let tcCheck = document.querySelector("#tc");
let miitopiaswitchCheck = document.querySelector("#miitopiaswitch");
let miitopia3dsCheck = document.querySelector("#miitopia3ds");
let miscCheck = document.querySelector("#misc");

let tlldThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tlld"]');
let tlThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tl"]');
let tcThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tc"]');
let miitopiaswitchThumbnails = document.querySelectorAll('.o-thumbnail[data-game="miitopiaswitch"]');
let miitopia3dsThumbnails = document.querySelectorAll('.o-thumbnail[data-game="miitopia3ds"]');
let miscThumbnails = document.querySelectorAll('.o-thumbnail[data-game="misc"]');

// NOTE: all checks are true by default

tlldCheck.addEventListener("click", (event) => {
  if (tlldCheck.checked) {
    for (let i = 0; i < tlldThumbnails.length; i++) {
      tlldThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < tlldThumbnails.length; i++) {
      tlldThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});

tlCheck.addEventListener("click", (event) => {
  if (tlCheck.checked) {
    for (let i = 0; i < tlThumbnails.length; i++) {
      tlThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < tlThumbnails.length; i++) {
      tlThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});

tcCheck.addEventListener("click", (event) => {
  if (tcCheck.checked) {
    for (let i = 0; i < tcThumbnails.length; i++) {
      tcThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < tcThumbnails.length; i++) {
      tcThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});

miitopiaswitchCheck.addEventListener("click", (event) => {
  if (miitopiaswitchCheck.checked) {
    for (let i = 0; i < miitopiaswitchThumbnails.length; i++) {
      miitopiaswitchThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < miitopiaswitchThumbnails.length; i++) {
      miitopiaswitchThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});

miitopia3dsCheck.addEventListener("click", (event) => {
  if (miitopia3dsCheck.checked) {
    for (let i = 0; i < miitopia3dsThumbnails.length; i++) {
      miitopia3dsThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < miitopia3dsThumbnails.length; i++) {
      miitopia3dsThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});

miscCheck.addEventListener("click", (event) => {
  if (miscCheck.checked) {
    for (let i = 0; i < miscThumbnails.length; i++) {
      miscThumbnails[i].parentNode.classList.remove("u-hidden");
    }
  }
  else {
    for (let i = 0; i < miscThumbnails.length; i++) {
      miscThumbnails[i].parentNode.classList.add("u-hidden");
    }
  }
});