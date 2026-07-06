import "./glightbox.js";

const nextSVG = `<img src="../../../graphics/misc/miiverse/right.svg" alt="Next image">`
const prevSVG = `<img src="../../../graphics/misc/miiverse/left.svg" alt="Previous image">`
const closeSVG = `<img src="../../../graphics/misc/miiverse/close.svg" alt="Close the lightbox">`

const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">${nextSVG}</button>
    <button class="gprev gbtn" tabindex="1" aria-label="Previous">${prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">${closeSVG}</button>
</div>
</div>`;

const miiGallery = GLightbox({
  selector: ".o-thumbnail-container",
  lightboxHTML: customLightboxHTML,
  skin: "themed",
  autoplayVideos: true,
  loop: true,
  touchNavigation: true,
});