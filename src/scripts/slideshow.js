let slideIndexCalendar = 0; /* Alapból az első képről indulunk */
const listOfSlidesCalendar = document.getElementsByClassName("mySlides fade calendar"); /* Because of this part the script must be tagged in the html !!AFTER!! ALL!! the ELEMENTS!! of this class are DEFINED!!*/

let nIntervalIDCalendar;

function showSlideCal(newIndex) {
    for (let i = 0; i < listOfSlidesCalendar.length; i++) {
        listOfSlidesCalendar[i].style.display = "none";
    }

    if (newIndex >= listOfSlidesCalendar.length) {
        newIndex = 0
    }
    if (newIndex < 0) {
        newIndex = listOfSlidesCalendar.length - 1
    }

    listOfSlidesCalendar[newIndex].style.display = "block";

    slideIndexCalendar = newIndex;

}

function plusSlidesCal(deltaIndex) {
    showSlideCal(slideIndexCalendar + deltaIndex);
    clearInterval(nIntervalIDCalendar);
    nIntervalIDCalendar = null;
}

function slideShowCal() {
    showSlideCal(slideIndexCalendar + 1);
}

function startSlideShowCal() {
    if (!nIntervalIDCalendar) {
        nIntervalIDCalendar = setInterval(slideShowCal, 3000);
    }
}

startSlideShowCal();