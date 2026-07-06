/*
    for music player functionality in tinyspace index (outside the iframe)
    best to put this at the bottom of the page!

    if someone had javascript disabled they'd be missing out on the music, but oh well :"3
*/

let musicContent;
let musicDialogue;
let musicButton;

let currentIdx;


musicContent = document.querySelectorAll(".js-main-music");
musicDialogue = document.getElementById("js-main-music-dialogue");
musicButton = document.getElementById("js-main-music-button");

currentIdx = 0;

if (musicContent.length > 1) {
    musicContent[currentIdx].addEventListener("ended", (event) => {
        currentIdx += 1;
        musicContent[currentIdx].play();
    });
}

musicButton.addEventListener("click", (event) => {
    if (musicContent[currentIdx].paused) {
        musicContent[currentIdx].play();
        musicDialogue.innerText = '"Poyo?"'; // innerHTML not working for some reason so...
        musicButton.innerText = "Stop!";
    }
    else {
        musicContent[currentIdx].pause();
        musicDialogue.innerText = '"Poyo!"';
        musicButton.innerText = "Okay!";
    }
});

