let slideIndex = 0; /* Alapból az első képről indulunk */
const listOfSlides = document.getElementsByClassName("mySlides fade"); /* Because of this part the script must be tagged in the html !!AFTER!! ALL!! the ELEMENTS!! of this class are DEFINED!!*/

let nIntervalID;

function showSlide(newIndex) {
    for (let i = 0; i < listOfSlides.length; i++) {
        listOfSlides[i].style.display = "none";
    }

    if (newIndex >= listOfSlides.length) {
        newIndex = 0
    }
    if (newIndex < 0) {
        newIndex = listOfSlides.length - 1
    }

    listOfSlides[newIndex].style.display = "block";

    slideIndex = newIndex;

}

function plusSlides(deltaIndex) {
    showSlide(slideIndex + deltaIndex);
    clearInterval(nIntervalID);
    nIntervalID = null;
}

function slideShow() {
    showSlide(slideIndex + 1);
}

function startSlideShow() {
    if (!nIntervalID) {
        nIntervalID = setInterval(slideShow, 5000);
    }
}

startSlideShow();