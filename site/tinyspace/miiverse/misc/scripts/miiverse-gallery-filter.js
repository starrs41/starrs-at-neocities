let allFilter = document.querySelector("#all");
let tlldFilter = document.querySelector("#tlld");
let tlFilter = document.querySelector("#tl");
let tcFilter = document.querySelector("#tc");
let miitopiaswitchFilter = document.querySelector("#miitopiaswitch");
let miitopia3dsFilter = document.querySelector("#miitopia3ds");
let miscFilter = document.querySelector("#misc");

let filters = []
filters.push(tlldFilter);
filters.push(tlFilter);
filters.push(tcFilter);
filters.push(miitopiaswitchFilter);
filters.push(miitopia3dsFilter);
filters.push(miscFilter);

let tlldThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tlld"]');
let tlThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tl"]');
let tcThumbnails = document.querySelectorAll('.o-thumbnail[data-game="tc"]');
let miitopiaswitchThumbnails = document.querySelectorAll('.o-thumbnail[data-game="miitopiaswitch"]');
let miitopia3dsThumbnails = document.querySelectorAll('.o-thumbnail[data-game="miitopia3ds"]');
let miscThumbnails = document.querySelectorAll('.o-thumbnail[data-game="misc"]');

// NOTE: all filters are true by default

allFilter.addEventListener("click", (event) => {
  if (allFilter.checked) {
    for (let i = 0; i < filters.length; i++) {
      filters[i].checked = true;
    }
    toggleAllFilter(true);
  }
  else {
    for (let i = 0; i < filters.length; i++) {
      filters[i].checked = false;
    }
    toggleAllFilter(false);
  }
});

tlldFilter.addEventListener("click", (event) => {
  if (tlldFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleTlldFilter(true);
    tlldFilter.checked = true;
  }
  else {
    toggleTlldFilter(false);
    tlldFilter.checked = false;
    allFilter.checked = false;
  }
});

tlFilter.addEventListener("click", (event) => {
  if (tlFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleTlFilter(true);
    tlFilter.checked = true;
  }
  else {
    toggleTlFilter(false);
    tlFilter.checked = false;
    allFilter.checked = false;
  }
});

tcFilter.addEventListener("click", (event) => {
  if (tcFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleTcFilter(true);
    tcFilter.checked = true;
  }
  else {
    toggleTcFilter(false);
    tcFilter.checked = false;
    allFilter.checked = false;
  }
});

miitopiaswitchFilter.addEventListener("click", (event) => {
  if (miitopiaswitchFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleMiitopiaSwitchFilter(true);
    miitopiaswitchFilter.checked = true;
  }
  else {
    toggleMiitopiaSwitchFilter(false);
    miitopiaswitchFilter.checked = false;
    allFilter.checked = false;
  }
});

miitopia3dsFilter.addEventListener("click", (event) => {
  if (miitopia3dsFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleMiitopia3dsFilter(true);
    miitopia3dsFilter.checked = true;
  }
  else {
    toggleMiitopia3dsFilter(false);
    miitopia3dsFilter.checked = false;
    allFilter.checked = false;
  }
});

miscFilter.addEventListener("click", (event) => {
  if (miscFilter.checked) {
    if (isAllFilterApplicable()) {
      allFilter.checked = true;
    }
    toggleMiscFilter(true);
    miscFilter.checked = true;
  }
  else {
    toggleMiscFilter(false);
    miscFilter.checked = false;
    allFilter.checked = false;
  }
});

function isAllFilterApplicable() {
  // not sure how much this will tank performance (will get back to this if it does)
  // it'll loop through all filters every time a filter is checked / turned on
  // to see if, at a certain point, every filter is checked
  filterNum = 0;
  for (let i = 0; i < filters.length; i++) {
    if (filters[i].checked == true) {
      filterNum += 1;
    }
  }
  if (filterNum == filters.length - 1) {
    return true;
  }
  else {
    return false;
  }
}

function toggleAllFilter(isOn) {
  if (isOn) {
    toggleTlldFilter(true);
    toggleTlFilter(true);
    toggleTcFilter(true);
    toggleMiitopiaSwitchFilter(true);
    toggleMiitopia3dsFilter(true);
    toggleMiscFilter(true);
  }
  else {
    toggleTlldFilter(false);
    toggleTlFilter(false);
    toggleTcFilter(false);
    toggleMiitopiaSwitchFilter(false);
    toggleMiitopia3dsFilter(false);
    toggleMiscFilter(false);
  }
}

function toggleTlldFilter(isOn) {
  for (let i = 0; i < tlldThumbnails.length; i++) {
    if (isOn) {
      if (tlldThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tlldThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!tlldThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tlldThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}

function toggleTlFilter(isOn) {
  for (let i = 0; i < tlThumbnails.length; i++) {
    if (isOn) {
      if (tlThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tlThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!tlThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tlThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}

function toggleTcFilter(isOn) {
  for (let i = 0; i < tcThumbnails.length; i++) {
    if (isOn) {
      if (tcThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tcThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!tcThumbnails[i].parentNode.classList.contains("u-hidden")) {
        tcThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}

function toggleMiitopiaSwitchFilter(isOn) {
  for (let i = 0; i < miitopiaswitchThumbnails.length; i++) {
    if (isOn) {
      if (miitopiaswitchThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miitopiaswitchThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!miitopiaswitchThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miitopiaswitchThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}

function toggleMiitopia3dsFilter(isOn) {
  for (let i = 0; i < miitopia3dsThumbnails.length; i++) {
    if (isOn) {
      if (miitopia3dsThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miitopia3dsThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!miitopia3dsThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miitopia3dsThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}

function toggleMiscFilter(isOn) {
  for (let i = 0; i < miscThumbnails.length; i++) {
    if (isOn) {
      if (miscThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miscThumbnails[i].parentNode.classList.remove("u-hidden");
      }
    }
    else {
      if (!miscThumbnails[i].parentNode.classList.contains("u-hidden")) {
        miscThumbnails[i].parentNode.classList.add("u-hidden");
      }
    }
  }
}