var mainFrame = document.getElementById("js-main-frame");
const mediaQuery = window.matchMedia('(max-width: 500px)');

function handleScreenChange(screen) {

    if (screen.matches) { // the screen is small
        console.log('changed!');
        mainFrame.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
        //document.getElementById("js-main-frame").setAttribute("scrolling", "no");
        //document.getElementById("js-main-frame").setAttribute("style", "height: fit-content;");
    }

    else {
        console.log('nothing happened');
        mainFrame.style.height = "570px";
        // document.getElementById("js-main-frame").iFrameResizer.resize();
        //document.getElementById("js-main-frame").setAttribute("scrolling", "yes");
        //document.getElementById("js-main-frame").setAttribute("style", "height: 580px;");
    }
}

mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery);