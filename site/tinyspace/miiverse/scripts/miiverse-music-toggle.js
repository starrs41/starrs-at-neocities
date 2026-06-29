let musicToggle = document.querySelector("#musicToggle");
let musicToggleText = document.querySelector("#musicToggleText");

let musicContent = document.querySelectorAll("#js-bgm");
let currentIdx = 0;

if (musicContent.length > 1) {
  musicContent[currentIdx].addEventListener("ended", (event) => {
    currentIdx += 1;
    musicContent[currentIdx].play();
  });
}

let musicPref = getMusicPref();

if (musicPref) {
  if (musicPref === "true") {
    playMusic();
    setMusicToggle(true);
  }
  else {
    pauseMusic();
    setMusicToggle(false);
  }
}

musicToggle.addEventListener("click", (event) => {
  if (musicToggle.checked) {
    playMusic();
    setMusicPref(true);
  }
  else {
    pauseMusic();
    setMusicPref(false);
  }
});

function playMusic() {
  musicContent[currentIdx].play();
  musicToggleText.innerText = "Music: ON";
}

function pauseMusic() {
  musicContent[currentIdx].pause();
  musicToggleText.innerText = "Music: OFF";
}

function getMusicPref() {
  return localStorage.getItem("hasMusic");
}

function setMusicPref(value) {
  if (value === true) {
    localStorage.setItem("hasMusic", "true");
  }
  else {
    localStorage.setItem("hasMusic", "false");
  }
  
}

function setMusicToggle(value) {
  musicToggle.checked = value;
}