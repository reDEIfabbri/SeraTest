let slideIndex = 0; /* Alapból az első képről indulunk */
const listOfSlidesPictures = document.getElementsByClassName("mySlides fade pics"); /* Because of this part the script must be tagged in the html !!AFTER!! ALL!! the ELEMENTS!! of this class are DEFINED!!*/
const listOfDotsPictures = document.getElementsByClassName("dot");

let nIntervalIDPics;

function showSlidePics(newIndex) {
    for (let i = 0; i < listOfSlidesPictures.length; i++) {
        listOfSlidesPictures[i].style.display = "none";
    }

    for (let i = 0; i < listOfDotsPictures.length; i++) {
        listOfDotsPictures[i].className = "dot";
    }

    if (newIndex >= listOfSlidesPictures.length) {
        newIndex = 0
    }
    if (newIndex < 0) {
        newIndex = listOfSlidesPictures.length - 1
    }

    listOfSlidesPictures[newIndex].style.display = "flex";
    listOfDotsPictures[newIndex].className = "dot active";

    slideIndex = newIndex;

}

function plusSlidesPics(deltaIndex) {
    showSlidePics(slideIndex + deltaIndex);
    clearInterval(nIntervalIDPics);
    nIntervalIDPics = null;
}

function currentSlidePics(absIndex) {
    showSlidePics(absIndex);
    clearInterval(nIntervalIDPics);
    nIntervalIDPics = null;
}

function slideShowPics() {
    showSlidePics(slideIndex + 1);
}

function startSlideShowPics() {
    if (!nIntervalIDPics) {
        nIntervalIDPics = setInterval(slideShowPics, 5000);
    }
}

startSlideShowPics();