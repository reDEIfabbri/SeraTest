let pn = 1;
const slide = document.getElementById("slides");
/*
setInterval(function () {
    slides.src = "/src/pictures/plakat" + pn + ".png";
    num()
}, 5000);*/


function num(id) {
    pn++;
    if (pn > id.getAttribute("data-max")) {
        pn = 1
    }

}

let boolPlay = 1;

let nIntervID;

function changeSlide(id) {
    id.src = id.getAttribute("data-path") + pn + ".jpg";
    id.alt = pn + ".jpg";
    num();
}

function startSlideShow(id) {
    if (!nIntervID) {
        nIntervID = setInterval(changeSlide, 5000, id);
    }
}
function stopSlideShow(id) {
    clearInterval(nIntervID);
    nIntervID = null;
}

function btnSlide(id) {
    alert(id.getAttribute("data-max"));
    if(boolPlay == 1) {
        startSlideShow(id);
        boolPlay = 0;
    }
    else {
        stopSlideShow(id);
        boolPlay = 1;
    }
}