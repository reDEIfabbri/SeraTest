let pn = 1;

// function changeText(id) {
//     id.innerText = pn + ".webp";
// }

function changeYearTo(id) {
    image.setAttribute("data-path", id.getAttribute("data-path"));
    image.setAttribute("data-max", id.getAttribute("data-max"));
    image.src = image.getAttribute("data-path") + 1 + ".webp";
    image.alt = image.getAttribute("data-path") + 1 + ".webp";
}

function goPicBack(id) {
    pn--;
    if (pn < 1) {
        pn = image.getAttribute("data-max");
    }
    id.src = id.getAttribute("data-path") + pn + ".webp";
    id.alt = image.getAttribute("data-path") + pn + ".webp";
}

function goPicForth(id) {
    pn++;
    if (pn > image.getAttribute("data-max")) {
        pn = 1;
    }
    id.src = id.getAttribute("data-path") + pn + ".webp";
    id.alt = image.getAttribute("data-path") + pn + ".webp";
}
