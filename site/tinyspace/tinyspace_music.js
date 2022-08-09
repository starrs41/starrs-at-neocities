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

function subIsPlaying () {
    subMusic = document.getElementById("subMusicPlayer");
    return !subMusic.paused;
}

function playSubMusic () {
    mainMusic = window.parent.document.getElementById("musicPlayer");
    subMusic = document.getElementById("subMusicPlayer");

    musicDialogue = window.parent.document.getElementById("musicDialogue");
    musicButton = window.parent.document.getElementById("musicButton");
    subMusicButton = document.getElementById("subMusicButton");

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

function mainIsPlaying () {
    mainMusic = document.getElementById("musicPlayer");
    return(!mainMusic.paused);
}

function playMainMusic () {
    mainFrame = document.getElementById("mainFrame"); // the iframe
    mainMusic = document.getElementById("musicPlayer");
    subMusic = mainFrame.contentWindow.document.getElementById("subMusicPlayer");

    musicDialogue = document.getElementById("musicDialogue");
    musicButton = document.getElementById("musicButton");
    subMusicButton = mainFrame.contentWindow.document.getElementById("subMusicButton");

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



/* sorry nested functions are probably bad but couldn't think of a simpler way to do it T_T */