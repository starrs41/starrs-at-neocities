/*
    sorry, but every page has to have this feature! for the functionality!
*/


// for scrolling to iframe when links are clicked
function iframeScroll(link) {
    document.querySelector("#mainFrame").scrollIntoView(); // stops #mainFrame from showing in url
    window.mainFrame.location = link;
}

//for scrolling to the top of a page
function scrollToTop() {
    window.scroll(0,0);
    // simple enough but i might forget so here
}

var myFile;
var modal;

// for opening the corresponding modal
// note: no transitions
function openModal(fileName) {
    modal = document.getElementById("modal");
    myFile = document.getElementById(fileName);
    modal.style.display = "flex";
    myFile.style.display = "flex";
}

function closeModal(fileName) {
    modal = document.getElementById("modal");
    myFile = document.getElementById(fileName);

    modal.style.display = "none";
    myFile.style.display = "none";
}

function closeThisModal() {
    modal = document.getElementById("modal");
    modal.style.display = "none";

    let children = modal.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.display = "none";
    }
}