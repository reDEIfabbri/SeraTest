let pn = 1;
const slide = document.getElementById("slides");
/*
setInterval(function () {
    slides.src = "/src/pictures/plakat" + pn + ".png";
    num()
}, 5000);*/

function num() {
    pn++;
    if (pn > 4) {
        pn = 1
    }

}

let boolPlay = 1;

let nIntervID;

function changeSlide(id) {
    id.src = "/src/pictures/plakat" + pn + ".png";
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
    alert(id);
    if(boolPlay == 1) {
        startSlideShow(id);
        boolPlay = 0;
    }
    else {
        stopSlideShow(id);
        boolPlay = 1;
    }
}