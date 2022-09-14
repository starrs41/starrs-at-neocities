/*
    code for loading subpages of iframe. courtesy of melon! thank you melon :D
    the main post created for the code (also a guide): https://forum.melonking.net/index.php?topic=115.0
    the source for the code: https://melonking.net/scripts/frame-link.js
*/

// only required for the main area of tiny space. put in <head> tag!

// load this section first before any other functions. required for iframe to work properly

var mainFrame;
var firstLoad = true;
var updateTitle = false;
var pageParam = "e"; //haha funny letter
var titlePrefix = "";
var hitCounterFunction = undefined;

//Event to handle first page load - Also sets up the mainFrame
window.addEventListener("DOMContentLoaded", (e) => {
    mainFrame = document.getElementById("mainFrame");
    mainFrame.addEventListener("load", updateHistory, false);
    setMainFrame();
});

//Event to handle back button presses
window.addEventListener("popstate", function (e) {
    if (e.state !== null) {
        setMainFrame();
    }
});

//Checks to see if a page parameter exists and sets the mainframe src to that page.
function setMainFrame() {
    let params = new URLSearchParams(window.location.search);
    let page = params.get(pageParam);
    if (page != null) {
        mainFrame.src = page;
    }
}

//Updates the browser history with the current page, causing the URL bar to update.
function updateHistory() {
    let title = titlePrefix + mainFrame.contentDocument.title;

    // Stops the page getting into an infinate loop reloading itself.
    if (firstLoad) {
        firstLoad = false;
        if (updateTitle) {
            document.title = title;
        }
        if (hitCounterFunction != undefined) {
            hitCounterFunction();
        }
        return;
    }

    history.replaceState(null, "", "?" + pageParam + "=" + mainFrame.contentWindow.location.pathname);

    if (updateTitle) {
        document.title = title;
    }

    //Save a hit - Optionally run this if a hit counter has been defined.
    if (hitCounterFunction != undefined) {
        hitCounterFunction();
    }
}