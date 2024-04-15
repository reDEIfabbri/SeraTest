let pn = 1;

function changeText(id) {
    id.innerText = pn + ".jpg";
}

function goPicBack(id) {
    pn--;
    id.src = image.getAttribute("data-path") + pn + ".jpg";
    alert(image.getAttribute("data-path"));
    changeText(number);
}

function goPicForth(id) {
    pn++;
    id.src = image.getAttribute("data-path") + pn + ".jpg";
    alert(image.getAttribute("data-path"));
    changeText(number);
}