let pn = 1;
const slide = document.getElementById("slides");

setInterval(function () {
    slides.src = "/src/pictures/plakat" + pn + ".png";
    num()
}, 5000);

function num() {
    pn++;
    if (pn > 4) {
        pn = 1
    }

}

function slideShow(id) {
    setInterval(function () {
        id.src = "/src/pictures/plakat" + pn + ".png";
        num();
    }, 5000)
}