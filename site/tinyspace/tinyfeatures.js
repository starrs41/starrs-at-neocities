/*
    every page has to have these features! for the functionality!
*/


// for scrolling to iframe when links are clicked
function iframeScroll(link) {
    document.querySelector("#js-main-frame").scrollIntoView(); // stops #mainFrame from showing in url
    window.mainFrame.location = link;
}

const mediaQuery = window.matchMedia('(max-width: 500px)');

//for scrolling to the top of a page
function scrollToTop(e) {

    if (window.parent.document.getElementById("js-middle-column")) { // in the iframe
        if (mediaQuery.matches) { // mobile view, iframe expanded
            window.parent.scroll(0,0);
        }
        window.parent.document.getElementById("js-middle-column").scroll(0,0);
    }
    else { // not in the iframe
        window.scroll(0,0);
    }

    // window.scroll(0,0);
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