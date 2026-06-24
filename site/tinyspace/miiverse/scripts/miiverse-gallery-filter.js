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