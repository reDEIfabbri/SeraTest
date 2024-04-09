let pn = 1;

function changeText(id) {
    id.innerText = pn + ".jpg";
}

function goPicBack(id) {
    pn--;
    if (pn == 0) {
        pn = 19;
    }
    id.src = "src/pictures/gallery/test/" + pn + ".jpg";
    changeText(number);
}

function goPicForth(id) {
    pn++;
    if (pn == 20) {
        pn = 1;
    }
    id.src = "src/pictures/gallery/test/" + pn + ".jpg";
    changeText(number);
}