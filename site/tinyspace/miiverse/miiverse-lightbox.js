// window.addEventListener("load", (event) => {
//   console.log("page is fully loaded");
// });

let thumbnails = document.querySelectorAll(".o-thumbnail");

for (const thumbnail of thumbnails) {
  thumbnail.addEventListener("click", (event) => {
    console.log("you clicked me!");
  })
}