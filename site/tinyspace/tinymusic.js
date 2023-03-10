/*
    for music player functionality inside and outside the iframe.
    best to put this at the bottom of the page!

    if someone had javascript disabled they'd be missing out on the music, but oh well :"3
*/

/*
    only needed on pages where music players are available
*/

var mainMusic;
var subMusic;
var musicDialogue;
var musicButton;
var subMusicButton;

// FOR THE MUSIC PLAYER INSIDE THE IFRAME
// well apparently i don't need this anymore :skull:
// still leaving this here though

function subIsPlaying () {
    subMusic = document.getElementById("js-sub-music");
    return !subMusic.paused;
}

function playSubMusic () {
    mainMusic = window.parent.document.getElementById("js-main-music");
    subMusic = document.getElementById("js-sub-music");

    musicDialogue = window.parent.document.getElementById("js-main-music-dialogue");
    musicButton = window.parent.document.getElementById("js-main-music-button");
    subMusicButton = document.getElementById("js-sub-music-button");

    if (mainMusic == undefined) { // the page is not inside the iframe
        if (!subIsPlaying()) {
            subMusic.play();
            subMusicButton.innerHTML = "&#xf28b;"; // pause
        }
        else {
            subMusic.pause();
            subMusicButton.innerHTML = "&#xf144;"; // play
        }
    }

    else { // the page is inside the iframe
        if (!subIsPlaying()) {
            subMusic.play();
            console.log("stopping main music");
            mainMusic.pause();
            console.log("playing sub music");
            musicDialogue.innerText = '"Poyo!"';
            musicButton.innerText = "Okay!";
            subMusicButton.innerHTML = "&#xf28b;"; // pause
        }
        else {
            subMusic.pause();
            subMusicButton.innerHTML = "&#xf144;"; // play
            console.log("stopping sub music");
        }
    }
}


// FOR THE MUSIC PLAYER OUTSIDE THE IFRAME

function mainIsPlaying () { // why did i name it like this. returns true if music is playing, otherwise returns false
    mainMusic = document.getElementById("js-main-music");
    return(!mainMusic.paused);
}

function playMainMusic () {
    mainFrame = document.getElementById("js-main-frame"); // the iframe
    mainMusic = document.getElementById("js-main-music");
    subMusic = mainFrame.contentWindow.document.getElementById("js-sub-music");

    musicDialogue = document.getElementById("js-main-music-dialogue");
    musicButton = document.getElementById("js-main-music-button");
    subMusicButton = mainFrame.contentWindow.document.getElementById("js-sub-music-button");

    if (subMusic == undefined) { // there is no music playing inside the iframe
        if (!mainIsPlaying()) {
            mainMusic.play();
            musicDialogue.innerText = '"Poyo?"'; // innerHTML not working for some reason so...
            musicButton.innerText = "Stop!";
        }
        else {
            mainMusic.pause();
            musicDialogue.innerText = '"Poyo!"';
            musicButton.innerText = "Okay!";
        }
    }

    else { // there is music playing inside the iframe
        if (!mainIsPlaying()) {
            mainMusic.play();
            console.log("playing main");
            subMusic.pause();
            console.log("stopping sub");
            musicDialogue.innerText = '"Poyo?"'; // innerHTML not working for some reason so...
            musicButton.innerText = "Stop!";
            subMusicButton.innerHTML = "&#xf144;"; // play
        }
        else {
            mainMusic.pause();
            console.log("stopping main");
            musicDialogue.innerText = '"Poyo!"';
            musicButton.innerText = "Okay!";
        }
    }
}