let currentSlide = 0;

/*
IMPORTANT NOTE: thumbnails and pictures should be in
the same order for them to be matched up correctly
*/

let thumbnails = document.querySelectorAll(".o-thumbnail");
let pictures = document.querySelectorAll(".o-picture");

let lightbox = document.querySelector(".o-lightbox");

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

lightboxInfo.addEventListener("click", (event) => {
  console.log("you clicked info");
})

lightboxClose.addEventListener("click", (event) => {
  lightbox.classList.toggle("u-hidden");
})

lightboxPrev.addEventListener("click", (event) => {
  if (currentSlide > 0) {
    changeSlide(currentSlide - 1);
  }
  else {
    changeSlide(pictures.length - 1);
  }
})

lightboxNext.addEventListener("click", (event) => {
  if (currentSlide < pictures.length - 1) {
    changeSlide(currentSlide + 1);
  }
  else {
    changeSlide(0);
  }
})

function changeSlide(newSlide) {
  pictures[currentSlide].classList.toggle("u-hidden");
  pictures[newSlide].classList.toggle("u-hidden");
  currentSlide = newSlide;
  console.log("current slide: " + currentSlide);
}